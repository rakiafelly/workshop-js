function show(){
    var categorie = JSON.parse(localStorage.getItem("categorie") || "[]");
    var index = JSON.parse(localStorage.getItem("index") || "0");
     document.getElementById("name1").value=categorie[index].name1;
    document.getElementById("description").value=categorie[index].description;

   }
  async function update(){
    var categorie = JSON.parse(localStorage.getItem("categorie") || "[]");
    var index = JSON.parse(localStorage.getItem("index") || "0");
    categorie[index].name1= document.getElementById("name1").value;
    categorie[index].description= document.getElementById("description").value;
    const image=document.getElementById("image").files[0];
    if(image){
    categorie[index].image= await getBase64(image);
    }
    localStorage.setItem("categorie", JSON.stringify(categorie));
  }
  function getBase64(img){
   return new Promise((resolve,reject)=>{ 
     var reader = new FileReader();
     reader.onload = function() {
       resolve(reader.result);
     }
     reader.readAsDataURL(img);
   })
  
 }
 