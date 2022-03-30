const name1 = document.getElementById("name1");
const description= document.getElementById("description");
const envoibtn= document.getElementById("envoi-btn");
const listBox1 = document.getElementById("listBox1");
const image = document.getElementById("image");
var categorie = JSON.parse(localStorage.getItem("categorie") || "[]");

envoibtn.addEventListener("click", add)
function add() {
  const category={
    id:categorie.length,
    name1:name1.value,
    description:description.value,
  }
  categorie.push(category);
  name1.value = "";
  description.value = "";
  localStorage.setItem("categorie", JSON.stringify(categorie));
// window.location.href='cosmetic1.html'

}
