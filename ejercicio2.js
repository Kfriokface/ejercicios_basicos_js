// primer apartado
const jedi = {nombre: "Luke Skywalker", edad: 19}
jedi.edad = 25;

// segundo apartado
let nombre = "Leia";
let apellido = "Organa";
let edad = 20;
console.log("Soy " + nombre + " " + apellido + ", tengo " + edad + " años y soy una princesa de Alderaan.");

// tercer apartado
const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};
console.log( sable1.precio + sable2.precio );

// cuarto apartado
let precioBaseGlobal = 10000;
precioBaseGlobal = 25000;

const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

nave1.precioFinal = nave1.precioBase + precioBaseGlobal;
nave2.precioFinal = nave2.precioBase + precioBaseGlobal;
console.log(nave1, nave2);


