function isBalanced(s){

    if(s.length%2 != 0){
        return "not balanced"
    }else{

       for(let i = 0; i < s.length; i++){

        var inner = s[i] // this grabs the inside bracket
        var outer = s[(s.length-1)-i] // outside bracket
        console.log("inner "+inner);
        console.log("outer "+outer);
            if( i == s.length-i){ // if outer is same as innner
                return "YES"
            }else{
                if(inner == "[" && outer == "]"){
                    console.log("matched");
                }else if(inner == "{" && outer == "}"){
                    console.log("matched");
                }else if(inner == "(" && outer == ")"){
                    console.log("matched")
                }else{
                    return "NO"
                }

            }

       }
    
    }
}
