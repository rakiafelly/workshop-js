function display(){
    let htmlCode = "";
    var commerce = JSON.parse(localStorage.getItem("commerce") || "[]");

      commerce.forEach((x,id) => {
        htmlCode += `<div class="card">
        <div class="card-body">
          <h5 class="card-title">${x.name}</h5>
          <p class="card-text"></p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
        <img src="..." class="card-img-bottom" alt="...">
      </div>`;

      });
      listBox.innerHTML = htmlCode;
    }