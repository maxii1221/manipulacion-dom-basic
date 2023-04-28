const h1 = document.querySelector("h1");
const input1 = document.getElementById("calculo1");
const input2 = document.getElementById("calculo2");
const btn = document.getElementById("btncalcular");
const pResult = document.getElementById("result");
const form = document.getElementById("form");

form.addEventListener("submit", sumarInputValue);

function sumarInputValue(event){
    //para que no cargue la pagina cuando el boton es submit
    event.preventDefault();

    //las 3 siguientes opciones son para que el dato del input sea un dato tipo numero
    
    //const sumaInput = +input1.value + +input2.value;
    //const sumaInput = (Number(input1.value) + Number(input2.value));
    const sumaInput = (parseInt(input1.value) + parseInt(input2.value));
    pResult.innerText ="resultado: " + sumaInput;
}