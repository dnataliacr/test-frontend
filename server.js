const express = require('express')
const axios = require('axios')
var cors = require('cors')

const app = express()

app.get('/api/items', cors(), async (req, res) => {
    try {
        const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${req.query.q}`)
        res.json(response.data)
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