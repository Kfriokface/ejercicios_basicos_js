const placesToTravel = [
  {id: 5, name: 'Japan'},
  {id: 11, name: 'Venecia'},
  {id: 23, name: 'Murcia'},
  {id: 40, name: 'Santander'},
  {id: 44, name: 'Filipinas'},
  {id: 59, name: 'Madagascar'}
]

const idToRemove = [11, 40];

for (let i = 0; i < placesToTravel.length; i++) {
  for (let id of idToRemove ) {
    if  (placesToTravel[i].id === id ) {
      placesToTravel.splice(i, 1);
    }
  }
}

console.log(placesToTravel);