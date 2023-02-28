const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const PORT = 3000

// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/images', express.static(__dirname + 'public/images'))
app.use(bodyParser.urlencoded({extended: true}))

// Templating Engine
app.set('views', './src/views')
app.set('view engine', 'ejs')

// Routes
const newsRouter = require('./src/routes/news')

app.use('/', newsRouter)
app.use('/business', newsRouter)
app.use('/entertainment', newsRouter)
app.use('/health' , newsRouter)
app.use('/science' , newsRouter)
app.use('/sports' , newsRouter)
app.use('/searchResults', newsRouter)

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})

// 6fff77f1ff594bad8332a571f9a8964d