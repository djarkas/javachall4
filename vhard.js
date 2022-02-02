/* You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

Hint:  Sudo code this problem. Focus on breaking the problem down into steps  Use functions, arrays and logical operators.  Do not have anyone give you the answer or solve this problem for you. 

Example 1:

Input: coins = [1, 2, 5], amount = 11

Output: 3 

Explanation: 11 = 5 + 5 + 1

Example 2:

Input: coins = [2], amount = 3

Output: -1

*/
let arr = [1,2,5];
let amount =11;


let sum = 0
for(let i = 0; i < arr.length; i++){
    sum += arr[i];  // sum + arr[i] = sum
}
    function getCoins (){
if(sum <= amount){  // if 1+2+5 is less than or equal to 11
    return (amount -= sum) // sum minus amount = sum 11-8 =3
                           // 
} else if (sum != amount){  // if 11 does not equal 11 
    return "-1"
}
}


console.log(getCoins(sum))

