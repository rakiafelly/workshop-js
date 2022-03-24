function rand() {
    var i = 0;
    var random = Math.floor(Math.random() * 100);

    alert(random);
    do {
        var n = Number(prompt("donner un entier"));

        if (n < random) {
            alert("plus petit");

            i++;
        }

        else {
            if (n > random) {
                alert("plus grand");

                i++;

            }
            else {
                alert(i);
            }
        }
    }
    while (n != random) 
    }
    rand();