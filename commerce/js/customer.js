function display() {
  let htmlCode = "";
  var commerce = JSON.parse(localStorage.getItem("commerce") || "[]");

  commerce.forEach((x, ind) => {
    htmlCode += `<div class="col-4">
    <div class="card ">
          <div class="card-body">
          <img src="${x.image}" class="img-fluid" alt="...">
            <h5 class="card-title">${x.name}</h5>
            <p class="card-text">${x.price} DTN</p>
          </div>
          </div>
        </div>`;
  });
  listBox.innerHTML = htmlCode;
}


