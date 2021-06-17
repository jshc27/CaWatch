function init() {
    //Variables
    var result = document.getElementById("result");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var division = document.getElementById("division");
    var seis = document.getElementById("seis");
    var cinco = document.getElementById("cinco");
    var cuatro = document.getElementById("cuatro");
    var multiplicacion = document.getElementById("multiplicacion");
    var tres = document.getElementById("tres");
    var dos = document.getElementById("dos");
    var uno = document.getElementById("uno");
    var resta = document.getElementById("resta");
    var cero = document.getElementById("cero");
    var punto = document.getElementById("punto");
    var mas = document.getElementById("mas");
    var igual = document.getElementById("igual");
    var reset = document.getElementById("reset");
    
    //Eventos

    uno.onclick = function(e) {
        result.textContent = result.textContent + "1";
    }
    dos.onclick = function(e) {
        result.textContent = result.textContent + "2";
    }
    tres.onclick = function(e) {
        result.textContent = result.textContent + "3";
    }
    cuatro.onclick = function(e) {
        result.textContent = result.textContent + "4";
    }
    cinco.onclick = function(e) {
        result.textContent = result.textContent + "5";
    }
    seis.onclick = function(e) {
        result.textContent = result.textContent + "6";
    }
    siete.onclick = function(e) {
        result.textContent = result.textContent + "7";
    }
    ocho.onclick = function(e) {
        result.textContent = result.textContent + "8";
    }
    nueve.onclick = function(e) {
        result.textContent = result.textContent + "9";
    }
    cero.onclick = function(e) {
        result.textContent = result.textContent + "0";
    }

}



    
    