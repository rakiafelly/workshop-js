 function show(){
     var commerce = JSON.parse(localStorage.getItem("commerce") || "[]");
     var index = JSON.parse(localStorage.getItem("index") || "0");
      document.getElementById("name").value=commerce[index].name;
     document.getElementById("prix").value=commerce[index].price;
   
   }
   function update(){
     var commerce = JSON.parse(localStorage.getItem("commerce") || "[]");
     var index = JSON.parse(localStorage.getItem("index") || "0");
     commerce[index].name= document.getElementById("name").value;
     commerce[index].price= document.getElementById("prix").value;
     localStorage.setItem("commerce", JSON.stringify(commerce));
<WA>