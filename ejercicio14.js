const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];

function repeatCounter(list) {
  let conteoPalabras = {};

  list.forEach((palabra) => {
    if (conteoPalabras[palabra]) {
      conteoPalabras[palabra]++;
    }
    else {
      conteoPalabras[palabra] = 1;
    }
  })

  console.log(conteoPalabras);
}

repeatCounter(words);

