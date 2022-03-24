
function valid(){
    
  if(document.getElementById('champ').value==''){
         document.getElementById('champ-manquant').innerText='le champ ne peut pas etre vide';
    return false;
    }

else{
     document.getElementById('champ-manquant').innerText='';
     
     alert("le formulaire peut etre envoyé");
 }
return true;
}