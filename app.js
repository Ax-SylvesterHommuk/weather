// Basic

document.addEventListener( 'DOMContentLoaded', cityWeather)

function weatherDataFetch(city){
    var key = '7122c5b1245fc8d20e6d2ea2793ee2e4';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(function (resp) {
            return resp.json()
        })
        .then(function(data) {
            console.log(data);
        })
        .
        catch(function () {

        });
}

function cityWeather (e){
    weatherDataFetch('Tallinn');
}