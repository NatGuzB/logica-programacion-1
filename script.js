/* --CODIGO PRUEBA CONSOLA--
const prompt = require('prompt-sync')();

let num1 = parseInt(prompt("Ingresa el primer número:"));
let num2 = parseInt(prompt("Ingresa el segundo número:"));
let num3 = parseInt(prompt("Ingresa el tercer número:"));


let numeros = [num1, num2, num3];


if (num1 === num2 && num2 === num3) {
  console.log("Los tres números son iguales:", num1, num2, num3);
} else {
 
  let mayorAMenor = numeros.sort((a, b) => b - a);
  console.log("De mayor a menor:", mayorAMenor);


  let menorAMayor = numeros.sort((a, b) => a - b);
  console.log("De menor a mayor:", menorAMayor);
}

*/
function procesarNumeros() {
    // Obtener los valores de los inputs
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let num3 = parseInt(document.getElementById('num3').value);

    // Validar que se hayan ingresado números válidos
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        document.getElementById('resultado').innerHTML = 
            '<p class="error">Por favor, ingresa números válidos en todos los campos.</p>';
        return;
    }

    let numeros = [num1, num2, num3];
    let resultadoDiv = document.getElementById('resultado');

    if (num1 === num2 && num2 === num3) {
        resultadoDiv.innerHTML = 
            `<p class="iguales">Los tres números son iguales: ${num1}, ${num2}, ${num3}</p>`;
    } else {
        
        let mayorAMenor = [...numeros].sort((a, b) => b - a);
        let menorAMayor = [...numeros].sort((a, b) => a - b);

        resultadoDiv.innerHTML = `
            <p><strong>De mayor a menor:</strong> ${mayorAMenor.join(', ')}</p>
            <p><strong>De menor a mayor:</strong> ${menorAMayor.join(', ')}</p>
        `;
    }
}

// Permitir procesar con Enter
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        procesarNumeros();
    }
});
