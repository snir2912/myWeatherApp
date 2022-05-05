const path = require('path'),
    express = require("express"),
    app = express(),
    publicPathDirectory = path.join(__dirname, '../public'),
    viewsPath = path.join(__dirname, '../views')

app.use(express.static(publicPathDirectory))
app.set('view engine', 'hbs');
app.set('views', viewsPath)

app.get('', (req, res) => {
    res.render('index', {
        title: 'snirs title'
    })
})

app.get('/weather', (req, res) => {
    res.send('<h1>this is weather page</h1>')
})

app.listen(3000, () => {
    console.log('server works on port 3000');
})