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

    if (!operator) {

    number = buffer.join('');
    buffer2.push(parseFloat(number));
    operator = sign;
    buffer = [];
    number = [];  

    } else {

        number = buffer.join('');
        buffer2.push(parseFloat(number));
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
        
        operator = sign;
        console.log(operator)
        buffer2[0] = result;
        buffer2.splice(1, 1);
        result = undefined;

    }
}


function equals() {

    number = buffer.join('');
    buffer2.push(parseFloat(number));

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


