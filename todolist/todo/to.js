const form = document.queryCommandValue('form');
form.addEventListener('submit',function(){
    console.log(form.add.value);
}); 