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


function ordenarNumeros() {
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);
  const num3 = parseInt(document.getElementById("num3").value);

  const resultadoDiv = document.getElementById("resultado");

  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    resultadoDiv.innerHTML = "Por favor, ingresa los tres números.";
    return;
  }

  if (num1 === num2 && num2 === num3) {
    resultadoDiv.innerHTML = `Los tres números son iguales: ${num1}, ${num2}, ${num3}`;
  } else {
    const numeros = [num1, num2, num3];

    const mayorAMenor = numeros.sort((a, b) => b - a);
    const menorAMayor = numeros.sort((a, b) => a - b);

    resultadoDiv.innerHTML = `
      <p>De mayor a menor: ${mayorAMenor.join(", ")}</p>
      <p>De menor a mayor: ${menorAMayor.join(", ")}</p>
    `;
  }
}
