function show(){
    var categorie = JSON.parse(localStorage.getItem("categorie") || "[]");
    var index = JSON.parse(localStorage.getItem("index") || "0");
     document.getElementById("name1").value=categorie[index].name1;
    document.getElementById("description").value=categorie[index].description;
  
  }
  function update(){
    var categorie = JSON.parse(localStorage.getItem("categorie") || "[]");
    var index = JSON.parse(localStorage.getItem("index") || "0");
    categorie[index].name1= document.getElementById("name1").value;
    categorie[index].description= document.getElementById("description").value;
    localStorage.setItem("categorie", JSON.stringify(categorie));

}