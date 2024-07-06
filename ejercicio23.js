const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
  { name: "Spirited Away", durationInMinutes: 80 },  
  { name: "The Matrix", durationInMinutes: 136 },  
  { name: "Amélie", durationInMinutes: 110 },  
  { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
];

const shortMovies = [];
const mediumMovies = [];
const longMovies = [];

movies.forEach((value) => {
  if (value.durationInMinutes < 100) {
    shortMovies.push(value);
  }
  else if (value.durationInMinutes > 200) {
    longMovies.push(value);
  }
  else {
    mediumMovies.push(value);
  }
});

console.table(shortMovies);
console.table(mediumMovies);
console.table(longMovies);