function display(){
    let htmlCode = "";
    var commerce = JSON.parse(localStorage.getItem("commerce") || "[]");

    commerce.forEach((x, ind) => {
      htmlCode += `<div class="card col-3 ">
          <div class="card-body">
          <img src="${x.image}" class="img-fluid" alt="...">
            <h5 class="card-title">${x.name}</h5>
            <p class="card-text">${x.price} DTN</p>
            <button class="btn btn-info text-white " onclick="gotoupdate(${ind})"><i class="fas fa-reply"></i> Modifier</button>
            <button class="btn btn-danger " onclick="deletecommerce(${ind})"><i class="fas fa-trash"></i>
            Supprimer</button>
            <p class="card-text"><small class="text-muted"></small></p>
          </div>
        </div>`;

      });
      listBox.innerHTML = htmlCode;
    }

   