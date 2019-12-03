const $resultado = document.querySelector("#resultado"),
    $fecha = document.querySelector("#fecha");

fetch("https://api.exchangeratesapi.io/latest?base=USD&symbols=MXN")
    .then(respuesta => respuesta.json())
    .then(respuestaDecodificada => {
        const precioDolarHoyEnMXN = respuestaDecodificada.rates.MXN;
        const fechaActualizacion = respuestaDecodificada.date;
        $fecha.textContent = fechaActualizacion;
        $resultado.textContent = precioDolarHoyEnMXN;
    });