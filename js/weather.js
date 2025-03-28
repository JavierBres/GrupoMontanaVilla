// Using API OpenWeather;

window.addEventListener('load', () => {

    let city = "Villaviciosa";
    const appiKey = "2564577e29b887a880e851a747f2eb9f";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=es&units=metric&appid=${appiKey}`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            document.getElementById("tempValue").textContent = `${data.main.temp} ºC`;
            document.getElementById("tempMin").textContent = `Temp. min: ${data.main.temp_min} ºC`;
            document.getElementById("tempMax").textContent = `Temp. max: ${data.main.temp_max} ºC`;
            document.getElementById("humidity").textContent = `Humedad: ${data.main.humidity} %`;

            document.getElementById("namePlace").textContent = `${data.name}`;
            (document.getElementById("iconWeather")).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;  
            const date = new Date();
            let textDate = date.toLocaleDateString();
            document.getElementById("date").textContent = textDate;
            
            let sunRise1 = new Date(data.sys.sunrise * 1000);
            let sunRise2 = sunRise1.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"});
            document.getElementById("sunrise").textContent = `Orto: ${sunRise2}h`;
            let sunSet1 = new Date(data.sys.sunset * 1000);
            let sunSet2 = sunSet1.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"});
            document.getElementById("sunset").textContent = `Ocaso: ${sunSet2}h`;
            
        })
        .catch(error => {
            console.log("Error al cargar los datos del tiempo", error);
            // document.getElementById("descriptionWeather").textContent = "No se pudo cargar la información del tiempo.";
        })
})