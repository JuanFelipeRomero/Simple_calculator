
// Guardar elementos en variables ---------------------------------------------------------------------
const screen = document.getElementById('screen'); //Nodo de la pantalla donde esta el resultado

const clearBtn = document.getElementById('clear');//Boton clearScreen
const deleteBtn = document.getElementById('delete');//Boton clearScreen

const equalBtn = document.getElementById('equal');//Boton igual

const buttons = document.querySelectorAll('.button'); //seleccionar todos los botones numericos y operaciones
const buttonsArray = [...buttons]; //array con todos los botones  


// Funciones para añadir, eliminar, igual --------------------------------------------------------------
function clickOnButton () { //FUncion para colocar numeros y operadores en pantalla
    screen.value += this.dataset.value;
}

function clearScreen(){ //funcion para borrar pantalla
    screen.value = "";
}

function deleteElement () {
    screen.value = screen.value.slice(0,-1); //elimina el ultimo caractter de la cadena
}

function showResult () {

    let operation  = screen.value;
    let calculate = new Function('return ' + operation);
    screen.value = calculate();
}

// Agregacion de eventos ---------------------------------------------------------------------
buttonsArray.forEach( button => {
    button.addEventListener('click', clickOnButton);
});

clearBtn.addEventListener('click', clearScreen);
deleteBtn.addEventListener('click', deleteElement);
equalBtn.addEventListener('click', showResult);








