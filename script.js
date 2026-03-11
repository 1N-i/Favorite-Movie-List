function addMovie() {
  var filmArea = document.getElementById("film").value;
  listFilmsOnScreen(filmArea);
  document.getElementById("film").value = "";
}

function listFilmsOnScreen(movie) {
  var elementMovie = "<img src=" + movie + ">";
  var moviesList = document.getElementById("moviesList");
  moviesList.innerHTML = moviesList.innerHTML + elementMovie;
}

function printScreen() {
  window.print();
}