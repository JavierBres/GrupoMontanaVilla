const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtdW50YW55YS5lc2NhbGFkYUBnbWFpbC5jb20iLCJqdGkiOiI5ODE4YjBkNC05OTgwLTRjNzMtYmRhOS1mMTE0Mjg0NjFjZmQiLCJpc3MiOiJBRU1FVCIsImlhdCI6MTcwMjY1NjkzOCwidXNlcklkIjoiOTgxOGIwZDQtOTk4MC00YzczLWJkYTktZjExNDI4NDYxY2ZkIiwicm9sZSI6IiJ9.gPw1SHgqgDXbCI9gg0S62j5716Y1LJORjq0qsW1s4yE';
const idMunicipio = '33076';
const idEstacion = '1228E'; // Estación cercana (Gijón)

// 1. Obtener temperatura actual
fetch(`https://opendata.aemet.es/opendata/api/observacion/convencional/datos/estacion/${idEstacion}/?api_key=${API_KEY}`)
.then(response => response.json())
.then(data => {
  if (data.datos) {
    fetch(data.datos)
      .then(res => res.json())
      .then(obs => {
        // Tomamos la última observación
        const ultima = obs[obs.length - 1];
        const temp = ultima.ta;
        const hora = ultima.fint;

        document.getElementById('current').innerHTML = `
          <p><strong>Temperatura actual:</strong> ${temp}°C</p>
          <p><em>Última actualización:</em> ${hora}</p>
        `;
      });
  } else {
    document.getElementById('current').textContent = 'No se pudo obtener la temperatura actual.';
  }
});

// 2. Obtener predicción diaria
fetch(`https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/${idMunicipio}/?api_key=${API_KEY}`)
.then(response => response.json())
.then(data => {
  if (data.datos) {
    fetch(data.datos)
      .then(response => response.json())
      .then(prediccion => {
        const hoy = prediccion[0].prediccion.dia[0];

        const temperaturaMin = hoy.temperatura.minima;
        const temperaturaMax = hoy.temperatura.maxima;
        const viento = hoy.viento[0] ? hoy.viento[0].velocidad : 'N/D';
        const estadoCielo = hoy.estadoCielo[0] ? hoy.estadoCielo[0].descripcion : 'N/D';

        document.getElementById('forecast').innerHTML = `
          <p><strong>Predicción del día:</strong></p>
          <p>Temperatura: ${temperaturaMin}°C - ${temperaturaMax}°C</p>
          <p>Viento: ${viento} km/h</p>
          <p>Estado del cielo: ${estadoCielo}</p>
        `;
      });
  } else {
    document.getElementById('forecast').textContent = 'No se pudo obtener la predicción.';
  }
});