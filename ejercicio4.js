const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

//4.1
console.log(aldeanos[3]);

//4.2
aldeanos.push("Cervasio");

//4.3
aldeanos.unshift("Bambina");

//4.4
aldeanos.reverse();

//4.5
aldeanos.splice(4,1,"Canela");

//4.6
let last = aldeanos[aldeanos.length - 1];
console.log(last);