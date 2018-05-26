
function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var pi = 2*Math.PI;
    var newArray = [];
  
    for(var elem in arr){
      var r = arr[elem].avgAlt;
      console.log(arr[elem].name);
      var t = Math.round(pi*(Math.sqrt((Math.pow(r + earthRadius,3)/GM))));
      delete arr[elem].avgAlt;
      arr[elem].orbitalPeriod = t;
      newArray.push(arr[elem]);
    }
    return arr;
    
    
    
    
    
  }
  
  //t = sqrt((4*sqrt(pi)/gm)*r^3)
  //r= avgAlt + earthRadious
  
  
  orbitalPeriod([{name: "iss", avgAlt: 413.6}, 
                 {name: "hubble", avgAlt: 556.7}, 
                 {name: "moon", avgAlt: 378632.553}]);
  
  // [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]