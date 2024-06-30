function average(numberList) {
  if (numberList.length === 0) {
    console.log("La lista proporcionada está vacía, por favor añade algún número para calcular el promedio");
  }
  else {
    let suma = 0;
    for (let i = 0; i < numberList.length; i++) {
      suma += numberList[i];
    }
    let promedio = suma / numberList.length;
    console.log("El promedio es: " + promedio);
  }
}

const numbers = [12, 21, 38, 5, 45, 37, 6];
const promedio = average(numbers);

