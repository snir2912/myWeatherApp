const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const chalk = require('chalk')

const address = process.argv[2];
if (!address) {
    console.log(chalk.bgRed('please insert address'));
} else {
    geocode(address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return console.log(error);
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {

            }
            console.log(chalk.green('location: ' + location));
            console.log(chalk.green('weather summery: ' + forecastData));
        })
    })
}