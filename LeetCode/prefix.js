/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    var prefix = strs[0].substring(0,2); //set the first prefix to get checked
    console.log("prefix is "+prefix);
    var isprefixmatching = false;
   
    
    for(i=0; i < strs.length; i++ ){
        if( prefix == strs[i].substring(0,2) ){  
            isprefixmatching = true; 
            console.log(prefix)
            console.log(strs[i].substring(0,2))

            }else{
                return ""
            }
    }
    
    
    
    if(isprefixmatching = true){ return prefix; } // check for if all prefixes match
        
    
};