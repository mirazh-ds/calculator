/*
Pulsante numero aggiunge numero al buffer, ed esegue operazione tra gli ultimi due numeri dell'array (se singolo, non fa niente)
Pulsante operazione cambia valore variabile operator
Uguale chiama array.reduce, rende operator undefined e ritorna il risultato
*/

let operator;
let number = [];
let buffer = [];
let buffer2 = [];
let result;

function clear() {

    buffer = [];
    buffer2 = [];
    number = [];  
    operator = undefined;

};

function operate(sign) {
    number = buffer.join('');
    buffer2.push(parseInt(number));
    operator = sign;
    buffer = [];
    number = [];    
}


function equals() {
    number = buffer.join('');
    buffer2.push(parseInt(number));

    switch(operator) {
        case '+':
            result = buffer2.reduce((a, b) => {return a + b});
            break;
        case '-':
            result = buffer2.reduce((a, b) => {return a - b});
            break;
        case '*':
            result = buffer2.reduce((a, b) => {return a * b});
            break;
        case '/':
            result = buffer2.reduce((a, b) => {return a / b});
            break;
        default:
            console.log("error: enter a second value")

    }

    console.log(result);

    clear();
    
}

// function add(...args) {
//     const result = args.reduce((a, b) => {return a + b})
//     return result;    
    
// }

// function subtract(...args) {
//     const result = args.reduce((a, b) => {return a - b})
//     return result;
// }

// function multiply(...args) {
//     const result = args.reduce((a, b) => {return a * b})
//     return result;
// }

// function divide(...args) {
//     const result = args.reduce((a, b) => {return a / b})
//     return result;
// }



