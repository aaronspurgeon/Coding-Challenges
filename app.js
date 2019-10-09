// Coding challenges completed on Coderbyte and other resources


// Coding challenge 1)
// Create a function that takes a string as a parameter and displays the longest word in that string
// Solution
function LongestWord(sen) {
  let arr = sen.split(" ");
  let longest = "";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {

      longest = arr[i];
    }
  }
  return longest;
}

// keep this function call here 
console.log(LongestWord('I am the longest word in this sentence'));



// Coding challenge 2)
// Have the
// function FirstFactorial(num) take the num parameter being passed and
// return the factorial of it.For example: if num = 4, then your program should
// return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be between 1 and 18 and the input will always be an integer.
// Solution
function FirstFactorial(num) {

  // code goes here
  let numArr = [];
  for (let i = num; i <= num; i--) {
    numArr.push(i);
    if (i === 1) {
      break;
    }
  }
  const product = numArr.reduce((a, b) => a * b);
  return product;

}

console.log(FirstFactorial(8));


// Coding Challenge 3)
// Create a function that takes in a string and reverses it so "Hello World" = "dlroW olleH"
// Solution 
function FirstReverse(str) {

  // code goes here  
  let arr = str.split("");
  return arr.reverse().join("");

}

console.log(FirstReverse('I love doing coding challenges'));


// Coding Challenge 4)
// Have the
// function SimpleAdding(num) add up all the numbers from 1 to num.For example: if the input is 4 then your program should
// return 10 because 1 + 2 + 3 + 4 = 10. For the test cases, the parameter num will be any number from 1 to 1000.
// Solution 
function SimpleAdding(num) { 

  // code goes here 
  let sum = []
  for (let i = num; i <= num; i--) {
    if (i >= 1) {
      sum.push(i)
    } else {
      break;
    }
  }
  return sum.reduce((a, b) => a + b)
}

console.log(SimpleAdding(8));