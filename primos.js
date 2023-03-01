let contador = 0;
let num = 2;

while (contador < 10) {//Mienetras el contador sea menor a 10
  let esPrimo = true;//bandera en true primea instancia
  for (let i = 2; i <= Math.sqrt(num); i++) {//Comparando si es divisible entre si o 1
    if (num % i === 0) {
      esPrimo = false;
      break;
    }
  }
  if (esPrimo) {
    console.log(num);
    contador++;
  }
  num++;
}