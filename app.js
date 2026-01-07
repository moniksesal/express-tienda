const express = require('express')
const getContent = require('./template.js')
const productsData = require('./data.js')
const app = express()
const PORT = 3000

const getProductsByCategory = (category) => productsData.filter(product => product.category === category)

app.get('/', (req, res) => {
    res.send('Bienvenido a la tienda')
})

app.get('/electronica', (req, res) => {
    const category = "electrónica"
    const products = getProductsByCategory(category)
    res.send(getContent(category, products))
})

app.get('/ropa', (req, res) => {
    const category = "ropa"
    const products = getProductsByCategory(category)
    res.send(getContent(category, products))
})

app.get('/hogar', (req, res) => {
    const category = "hogar"
    const products = getProductsByCategory(category)
    res.send(getContent(category, products))
})

app.get('/productos', (req, res) => {
    res.send(getContent('toda la tienda', productsData))
})

app.get('/baratos', (req, res) => {
    const baratos = productsData.filter(product => product.price < 100)
    res.send(getContent('menos de 100€', baratos))
})

app.get('/caros', (req, res) => {
    const caros = productsData.filter(product => product.price >= 100)
    res.send(getContent('más de 100€', caros))
})

app.use((req, res) => {
    res.status(404).send('Página no encontrada - 404')
})

app.listen(PORT, () => {
    console.log(`El servidor express está escuchando en la URL http://localhost:${PORT}`)
})



