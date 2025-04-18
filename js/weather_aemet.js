const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtdW50YW55YS5lc2NhbGFkYUBnbWFpbC5jb20iLCJqdGkiOiI5ODE4YjBkNC05OTgwLTRjNzMtYmRhOS1mMTE0Mjg0NjFjZmQiLCJpc3MiOiJBRU1FVCIsImlhdCI6MTcwMjY1NjkzOCwidXNlcklkIjoiOTgxOGIwZDQtOTk4MC00YzczLWJkYTktZjExNDI4NDYxY2ZkIiwicm9sZSI6IiJ9.gPw1SHgqgDXbCI9gg0S62j5716Y1LJORjq0qsW1s4yE';
const idMunicipio = '33076';

// Paso 1: Pedimos la URL de los datos
fetch(`https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/${idMunicipio}/?api_key=${API_KEY}`)
  .then(response => response.json())
  .then(data => {
    if (data.datos) {
      // Paso 2: Pedimos los datos reales a la URL proporcionada
      fetch(data.datos)
        .then(response => response.json())
        .then(prediccion => {
          const hoy = prediccion[0].prediccion.dia[0];

          const temperaturaMin = hoy.temperatura.minima;
          const temperaturaMax = hoy.temperatura.maxima;

          const humedadRelativaMin = hoy.humedadRelativa.minima;
          const humedadRelativaMax = hoy.humedadRelativa.maxima;

          const estadoCielo = hoy.estadoCielo.descripcion;

          const viento = hoy.viento.velocidad;

          document.getElementById('weather').innerHTML = `
                <p><strong>Temperatura:</strong> ${temperaturaMin}°C - ${temperaturaMax}°C</p>
                <p><strong>Humedad Relativa:</strong> ${humedadRelativaMin}% - ${humedadRelativaMax}%</p>
                <p><strong>Estado del cielo:</strong> ${estadoCielo}</p>
                <p><strong>Velocidad del viento:</strong> ${viento}</p>
              `;
        });
    } else {
      document.getElementById('weather').textContent = 'No se pudo obtener la URL de los datos.';
    }
  })
  .catch(error => {
    console.error(error);
    document.getElementById('weather').textContent = 'Error al obtener los datos meteorológicos.';
  });