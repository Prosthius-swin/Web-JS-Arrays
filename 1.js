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