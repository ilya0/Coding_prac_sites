console.log("js connected");

function insert(num){
  console.log("pressed "+num);
  document.form.textview.value=document.form.textview.value+num
}

function equal(){
  document.form.textview.value=eval(document.form.textview.value)
}

function c(){ 
  console.log('clear pressed');
  document.form.textview.value=" ";
                 
}
