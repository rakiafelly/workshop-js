const name1 = document.getElementById("name1");
const description= document.getElementById("description");
const envoibtn= document.getElementById("envoi-btn");
const listBox1 = document.getElementById("listBox1");
const image = document.getElementById("image");
var categorie = JSON.parse(localStorage.getItem("categorie") || "[]");

envoibtn.addEventListener("click", add)
 async function add(e) {
  e.preventDefault();
  const base64= await getBase64(image.files[0])
  const category={
    id:categorie.length,
    name1:name1.value,
    description:description.value,
    image:base64,
  }
  categorie.push(category);
  name1.value = "";
  description.value = "";
  image.value="",

  localStorage.setItem("categorie", JSON.stringify(categorie));
 window.location.href='cosmetic1.html'

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

