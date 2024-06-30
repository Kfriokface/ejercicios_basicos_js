const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(stringList) {
  let LongestWord  = '';
  for(let i = 0; i < stringList.length; i++ ) {
    if ( stringList[i].length > LongestWord.length ) {
      LongestWord = stringList[i];
    }
  }
  console.log("El nombre del superheroe más largo es: " + LongestWord);
}

findLongestWord(avengers);
