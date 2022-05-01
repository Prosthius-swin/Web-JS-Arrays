//As for Q3 except the program will tell the user how many times a repeated number has been entered.

let nums = [];
let counter = 0;

console.log("Enter 5 numbers:");

for(let i = 0; i < 5; i++) {
   nums.push(prompt(`Enter number : ${i}`));
} 
            
console.log("------------------------------------");

let dup = (prompt("Enter another number: "))

for(let i = 0; i < 5; i++) {
    if (nums.includes(dup, i))
    {
        counter++;
    }
}

if (counter > 0)
{
    console.log(`The number has been entered ${counter} times.`)
} else 
{
    console.log("The number is not a duplicate")
}