function calsalaire() {
   s = document.getElementById("salaire").value;
   document.getElementById("salr").innerHTML = s - (s * 0.3);
   if ((document.getElementById("bonus").checked == true) && (document.getElementById("femme").checked == true)) {
      document.getElementById("salr").innerHTML = s - (s * 0.28) + 100;

   }
   if ((document.getElementById("bonus").checked == true) && (document.getElementById("homme").checked == true)) {
      document.getElementById("salr").innerHTML = s - (s * 0.3) + 100;

   }
   if ((document.getElementById("allocation").checked == true) && (document.getElementById("femme").checked == true)) {
      document.getElementById("salr").innerHTML = s - (s * 0.28) + 150;

   }
   if ((document.getElementById("allocation").checked == true) && (document.getElementById("homme").checked == true)) {
      document.getElementById("salr").innerHTML = s - (s * 0.3) + 150;

   }


   if ((document.getElementById("bonus").checked == true) && (document.getElementById("femme").checked == true)
    && (document.getElementById("trois").checked == true)) {
      document.getElementById("salr").innerHTML = s - (s * 0.27) + 100;
   }
   if ((document.getElementById("bonus").checked == true) && (document.getElementById("femme").checked == true)
    && (document.getElementById("quatre").checked == true)) {

         document.getElementById("salr").innerHTML = s - (s * 0.26) + 100;

      }
      if ((document.getElementById("allocation").checked == true) && (document.getElementById("femme").checked == true) 
      && (document.getElementById("trois").checked == true)) {
         document.getElementById("salr").innerHTML = s - (s * 0.27) + 150;
      }
      if ((document.getElementById("allocation").checked == true) && (document.getElementById("femme").checked == true) 
      && (document.getElementById("quatre").checked == true)) {

         document.getElementById("salr").innerHTML = s - (s * 0.26) + 150;
      }
      if ((document.getElementById("bonus").checked == true) && (document.getElementById("homme").checked == true) 
      
      && (document.getElementById("trois").checked == true)) {
         document.getElementById("salr").innerHTML = s - (s * 0.29) + 100;
      }

      if ((document.getElementById("bonus").checked == true) && (document.getElementById("homme").checked == true)
       && (document.getElementById("quatre").checked == true)) {
            document.getElementById("salr").innerHTML = s - (s * 0.28) + 100;
         }
         if ((document.getElementById("allocation").checked == true) && (document.getElementById("homme").checked == true)
          && (document.getElementById("trois").checked == true)) {
            document.getElementById("salr").innerHTML = s - (s * 0.29) + 150;
         }
         if ((document.getElementById("allocation").checked == true) && (document.getElementById("homme").checked == true) 
         && (document.getElementById("quatre").checked == true)) {
               document.getElementById("salr").innerHTML = s - (s * 0.28) + 150;
            }


         }
      