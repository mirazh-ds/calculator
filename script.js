let operator;
let buffer = [];
let buffer2 = [];
let result;
const display = document.getElementById('display');




function clear() {

    buffer = [];
    buffer2 = [];    
    operator = undefined;
    display.textContent = "0";    

};

function operate(sign) {

    if (!operator) {

    
    buffer2.push(parseFloat(buffer.join('')));
    operator = sign;
    buffer = [];
    number = [];  

    } else {

        
        buffer2.push(parseFloat(buffer.join('')));
        buffer = [];
        number = [];
        

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
               
        }

        if (result === Infinity) {

            display.textContent = "Cannot divide by 0";
            clear();

        } else {
        
        operator = sign;
        display.textContent = result;
        buffer2[0] = result;
        buffer2.splice(1, 1);
        result = undefined;


        }
    }
}


function equals() {
    
    
    buffer2.push(parseFloat(buffer.join('')));

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
            display.textContent =  "error: enter a second value";

    }
    if (result === Infinity) {

        display.textContent = "Cannot divide by 0";
        
    } else {

        display.textContent = result;

    }

    buffer = [];
    buffer2 = [];    
    operator = undefined;

}


