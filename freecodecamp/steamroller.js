//recursive flattening

var data = [
    [1, 2, 3, [99, 1000]],
    [7],
    [8, 9, 0]
];

var flatten = function(arr) {
    var flatMap = []; // int Array

    arr.forEach(
        function(value) { // foreach loop on every element
            console.log("value at foreach is " + value);

            if (Array.isArray(value)) { // if element is an array
                console.log("flatmap before concat" + flatMap);

                flatMap = flatMap.concat(flatten(value)) // concatenate and re run recursion
                console.log("flatmap after concat" + flatMap);

            } else { // if the element is not push it into flat map array

                flatMap.push(value)
                console.log("value pushed is " + value)
            }

        });
    return flatMap;
}

var result = flatten(data);

console.log(result);

-- -- -- -- --


var steamrollArray = function(arr) {
    var flatMap = []; // int Array

    arr.forEach(
        function(value) { // foreach loop on every element
            if (Array.isArray(value)) { // if element is an array
                flatMap = flatMap.concat(steamrollArray(value)); // concatenate and re run recursion

            } else { // if the element is not push it into flat map array

                flatMap.push(value);
            }

        });
    return flatMap;
};