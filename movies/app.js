import { movies } from "./movies.js";

console.table(movies);
function fetchAllMovies(movies) {
    // Récupération de l'élement
    const elApp = document.getElementsByTagName("tbody")[0];
    elApp.innerHTML = "";
  
    let data = "";
    // Récupération des données
    movies.forEach(m => {
      data += `<tr>
        <td>${m.title}</td>
        <td>${m.year}</td>
      </tr>`;
    });
  
    // Affichage des éléments dans le HTML
    elApp.innerHTML += data;
  }
  
  fetchAllMovies(movies);
  document
  .querySelectorAll("input[type=search]")[0]
  .addEventListener("input", search);
  function search() {
    console.log(this.value);
  }
  function search() {
    const filteredData = movies.filter(movie =>
      movie.title.toLowerCase().includes(this.value.toLowerCase())
    );
    fetchAllMovies(filteredData);