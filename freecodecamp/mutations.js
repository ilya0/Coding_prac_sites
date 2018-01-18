
function mutation(arr) {
  var array1 = arr[0].toLowerCase(); // alien
  var array2 = arr[1].toLowerCase(); //line
  var exist = 0;
  var array2count = array2.length; // 4

for(i=0; i < array2.length; i++){

  if(array1.indexOf(array2[i]) > -1 ){
    exist = exist +1;
  }else{

  }
}
  if(exist == array2count){
    return true;
  }else{
    return false;
  }

}

mutation(["hello", "hey"]);
