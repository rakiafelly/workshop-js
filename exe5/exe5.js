function somme (){
    var s;
    s=0;
for (let i = 0; i < arguments.length; i++) {
    s =s+ arguments[i];
    
}
console.log(arguments)
    alert('la somme est' + s );
}

somme(1,2,6,2);   