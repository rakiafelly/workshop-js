function validate() {
    let isValidated = true;
    let mail = document.getElementById('mail').value;
    if (mail == '') {
        document.getElementById('mail').classList.add('is-invalid');
        document.getElementById('mail').classList.remove('is-valid');
        isValidated = false;
    }
    else {
        document.getElementById('mail').classList.add('is-valid');
        document.getElementById('mail').classList.remove('is-invalid');

    }
    let pw = document.getElementById('pw').value;
    if (pw == '') {
        document.getElementById('pw').classList.add('is-invalid');
        document.getElementById('pw').classList.remove('is-valid');
        isValidated = false;
    }
    else {
        document.getElementById('pw').classList.add('is-valid');
        document.getElementById('pw').classList.remove('is-invalid');

    }
    if (isValidated == true) {
        let users = JSON.parse(localStorage.getItem("users") || "[]");
        let connectedUser = users.find(user => user.email == mail && user.password == pw);
        if (connectedUser != undefined) {
            localStorage.setItem("connectedUser", JSON.stringify(connectedUser));
           // window.location.href="admin.html"
        }
        else {
            isValidated = false;
            alert('e-mail ou mot de passe incorrecte');
        }
    }

    return isValidated;

}
