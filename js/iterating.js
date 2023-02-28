(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    //my answer
    let names = ["John", "David", "Daniel", "Yong"];
    //instructor answer
    // let names = ["Jay", "Josh", "Ben", "Steve"]
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    // console.log(names.length);
    //output: 4
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    //my answer
    // console.log(names[0]);
    // console.log(names[1]);
    // console.log(names[2]);
    // console.log(names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    // for(let i = 0; i < names.length; i++){
    //     console.log(names[i]);
    // }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    names.forEach(function(name){
        console.log(name);
    })
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    //my answer
    // let numbers = [1, 2, 3, 4, 5];
    // function first(input){
    //     numbers[0] = input;
    // }console.log(first);
    // function second(input){
    //     numbers[1] = input;
    // }
    // function last(input){
    //     numbers[4] = input;
    // }
    // function first(firstNumber){
    // } return console.log(first);
    //instructor answer
    function first(arr){
        return arr[0];
    }
    // console.log(first(names));
    console.log(first([1,2,3,4,5]));
    function second(arr){
        return arr[1];
    }
    console.log(second([1,2,3,4,5]));
    function last(arr){
        return arr[arr.length -1]
    }console.log(last([1,2,3,4,5]));

})();
