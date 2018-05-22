function processData(input) {
    //Enter your code here
    var lines = input[0]
    var words = input.split(" ");
    var odd = ""
    var even = ""
    console.log(words);

    //word loop
    for (var i = 1; i < words.length; i++) {

        //seperator loop
        for (var j = 0; j < words[i].length; j++) {
            ///if even or 0 
            if (j === 0 || j % 2 === 0) {
                even = even + words[i][j];
            } else {
                odd = odd + words[i][j];
            }

        }
        console.log(even, odd);
        even = "";
        odd = "";

    }
    //take the first word
    //seperate into odd and even
    //print odd
    //print even
    //page break
    //repeate process




    // Hacker Rank
    //Hce akr
    //Rn ak




}
processData("2 Hacker Rank")

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function(input) {
    _input += input;
});

process.stdin.on("end", function() {
    processData(_input);
});