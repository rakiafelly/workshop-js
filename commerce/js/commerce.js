const nom = document.getElementById("name");
const prix = document.getElementById("prix");
const envoiButton = document.getElementById("envoi");
const listBox = document.getElementById("listBox");
const saveInd = document.getElementById("saveIndex");
var commerce = JSON.parse(localStorage.getItem("commerce") || "[]");

envoiButton.addEventListener("click", add)
function add() {
  const product={
    name:nom.value,
    price:prix.value,
  }
  commerce.push(product);
  nom.value = "";
  prix.value = "";
  localStorage.setItem("commerce", JSON.stringify(commerce));
window.location.href='cosmetic.html'

}

function deletecommerce (ind) {
  var commerce = JSON.parse(localStorage.getItem("commerce") || "[]");

  commerce.splice(ind.name, 1);
  commerce.splice(ind.price,1);
  localStorage.setItem("commerce", JSON.stringify(commerce));
  window.location.href='cosmetic.html'
}

function update(){

}