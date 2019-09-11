



function input(a){

var storagearray = [];
storagearray.push(a);
storagearray.sort();

var arraylength = storagearray.length();

if(arraylength == 1){
 return storagearray[0];
}else if ( arraylength % 2 == 0) {
    alert('Even Number');
    var split = arraylength /2;
    var median = (storagearray[split]+storagearray[split+1])/2
}else{
    alert('Odd Number');
    var median = storagearray[Math.round((storagearray.length - 1) / 2)];
    return median;
	
}



    //add to array
    // sort array
    //see if array is odd or even
        //if odd or 1 
            //find middle and return
        //if even 
            //find center two, and calculate median
}