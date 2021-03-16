/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var forward = x;
    var backward = forward.toString().split("").reverse().join("");
    var backward = parseInt(backward) * Math.sign(x);
    console.log(backward);
        if(backward > 2147483648 || backward < -2147483648){
            return 0;
        }
    
        return backward;
    };