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