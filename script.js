let palabra = "hola";
const numero = 1234;
let verdadero = true;


function saludar(saludo) {
    let otraVariable="soy un string"
    alert(palabra)
    console.log(saludo)
}

saludar(palabra)
saludar(numero)
saludar(verdadero)


// otra forma de definirlo

let saludar2=(saludo)=>{
}

function promedio(num1,num2) {

    let suma = num1 + num2
    console.log(suma/2)
    
}

promedio(20,40)
promedio(2,1)


let unTexto=document.querySelector("#text1");
let boton=document.querySelector("button");
let texto2=document.getElementById("text2");

let tarjetas=document.querySelectorAll("button") // todos los buttons que encuentre
let imagenes=document.getElementsByTagName("img")


let indicar=()=>{
    console.log("paso el mouse")
}
boton.addEventListener('mouseover',indicar)

texto2.addEventListener('mouseover')