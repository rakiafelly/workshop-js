function validat() {
    let isValidated = true;
    let name = document.getElementById('name').value;
    if (name == '') {
        document.getElementById('name').classList.add('is-invalid');
        document.getElementById('name').classList.remove('is-valid');
        isValidated = false;
    }
    else {
        document.getElementById('name').classList.add('is-valid');
        document.getElementById('name').classList.remove('is-invalid');
    }
    let surname = document.getElementById('surname').value;
    if (surname == '') {
        document.getElementById('surname').classList.add('is-invalid');
        document.getElementById('surname').classList.remove('is-valid');
        isValidated = false;
    }
    else {
        document.getElementById('surname').classList.add('is-valid');
        document.getElementById('surname').classList.remove('is-invalid');
    }
    let mail = document.getElementById('mail').value;
    if (mail == '') {
        document.getElementById('mail').classList.add('is-invalid');
        document.getElementById('mail').classList.remove('is-valid');
        isValidated = false;
    }
    else {
        document.getElementById('mail').classList.add('is-valid');
        document.getElementById('mail').classList.remove('is-invalid');
    } var mdp = document.getElementById('mdp').value;
    if (mdp == '') {
        document.getElementById('mdp').classList.add('is-invalid');
        document.getElementById('mdp').classList.remove('is-valid');
        isValidated = false;
    }
    else {
        document.getElementById('mdp').classList.add('is-valid');
        document.getElementById('mdp').classList.remove('is-invalid');
    } let cmdp = document.getElementById('cmdp').value;
    if (cmdp == '') {
        document.getElementById('cmdp').classList.add('is-invalid');
        document.getElementById('cmdp').classList.remove('is-valid');
        isValidated = false;
    }
    else {
        if
           (mdp!=cmdp)
            { document.getElementById('cmdp').classList.add('is-invalid');
            document.getElementById('cmdp').classList.remove('is-valid');
            isValidated = false;
        }
        else{
        document.getElementById('cmdp').classList.add('is-valid');
        document.getElementById('cmdp').classList.remove('is-invalid');
    }
    }

    if(isValidated==true){
        let users=JSON.parse(localStorage.getItem("users")||"[]" );
        let newUser={
            firstname:name,
            lastname:surname,
            email:mail,
            password:mdp, 
        };
        users.push(newUser);
        localStorage.setItem("users",JSON.stringify(users));
    }
    return isValidated;

}