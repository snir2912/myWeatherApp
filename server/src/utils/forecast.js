const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=38325228f56fe9dd59ad68463c71c701&query=' + latitude + ',' + longitude + '&inits=f'

    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('unable to connect weather services', undefined)
        } else if (response.body.error) {
            callback('unable to fined your locattion', undefined)
        } else {
            callback(undefined, 'today is: ' + response.body.current.weather_descriptions + ',' + ' the current temperasture is: ' + response.body.current.temperature + '° and its feels like: ' + response.body.current.feelslike + '° and' + response.body.current.precip + '% to rain')
        }
    })
}

module.exports = forecast