function display(){
    let htmlCode = "";
    var commerce = JSON.parse(localStorage.getItem("commerce") || "[]");

      commerce.forEach(x => {
        htmlCode += `<div class='flex mb-4 items-center'>
          <p class='w-full text-grey-darkest'>${x.name}</p>
          <p class='w-full text-grey-darkest'>${x.price}</p>
   </div>`;

      });
      listBox.innerHTML = htmlCode;
    }

    
    function deletecommerce (ind) {
        commerce.splice(ind, 1);
        localStorage.setItem("commerce", JSON.stringify(commerce));
display();
      }