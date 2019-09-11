


function runningMedian(a){
//take the array and save it
// start a counter
//go through each array index and add it to the 
var arrayA = a; // this is to store the whole incoming array
var storagearray = []; // store vars to see if they are odd or even
console.log("arrayA is", arrayA);

for(let i=0; i < arrayA.length; i++){ //iterate through the array and create a running median
   
    for(let j=0; j<=i; j++){//push all the elements up to current element
        storagearray.push(arrayA[j]);
    }

    storagearray.sort();
    // console.log("currently storage array is ", storagearray);
    // console.log("storagearray length is", storagearray.length);

    if(storagearray.length == 0){
        alert("error");
    }
    else if(storagearray.length == 1){
        console.log(storagearray)
        console.log("median for one element is", storagearray[0]);
        storagearray = [];

    }else if ( storagearray.length % 2 == 0) {
        alert('Even Number');
        console.log(storagearray)
        var split = storagearray.length /2;
       
        var median = (storagearray[split]+storagearray[split+1])/2
        console.log("median for even is", median); 
        storagearray = [];

    }else{
        alert('Odd Number');
        console.log(storagearray)
        var median = storagearray[Math.round((storagearray.length - 1) / 2)];
        storagearray = [];
        console.log("median odd number elements is", median);
    }


}

}