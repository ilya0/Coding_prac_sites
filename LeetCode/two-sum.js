/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


var twoSum = function(nums, target) {
    //create var to hold first place
    //create var b to sold second place

    // create method to go throught the array, summing 1 + n
    // if that doesn't work then go to 2+n 
    //then the next, untill it sums

 
    var counterarray = [];


var testsum = function(){


for(start = 0; start < nums.length(); start++){

    for(end = 1; end < nums.length(); end++){

        if(nums[start] + nums[end] == target){

            counterarray.push(start);
            counterarray.push(end);
        
                return (counterarray)
            }else{
            
            }
    }


    
    }

}





};