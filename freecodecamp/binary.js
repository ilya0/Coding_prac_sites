function binaryAgent(str) {
    var words;
    var sum = 0;
    var strarray = [];

    str = str.split(" ");
    console.log(str);
    for (var i = 0; i < str.length; i++) {

        for (var j = 0; j < str[i].length; j++) {

            console.log("str[i][j] length" + str[i][j].length);
            console.log("str[i][j] is" + str[i][j]);

            if (j === 0) {
                sum = sum + str[i][j] * 128;
            } else if (j === 1) {
                sum = sum + str[i][j] * 64;
            } else if (j === 2) {
                sum = sum + str[i][j] * 32;
            } else if (j === 3) {
                sum = sum + str[i][j] * 16;
            } else if (j === 4) {
                sum = sum + str[i][j] * 8;
            } else if (j === 5) {
                sum = sum + str[i][j] * 4;
            } else if (j === 6) {
                sum = sum + str[i][j] * 2;
            } else {
                sum += str[i][j] * 1;
            }

        }
        strarray.push(String.fromCharCode(sum));
        sum = 0;
    }


    return strarray.join("");
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");