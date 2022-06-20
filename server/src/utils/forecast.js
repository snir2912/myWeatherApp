const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
        const url = 'http://api.weatherstack.com/current?access_key=38325228f56fe9dd59ad68463c71c701&query=' + latitude + ',' + longitude + '&inits=f'

        request({ url, json: true }, (error, response) => {
            if (error) {
                callback('unable to connect weather services', undefined)
            } else if (response.body.error) {
                callback('unable to fined your locattion', undefined)
            } else {
                let msg = `<p>today is: <strong>${response.body.current.weather_descriptions}</strong></p><br>
            < p > the current temperasture is: <strong>${response.body.current.temperature}°C</strong></p><br>
            < p > its feels like: <strong>${response.body.current.response.body.current.feelslike}°C</strong>< /p><br>
            <p>chance of rain: <strong>${response.body.current.precip}$</strong></p>`
                callback(undefined, msg)
            }
        })
    }
    // 'today is: ' + response.body.current.weather_descriptions + ',' + ' the current temperasture is: ' + response.body.current.temperature + '° and its feels like: ' + response.body.current.feelslike + '° and ' + response.body.current.precip + '% to rain'
module.exports = forecast