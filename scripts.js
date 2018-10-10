var header = document.querySelector('header');
var section = document.querySelector('section');
var requestURL = 'http://api.openweathermap.org/data/2.5/weather?q=Waterloo,CA&APPID=dc64203bfe6f92a299b6d1f061e7418d';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function weatherApp() {
    var weather = request.response;
    document.getElementById("demo").innerHTML =
        "City: " + weather.name + "<br><br>" +
        "Country: " + weather.sys.country + "<br> <br>" +
        "Current Status: " + weather.weather[0].description + "<br> <br>" +
        "Temperature: " + weather.main.temp + "Kelvin" + "<br> <br>" +
        "Atmospheric Pressure: " + weather.main.pressure + "hPa" + "<br> <br>" +
        "Humidity: " + weather.main.humidity + "%" + "<br> <br>" +
        "Wind Speed: " + weather.wind.speed + "m/sec" + "<br> <br>" +
        "Wind Direction (degrees): " + weather.wind.deg + "<br> <br>";
}

function refreshData() {
  request.send();
  weatherApp();
}

//refreshData should work but the API only updates its data every 2 hours-ish.
