function contacts(queries){
    var storagearray =[];
    var matchcount = 0;
        for(let i = 0; i < queries.length; i++){
    
                if(queries[i][0] == 'add'){
                    console.log("pushing to storage " +queries[i][0])
                    storagearray.push(queries[i][1])

                    console.log(storagearray);
                }else{

                    //search for term
                    console.log('searching for', queries[i][1]);
                    
                    //find partials
                    for(let v = 0; v < storagearray.length; v++){
                        
                        var index = storagearray[v].search(queries[i][1])
                   
                        if(index == 0 ){ matchcount++ }

                    }
                    console.log(matchcount)
                    matchcount = 0;


                }

            
        }
}