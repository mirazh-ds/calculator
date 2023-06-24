let operator;
let buffer = [];
let buffer2 = [];
let result;
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

function queue(num) {

    if (result) {

        display.textContent = ""
        result = undefined;
        
    }

    buffer.push(num);
    display.textContent += `${num}`;
    

}

function decimal() {

    if (buffer.includes('.')) {
        alert("Don't try to create an IP address out of your value");
        clear();
        return;
    }

    buffer.push('.');
    display.textContent += '.';

    
}



function clear() {

    buffer = [];
    buffer2 = [];    
    operator = undefined;
    display.textContent = "";    

};

function operate(sign) {

    if (!operator) {

    
    buffer2.push(parseFloat(buffer.join('')));
    operator = sign;
    display.textContent += ` ${operator} `
    buffer = [];
    number = [];  

    } else {

        if (!buffer.length) {
            
            buffer = [];
            buffer2 = [];    
            operator = undefined;
            alert("Operator already in queue");
            clear();
            return;
            
        }

        
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

            alert("Cannot divide by 0");
            clear();

        } else {
        
        operator = sign;
        display.textContent = result;
        display.textContent += ` ${operator} `
        buffer2[0] = result;
        buffer2.splice(1, 1);
        result = undefined;


        }
    }
}


function equals() {
    

    // if (buffer2.length === 1) {

    //     alert("Enter a second value");
    //     clear();
    //     return;

    // }
    
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
            alert("error: enter a second value");

    }
    if (result === Infinity) {

        alert("Cannot divide by 0");
        
    } else {

        display.textContent = result;

    }

    buffer = [];
    buffer2 = [];    
    operator = undefined;    

}


