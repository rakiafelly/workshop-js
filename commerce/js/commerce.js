const nom = document.getElementById("name");
const prix = document.getElementById("prix");
const envoiButton = document.getElementById("envoi");
const listBox = document.getElementById("listBox");
const description = document.getElementById("description");
const categorie = document.getElementById("categorie");
const image = document.getElementById("image");

var commerce = JSON.parse(localStorage.getItem("commerce") || "[]");
envoiButton.addEventListener("click", add)
  async function add(e) {
  e.preventDefault();
  const base64= await getBase64(image.files[0])
  const product={
    description:description.value,
    image:base64,
    categorie:categorie.value,
    name:nom.value,
    price:prix.value,
  }
  commerce.push(product);
  nom.value = "";
  prix.value = "";
  description.value="";
  categorie.value="";
  image.value="";
  localStorage.setItem("commerce", JSON.stringify(commerce));
window.location.href='admin.html'
}
function showcategorie(){
  var listecategorie="";
  var categories = JSON.parse(localStorage.getItem("categorie") || "[]");
  categories.forEach(element => {
    listecategorie+=`<option value="${element.id}">${element.name1}</option> ` 
  });
  document.getElementById("categorie").innerHTML=listecategorie;
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
