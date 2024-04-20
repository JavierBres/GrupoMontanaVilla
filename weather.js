// Using API OpenWeather;

window.addEventListener('load', () => {

    let temperatureValue = document.getElementById("tempValue");
    let temperatureMin = document.getElementById("tempMin");
    let temperatureMax = document.getElementById("tempMax");
    let humidity = document.getElementById("humidity");

    let namePlace = document.getElementById("namePlace");
    let iconWeather = document.getElementById("iconWeather");
    let descriptionWeather = document.getElementById("descriptionWeather");

    let wind = document.getElementById("wind");
    let windGust = document.getElementById("windGust");
    let sunrise = document.getElementById("sunrise");
    let sunset = document.getElementById("sunset");

    let city = "Villaviciosa";
    const appiKey = "2564577e29b887a880e851a747f2eb9f";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=es&units=metric&appid=${appiKey}`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            temperatureValue.textContent = `${data.main.temp} ºC`;
            temperatureMin.textContent = `Temp. min: ${data.main.temp_min} ºC`;
            temperatureMax.textContent = `Temp. max: ${data.main.temp_max} ºC`;
            humidity.textContent = `Humedad: ${data.main.humidity} %`;

            namePlace.textContent = data.name;
            iconWeather.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;  
            descriptionWeather.textContent = data.weather[0].description;

            wind.textContent = `${data.wind.speed} km/h`;
            windGust.textContent = `Rachas: ${data.wind.gust} km/h`;
            let sunRise1 = new Date(data.sys.sunrise * 1000);
            let sunRise2 = sunRise1.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"});
            sunrise.textContent = `Orto: ${sunRise2}h`;
            let sunSet1 = new Date(data.sys.sunset * 1000);
            let sunSet2 = sunSet1.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"});
            sunset.textContent = `Ocaso: ${sunSet2}h`;

        })
        .catch(error => {
            console.log(error);
        })
})