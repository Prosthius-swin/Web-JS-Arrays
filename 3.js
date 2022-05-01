// Using a List, write a program that reads in 5 numbers. 
// It then asks the user for another number and outputs whether the number has already been entered.

let nums = [];

console.log("Enter 5 numbers:");

for(let i = 0; i < 5; i++) {
   nums.push(prompt(`Enter number : ${i}`));
} 
            
console.log("------------------------------------");

let dup = (prompt("Enter another number: "))

if (nums.includes(dup))
{
    console.log("The number is a duplicate")
} else 
{
    console.log("The number is not a duplicate")
}