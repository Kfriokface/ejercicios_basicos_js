function averageWord(list) {
  if (list.length === 0) {
    console.log("La lista proporcionada está vacía, por favor añade a dato para calcular el promedio");
  }
  else {
    let suma = 0;
    for (let i = 0; i < list.length; i++) {
      if (Number.isInteger(list[i])) {
        suma += list[i];
      }
      else {
        suma += list[i].length;
      }
    }
    let promedio = suma / list.length;
    console.log("El promedio es: " + promedio);
  }
}

const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];

averageWord(mixedElements);