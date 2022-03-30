 function show(){
     var commerce = JSON.parse(localStorage.getItem("commerce") || "[]");
     var index = JSON.parse(localStorage.getItem("index") || "0");
      document.getElementById("name").value=commerce[index].name;
     document.getElementById("prix").value=commerce[index].price;
     document.getElementById("description").value=commerce[index].description;

    }
   async function update(){
     var commerce = JSON.parse(localStorage.getItem("commerce") || "[]");
     var index = JSON.parse(localStorage.getItem("index") || "0");
     commerce[index].name= document.getElementById("name").value;
     commerce[index].price= document.getElementById("prix").value;
     commerce[index].description= document.getElementById("description").value;
     commerce[index].categorie= document.getElementById("categorie").value;
     const image=document.getElementById("image").files[0];
     if(image){
     commerce[index].image= await getBase64(image);
     }
     localStorage.setItem("commerce", JSON.stringify(commerce));
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
  function showcategorie(){
    var listecategorie="";
    var categories = JSON.parse(localStorage.getItem("categorie") || "[]");
    categories.forEach(element => {
      listecategorie+=`<option value="${element.id}">${element.name1}</option> ` 
    });
    document.getElementById("categorie").innerHTML=listecategorie;
  }