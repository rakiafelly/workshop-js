    function display() {
      let htmlCode = "";
     var categorie = JSON.parse(localStorage.getItem("categorie") || "[]");
     categorie.forEach((x,ind) => {
      htmlCode += `  
    <div class="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Categorie:</h5>
        <p class="card-text">${x.name1}</p>
        <p class="card-text">${x.description}</p>

        <a href="#" class="btn btn-primary" onclick="gotoupdate(${ind})" ><span><i class="fas fa-reply"></i>  </span>   modifier</a>
        <a href="#" class="btn btn-danger"  onclick="deletecategorie(${ind})" ><i class="fas fa-trash"></i>  supprimer</a>

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