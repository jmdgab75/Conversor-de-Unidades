function converterTemperatura() {
    var celsius = parseFloat(document.getElementById("celsius").value);
    var fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("resultadoTemperatura").textContent = fahrenheit.toFixed(2) + " °F";
  }

  function converterDistancia() {
    var quilometros = parseFloat(document.getElementById("quilometros").value);
    var milhas = quilometros * 0.621371;
    document.getElementById("resultadoDistancia").textContent = milhas.toFixed(2) + " mi";
  }

  function converterPeso() {
    var quilogramas = parseFloat(document.getElementById("quilogramas").value);
    var libras = quilogramas * 2.20462;
    document.getElementById("resultadoPeso").textContent = libras.toFixed(2) + " lb";
  }