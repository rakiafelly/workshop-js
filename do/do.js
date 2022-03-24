var p =localStorage.getItem("Tasks") || [];
let id;
var z=JSON.parse(p)
function affichage(){
        let hello=``;
        let i=1;
    z.forEach(x => {
        hello += `<tr>
        <th scope="row">${i}</th>
        <td>${x.name}</td>
        <td>${x.discrip}</td>
        <td><button onclick="updateitem(${x.id})" class="btn btn-success btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModal">Update</button></td>
        <td><button onclick="deleteitem(${i-1})" class="btn btn-danger btn-lg">Delete</button></td>
        </tr>
           
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="card" style="width: 18rem; margin: 100px auto; background-color: grey;">
                    <div class="card-body">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label"></label>
                            <input type="text" class="form-control" id="Task">
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label"></label>
                            <textarea class="form-control" id="Discription" rows="3" placeholder="Discription"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" onclick="save(${x.id})">Save changes</button>
            </div>
          </div>
        </div>
    </div>`

        i++;
    });
    document.getElementById("body").innerHTML= hello    
}
function add(){
    let x = document.getElementById("Task").value;
    let y = document.getElementById("Discription").value;
    let c=Math.floor(Math.random()* 100);
    let Task={id:c,name:x,discrip:y}
    z.push(Task);
    localStorage.setItem("Tasks",JSON.stringify(z));
    window.open('list_tasks.html', '_blank');
}
function deleteitem(x){
    console.log(x);
    z.splice(x,1);
    console.log(z);
    localStorage.setItem("Tasks",JSON.stringify(z));
    affichage()
}

function updateitem(a) {
    // console.log(z);
   let update= z.find(x =>x.id ==a);
   document.getElementById("Task").value=update.name
   document.getElementById("Discription").value=update.discrip;
   console.log(update);
   id=a;
}
function save(){
    console.log(id);
    let update= z.find(x =>x.id == id );
     update.name = document.getElementById("Task").value;
     update.discrip = document.getElementById("Discription").value;
    // console.log(update.name);
    // console.log(update.discrip);
    console.log(update);
    // z.splice(b-1,b);
    // z.splice(b-1,0,update);
    console.log(z);
    localStorage.setItem("Tasks",JSON.stringify(z));
    window.location.reload()
}
function recherche(){
    let search = document.getElementById("recherche").value;
    // console.log(search);
    let fill = z.filter(x => (x.name).startsWith(search));
    // console.log(fill);

    let hello=``;
        let i=1;
    fill.forEach(x => {
        hello += `<tr>
        <th scope="row">${i}</th>
        <td>${x.name}</td>
        <td>${x.discrip}</td>
        <td><button onclick="updateitem(${x.id})" class="btn btn-success btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModal">Update</button></td>
        <td><button onclick="deleteitem(${x.id})" class="btn btn-danger btn-lg">Delete</button></td>
        </tr>
           
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="card" style="width: 18rem; margin: 100px auto; background-color: grey;">
                    <div class="card-body">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label"></label>
                            <input type="text" class="form-control" id="Task">
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label"></label>
                            <textarea class="form-control" id="Discription" rows="3" placeholder="Discription"></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" onclick="save(${x.id})">Save changes</button>
            </div>
          </div>
        </div>
    </div>`

        i++;
    });
    document.getElementById("body").innerHTML= hello 
}