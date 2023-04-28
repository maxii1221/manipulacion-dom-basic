//h1 {color: red}
//.parrafito{...}
//#h-id{...}
//const h1 = document.querySelector("h1");
//const p = document.querySelector("p");
//const parrafito = document.getElementsByClassName("parrafito");
//const pid = document.getElementById("pid");
//const input = document.querySelector("input")

//console.log(input.value);

//console.log({
//    h1,
//    p,
//    parrafito,
//    pid,
//    input,
//})

//cambiando el html incluyendo etiquetas, etc
//h1.innerHTML = "Cambio"; 

//cambiando solo el texto del h1
//h1.innerText = "cambio mas seguro";

//acceder atributos ejemplo class
//console.log(h1.getAttribute("class"));

//h1.setAttribute("class", "rojo");
//class es el atributo que esta en html, y rojo al atributo que queremos que cambie

//funcion espesifica para las clases.
//h1.classList.add("rojo");
//h1.classList.remove("verde");

//para cambiar el valor de un input
//input.value = "456"

//para crear elemenos en html desde js
//const img = document.createElement("img");
//img.setAttribute("src", "https://svgsilh.com/svg/3176959.svg");
//console.log(img)

//pid.append(img)

const h1 = document.querySelector("h1");
const input1 = document.getElementById("calculo1");
const input2 = document.getElementById("calculo2");
const btn = document.getElementById("btncalcular");
const pResult = document.getElementById("result");

function btnOnClick(){
    //las 3 siguientes opciones son para que el dato del input sea un dato tipo numero
    
    //const sumaInput = +input1.value + +input2.value;
    //const sumaInput = (Number(input1.value) + Number(input2.value));
    const sumaInput = (parseInt(input1.value) + parseInt(input2.value));
    pResult.innerText ="resultado: " + sumaInput;
}