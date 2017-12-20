let movie = require("./movie");
const myVar = require("./env");
let threeFavoriteMovies = ["Spirited Away", "The Usual Suspects", "Jiro Dreams of Sushi"];
threeFavoriteMovies.forEach(function(film){
  movie(film);
});


// searchFor(threeFavoriteMovies)
console.log(movie)

