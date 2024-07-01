const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
function removeDuplicates(list) {
  let cleanedList = [];
  for (let i = 0; i < list.length; i++)  {
    if (!cleanedList.includes(list[i])) {
      cleanedList.push(list[i]);
    }
  }
  console.log(cleanedList);
}

removeDuplicates(duplicates);