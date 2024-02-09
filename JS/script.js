function Ejercicio1() {
    let Base = parseFloat(document.getElementById("Base").value);
    let Exponente = parseFloat(document.getElementById("Exponente").value);
    let Resultado = Math.pow(Base, Exponente);
    
    document.getElementById("Potencia").innerHTML = Base+ "^" +Exponente+ " = " +Resultado;
}

function Ejercicio2() {
    let Centigrados = parseFloat(document.getElementById("Centigrados").value);
    let Farenheit = (Centigrados * 9/5) + 32;

    document.getElementById("Fahrenheit").innerHTML = Centigrados+ " °C = " +Farenheit+ " °F";
}

var listaNombres = [];

function agregarNombre() {
    let Nombre = document.getElementById("Nombre").value;

    if (Nombre != ""){
        listaNombres.push(Nombre);
    }

    document.getElementById("Nombre").value = "";
    document.getElementById("Nombre").focus();

    Listar(listaNombres, 1);
}

function filtrarNombres() {
    let numLetras = parseInt(document.getElementById("numLetras").value);
    let listaFiltrada = listaNombres.filter(x => x.length == numLetras);
    document.getElementById("numLetras").focus();
    
    Listar(listaFiltrada, 0)
}

function Listar(Lista, a) {
    let html = "";

    Lista.forEach(x => html += "<li><h3>" +x+ "</h3></li>");

    if (a == 1) {
        document.getElementById("listaNombres").innerHTML = html;
    }
    else if (a == 0) {
        document.getElementById("listaFiltrada").innerHTML = html;
    }
    else {
        document.getElementById("listaNumeros").innerHTML = html;
    }
}

function Ejercicio4() {
    let fechaNacimiento = new Date(document.getElementById("fechaNacimiento").value);
    let Hoy = new Date();
    let Edad = Hoy.getFullYear() - fechaNacimiento.getFullYear();
    let m = Hoy.getMonth() - fechaNacimiento.getMonth();

    if (m < 0 || (m === 0 && Hoy.getDate() < fechaNacimiento.getDate())) {
        Edad--;
    }

    document.getElementById("Edad").innerHTML ="Edad de la persona nacida en " +document.getElementById("fechaNacimiento").value+ " es: " +Edad;
}

function Ejercicio5() {
    let Texto = document.getElementById("Texto").value;
    let arregloPalabras = Texto.split(RegExp(/\s{1,}/));
    console.log(arregloPalabras);

    if (arregloPalabras[arregloPalabras.length - 1] == "") {
        arregloPalabras.pop();
    }
    else if (arregloPalabras[0] == "") {
        arregloPalabras.shift();
    }

    let Cantidad = arregloPalabras.length;

    document.getElementById("cantidadPalabras").innerHTML = "La cantidad de palabras es en el texto es: " +Cantidad;
}

var Numeros = [];

function agregarNumero() {
    let Numero = parseFloat(document.getElementById("Numero").value);

    if (document.getElementById("Numero").value != "") {
        Numeros.push(Numero);
        Listar(Numeros, 2)
    }
    
    document.getElementById("Numero").value = "";
    document.getElementById("Numero").focus();
}

function calcularPromedio() {
    if (Numeros.length > 0) {
        let Suma = 0;
        Numeros.forEach((x) => Suma += x);
        let Promedio = Suma / Numeros.length;

        document.getElementById("Promedio").innerHTML = "El promedio de los números de la lista es: " +Promedio;
    }
}

function Ejercicio7() {
    let Color = document.getElementById("Color").value;

    document.getElementById("Cuadro").style.backgroundColor = Color;
}