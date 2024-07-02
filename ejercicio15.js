const products = [
  'Camiseta de Metallica',
  'Pantalón vaquero',
  'Gorra de beisbol',
  'Camiseta de Basket',
  'Cinturón de Orión',
  'AC/DC Camiseta'
]
const match = "Camiseta";
for (let i = 0; i < products.length; i++ ) {
  if (products[i].includes(match)) {
    console.log(products[i]);
  }
}
