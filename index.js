/*
  Crea una calculadora basica usando funciones que permita, sumar, restar, multiplicar y dividir.

  Cada operacion debe estar en una funcion por separado.

  La funcion llamada "calculate" debe mostrar en consola en valor de la operacion. 
*/


//Numeros a operar
let sumar = {
    a: 30,
    b: 60
}

let restar = {
    a: 10000,
    b: 578
}

let multiplicar = {
    a: 3.54,
    b: 30
}

let dividir = {
    a: 100,
    b: 6
}

//Tu funcion de suma aqui abajo
function fsumar(a, b) {
    return a + b;
}


//Tu funcion de resta aqui abajo
function frestar(a, b) {
    return a - b;
}


//Tu funcion de  multiplicar aqui abajo
function fmultiplicar(a, b) {
    return a * b;
}


//Tu funcion de dividir aqui abajo
function fdividir(a, b) {
    return a / b;
}



//Funcion calculate
window.onload = function () {
    console.log("Me ejecute al cargar la pagina")
    //Ejecuta tu funcion "calculate" dentro de este bloque de codigo

    calculate(fmultiplicar,"multiplicar");
}
function calculate(func, obj) {
    //Tu logica va aqui 
    switch (func) {
        case fsumar:
            return fsumar(sumar["a"], sumar["b"]);
        case frestar:
            return frestar(restar["a"], restar["b"]);
        case fmultiplicar:
            return fmultiplicar(multiplicar["a"] ,multiplicar["b"]);
        case fdividir:
            return fdividir(dividir["a"], dividir["b"]);
        default:  
        console.log("invalido");       
    }

}


