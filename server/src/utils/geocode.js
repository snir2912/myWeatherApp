const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic25pcjI5MTIiLCJhIjoiY2wwZzdmenlkMTBiYTNjbXpkN3d1NHFrdCJ9.mA_6QZL_551aSGLCvfkIHA'

    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('can not to connect to location services', undefined)
        } else if (response.body.features.length === 0) {
            callback('can not fined your locattion', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode