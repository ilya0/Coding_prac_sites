not working yet



function destroyer(arr) {
    // Remove all the values
    var testarray = arr; //[1, 2, 3, 1, 2, 3]
    var testvars = arr.splice(1, arr.length); //, 2, 3
    return testvars;

    var newarray = testarray.filter(function(testvars) {
        if (testarray.indexOf(testvars) == -1) {
            return testvars;
        } else {
            return false;
        }
    });
    return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);