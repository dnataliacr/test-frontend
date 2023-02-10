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
        res.json(response.data)
    } catch (error) {
        res.status(500).send(error.message)

    }
})
app.get('/api/items/:id/description', cors(), async (req, res) => {
    try {
        const response = await axios.get(`https://api.mercadolibre.com/items/${req.params.id}/description`)
        res.json(response.data)
    } catch (error) {
        res.status(500).send(error.message)

    }
})



app.listen(8000, () => (console.log('Server listening on PORT 8000')))