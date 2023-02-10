const express = require('express')
const axios = require('axios')
var cors = require('cors')

const app = express()

app.get('/api/items', cors(), async (req, res) => {

    res.json('items')
})
app.get('/api/items/:id', cors(), async (req, res) => {
    res.json('item by id')
})
app.get('/api/items/:id/description', cors(), async (req, res) => {
    res.json('item description')
})



app.listen(8000, () => (console.log('Server listening on PORT 8000')))