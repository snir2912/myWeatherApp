const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const {
    getMaxListeners
} = require('process');
const path = require('path'),
    express = require("express"),
    app = express(),
    hbs = require('hbs'),
    publicPathDirectory = path.join(__dirname, '../public'),
    cssPathDirectory = path.join(__dirname, '../css'),
    viewsPath = path.join(__dirname, '../templates/views'),
    partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs');
app.set('views', viewsPath)
app.set('partials', partialsPath)
hbs.registerPartials(partialsPath)
app.use(express.static(publicPathDirectory))
app.use(express.static(partialsPath))
app.use(express.static(viewsPath))
app.use(express.static(cssPathDirectory))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Wellcome to my weather app',
        address: 'haifa'
    })
})
app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            Error: 'please insert an adress'
        })
    }

    const address = req.query.address;
    if (!address) {
        return res.send({ error: 'please insert your location' })
    } else {
        geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
            if (error) {
                return res.send({ error: 'unablle to finde your locantion, please try another search' })
            }

            forecast(latitude, longitude, (error, forecastData) => {
                if (error) {
                    return res.send({ error })
                }
                res.send({
                    location: location,
                    summery: forecastData
                })
            })
        })
    }
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'snir inbar',
        phone: '052-6281514',
        email: 'snir2912@gmail.com',
        git: "go to github!"
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        msg: "sorry we can't find your page :("
    })
})

app.listen(4000, () => {
    console.log('server works on port 4000');
})