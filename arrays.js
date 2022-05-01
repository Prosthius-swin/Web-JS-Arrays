// Using an Array Create a program that reads in 5 names from the console.  It then prints out "Hello <name>" for all the names entered

let names = [];
console.log("Enter 5 names.");


for(let i = 0; i < 5; i++) {
    names.push(prompt(`Name - ${i} : `));
} 

console.log("-----------------------");

for(i = 0; i < 5; i++) {
    console.log(`Hello ${names[i]}`);
}


// Using an array write a program that starts with the values 34, 5, 67, 1, 99, 34, 44, 78, 34, 0, 
// then adds all numbers together and outputs the total.

let numbers = [4, 5, 67, 1, 99, 34, 44, 78, 34, 0].reduce((a,b)=>a+b);
console.log(numbers);


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


//Using a List, write a program stores words read from console, until the word "stop" is entered.  
//It then outputs the words entered in reverse order.

let words = [];

words.push(prompt("Enter a word: "));

while (!words.includes("stop"))
{
    words.push(prompt("Enter another word: "));
}

words.pop();
words.reverse();
let length = words.length;
let counter = 0;

while(counter < length) {
    console.log(words[counter]);
    counter++;
}