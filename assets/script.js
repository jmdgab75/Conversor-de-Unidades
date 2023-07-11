function coverterTemperatura() {
    let celsius = parseFloat(document.getElementById("celsius").value);
    let fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("resultadoTemperatura").textContent = fahrenheit.toFixed(2) + " °F";
}

function coverterDistancia() {
    let quilometros = parseFloat(document.getElementById("celsius").value);
    let milhas = quilometros * 0,621371;
    document.getElementById("resultadoDistancia").textContent = milhas.toFixed(2) + " mi";
}

function coverterMassa() {
    let quilograma = parseFloat(document.getElementById("quilograma").value);
    let libras = quilograma * 2.20462;
    document.getElementById("resultadoMassa").textContent = libras.toFixed(2) + " lb";
}

