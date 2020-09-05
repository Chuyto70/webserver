const express = require('express')
const app = express()
const hbs = require('hbs')
const port = process.env.PORT || 3000
require('./helpers/helpers')

app.use(express.static('public'))



hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs')

app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
})

app.get('/', (req, res) => {

    res.render('home')
})
app.get('/about', (req, res) => {
    res.render('about')
})