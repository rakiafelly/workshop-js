function display() {
  let htmlCode = "";
 var categorie = JSON.parse(localStorage.getItem("categorie") || "[]");
 categorie.forEach((x,ind) => {
  htmlCode += `  <div class="col-4">
<div class="card">
  <img src="${x.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <a href="customer.html">Categorie:</a>
    <p class="card-text">${x.name1}</p>
    <p class="card-text">${x.description}</p>

  </div>
  </div>
</div>`;

  });
  listBox1.innerHTML = htmlCode;
}

function deletecategorie(ind) {
  var categorie= JSON.parse(localStorage.getItem("categorie") || "[]");
 categorie.splice(ind, 1);
  localStorage.setItem("categorie", JSON.stringify(categorie));
  display();
}

function gotoupdate(ind){
  localStorage.setItem("index", JSON.stringify(ind));
  window.location.href="modify.html"
}