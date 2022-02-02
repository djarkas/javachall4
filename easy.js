/* Write a function that takes in an array of numbers and outputs the average of all the numbers. 

Example 1:

Input: [1 , 4 , 7]  Output: 4

Input: [10, 5]  Output: 7.5

*/

function avgArray(array){
    var sum = 0;
    for(var i in array){
        sum += array[i];
    }
    var amntOfNumbers = array.length;
    return(sum / amntOfNumbers);
}

array = [1,3,5,7,9,11]

console.log(avgArray(array))