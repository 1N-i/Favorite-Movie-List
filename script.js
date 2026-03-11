function adicionarFilme() {
  var campoFilme = document.getElementById("filme").value;
  listarFilmesNaTela(campoFilme);
  document.getElementById("filme").value = "";
}

function listarFilmesNaTela(filme) {
  var elementoFilme = "<img src=" + filme + ">";
  var listaFilmes = document.getElementById("listaFilmes");
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme;
}