// var val1 = 5,
//     val2 = 10;

// var sum = function calculateSum(v1, v2) {
//     return v1 + v2;
// };

// console.log('A soma de ' + val1 + ' + ' + val2 + ' é igual a ' + sum(val1, val2));
// console.log('O nome da função que faz a soma é ' + sum.name);

function calculator(operacao) {
    return function(val1, val2) {
        var result;

        switch (operacao) {
            case '-':
            result = val1 - val2;
            break;
                
            case '+':
            result = val1 + val2;
            break;
            
            case '*':
            result = val1 * val2;
            break;
            
            case '/':
            result = val1 / val2;
            break;

            case '%':
            result = val1 % val2;
            break;
        
            default:
            result = false;
            break;
        }

        if(result) {
            return 'Resultado da operação: ' + val1 + ' ' + operacao + ' ' + val2  + ' = ' + result + '.';
        } else {
            return 'Operador inválido.'
        }
    }
}

var setOp = calculator('+');
console.log(setOp(5, 10));