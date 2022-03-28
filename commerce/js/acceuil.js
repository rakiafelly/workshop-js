function display() {
    let htmlCode = "";
    var commerce = JSON.parse(localStorage.getItem("commerce") || "[]");
  
    commerce.forEach((x, ind) => {
      htmlCode += `<div class="card col-3 ">
          <div class="card-body">
          <img src="https://www.generationsforpeace.org/wp-content/uploads/2018/07/empty.jpg" class="img-fluid" alt="...">
            <h5 class="card-title">${x.name}</h5>
            <p class="card-text">${x.price} DTN</p>
          </div>
        </div>`;
  
    });
    listBox.innerHTML = htmlCode;
  }
  
  
  function deletecommerce(ind) {
    var commerce = JSON.parse(localStorage.getItem("commerce") || "[]");
   commerce.splice(ind, 1);
    localStorage.setItem("commerce", JSON.stringify(commerce));
    display();
  }
  
  function gotoupdate(ind){
    localStorage.setItem("index", JSON.stringify(ind));
    window.location.href="update.html"
  
  
  }
  
  