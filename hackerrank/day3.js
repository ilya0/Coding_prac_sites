var rotatearray = function(arrayinput, rotation) {

    var temparray = arrayinput;
    var rotatecounter = 0;

    while (rotatecounter < rotation) {

        var rotateholder = temparray.shift();
        temparray.push(rotateholder)
        rotatecounter++;

    }
    console.log(temparray);
}
var testarray = ["1", "2", "3", "a", "b", "c"]


rotatearray(testarray, 600);