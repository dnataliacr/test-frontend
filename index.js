const express = require('express')
const axios = require('axios')
var cors = require('cors')

const app = express()

app.get('/api/items', cors(), async (req, res) => {
    try {
        const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}`)

        const result = {}
        result.items = []
        result.categories = []

        const categories = response.data.available_filters.find((item) => item.id === 'category')
        if (categories) {
            categories?.values?.forEach((item) => result.categories.push(item.name))
            const sortedCategories = categories?.values?.sort((a, b) =>
                a.results > b.results ? -1 : (a.results < b.results ? 1 : 0))
            const categoriesNames = sortedCategories.map((item) => item?.name)
            result.categories = categoriesNames
        }

        response.data.results.forEach(element => {
            let product = {}
            product.id = element?.id
            product.title = element?.title
            product.price = {
                currency: element?.currency_id,
                amount: element?.price,
                decimals: +(element?.price?.toString().split(".")[1])
            }
            product.picture = element?.thumbnail
            product.condition = element?.condition
            product.free_shiping = element?.shipping?.free_shipping
            product.location = element?.address?.state_name

            result?.items?.push(product)
        });

        result.autor = {
            name: 'Natalia',
            last_name: 'Cabral'
        }

        res.json(result)
    } catch (error) {
        res.status(500).send(error.message)

    }
})

app.get('/api/items/:id', cors(), async (req, res) => {
    try {
        const response = await axios.get(`https://api.mercadolibre.com/items/${req.params.id}`)

        const item = {
            author: {
                name: 'Natalia',
                lastname: 'Cabral'
            },
            item: {
                id: response.data.id,
                title: response.data.title,
                price: {
                    currency: response.data.currency_id,
                    amount: response.data.price,
                    decimals: 0,
                },
                picture: response.data.thumbnail,
                condition: response.data.condition,
                free_shipping: response.data.shipping.free_shipping,
                sold_quantity: response.data.sold_quantity,
                category_id: response.data.category_id
            }

        }

        res.json(item)

    } catch (error) {
        res.status(500).send(error.message)
    }
})
app.get('/api/items/:id/description', cors(), async (req, res) => {
    try {
        const response = await axios.get(`https://api.mercadolibre.com/items/${req.params.id}/description`)
        response.data.autor = {
            name: 'Natalia',
            lastname: 'Cabral'
        }

        res.json(response.data)

    } catch (error) {
        res.status(500).send(error.message)

    }
})
app.get('/api/categories/:id', cors(), async (req, res) => {
    try {
        const response = await axios.get(`https://api.mercadolibre.com/categories/${req.params.id}`)
        const category = {}
        category.data = []
        category.data.push(response.data.name)

        category.autor = {
            name: 'Natalia',
            lastname: 'Cabral'
        }

        res.json(category)

    } catch (error) {
        res.status(500).send(error.message)
    }
})


app.listen(8000, () => (console.log('Server listening on PORT 8000')))