
function smallestCommons(arr) {
  var arr1 = []; // initiate array 1
  var arr2 = []; // init array 2
  var whilestop = 0; // counter for loop
  var i = 1;
  
console.log("test be fore");
  while(whilestop = 0){
    console.log("arr[0]"+arr[0]);
    console.log("counter i "+i);

 if(arr[0]*i == 0){
    arr1.push(arr[0]*i); // push arr 1 multiple
    console.log("push arr0"+arr[0]*i);

    arr2.push(arr[1]*i); // push arr 2 multiple
    console.log(arr[1]*i);
 }


  console.log("arr1.includes(arr2[i])"+arr1.includes(arr2[i]))
      console.log("arr2.includes(arr1[i])"+arr2.includes(arr1[i]))

    if(arr1.includes(arr2[i])){
      console.log("the common is "+arr2[i]);
      whilestop = 1;
      return arr2[i];
    }else if(arr2.includes(arr1[i])){
        console.log("the common is "+arr1[i]);
        whilestop = 1;
        return arr2[i];
        
    }else{
        console.log("else");
        i++;
        
    }
    console.log("counter i "+i);
    

   
    }


  console.log(arr1);
  console.log(arr2);
  
}


smallestCommons([1,5]); //360360

