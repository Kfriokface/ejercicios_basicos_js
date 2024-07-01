const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

function nameFinder(nameList, name) {
    const posicion = nameList.indexOf(name);
    if (posicion !== -1) {
      console.log("El nombre " + name + " está en la posición " +  posicion)
      return true, posicion;     
    }
    else {
      console.log("El nombre " + name + " no está en el listado")
      return false;
    }
}

nameFinder(names, "Xabier");
