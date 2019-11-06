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
console.log(LongestWord("I am the longest word in this sentence"));

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

console.log(FirstReverse("I love doing coding challenges"));

// Coding Challenge 4)
// Have the
// function SimpleAdding(num) add up all the numbers from 1 to num.For example: if the input is 4 then your program should
// return 10 because 1 + 2 + 3 + 4 = 10. For the test cases, the parameter num will be any number from 1 to 1000.
// Solution
function SimpleAdding(num) {
  // code goes here
  let sum = [];
  for (let i = num; i <= num; i--) {
    if (i >= 1) {
      sum.push(i);
    } else {
      break;
    }
  }
  return sum.reduce((a, b) => a + b);
}

console.log(SimpleAdding(8));

// Coding Challenge 5)
// Have the
// function CheckNums(num1, num2) take both parameters being passed and
// return the string true
// if num2 is greater than num1, otherwise
// return the string false.If the parameter values are equal to each other then
// return the string - 1.
// Solution
function CheckNums(num1, num2) {
  // code goes here
  if (num2 === num1) {
    return -1;
  } else if (num2 > num1) {
    return true;
  } else {
    return false;
  }
}

console.log(CheckNums(4, 5));

// Coding Challenge 6
// Have the
// function TimeConvert(num) take the num parameter being passed and
// return the number of hours and minutes the parameter converts to(ie.if num = 63 then the output should be 1: 3).Separate the number of hours and minutes with a colon.
// Solution
function TimeConvert(num) {
  // code goes here
  let hours = "0";
  let mins = "00";
  let remainder;
  if (num >= 60) {
    hours = Math.floor(num / 60);
    mins = num % 60;
  } else {
    mins = num;
  }
  return `${hours}:${mins}`;
}

console.log(TimeConvert(125));

// Coding Challenge 7
// LeetCode problem #242 Valid Anagram
// Given two strings s and t , write a function to determine if t is an anagram of s.
// Solution
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sCharCounts = {};
  // Fill sCharCounts
  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    sCharCounts[sChar] = sCharCounts[sChar] + 1 || 1;
  }

  for (let i = 0; i < t.length; i++) {
    const tChar = t[i];
    if (!sCharCounts[tChar]) {
      return false;
    } else {
      sCharCounts[tChar]--;
    }
  }
  return true;
};

// Coding Challenge 8
// Function that adds up to the number; 1 + 2 + 3 + 4 = 10
// Completed this before but applying Big O Notation to make it
// run faster.
// Solution

function addUpTo(n) {
  return (n * (n + 1)) / 2;
}
console.log(addUpTo(100));

// Coding Challenge 9
// Create a function that takes in a string and returns the count of each character in the string
// Solution

// function charCount(str) {
//   // create an object to return at the end
//   let result = {};
//   // loop over the string for each character...
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i].toLowerCase();
//     // if the char is a number/letter and is a key in the object, add one to the char key
//     // if the char is a (space, period, etc) do nothing
//     if (/[a-z0-9]/.test(char)) {
//       if (result[char] > 0) {
//         result[char]++;
//       } else {
//         // if the char is a number/letter and not in the object, add it to the object with one
//         result[char] = 1;
//       }
//     }
//   }
//   // return object at end
//   return result;
// }

// refactored version
function charCount(str) {
  let obj = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}
console.log(charCount("hi there!"));

// Coding Challenge 10
// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letter of another, such as cinema, formed from iceman.
// Solution
// Used the frequency counter pattern to solve this

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  let arr1 = str1.split("");
  let arr2 = str2.split("");

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(validAnagram("cinema", "iceman"));

// Coding challenge 11
// Implement a function called countUniqueValues which accepts a sorted array, and counts the unique values in the array.
// there can be negative numbers in the array, but it will always be sorted
// Solution
function countUniqueValues(numArr) {
  // add whatever parameters you deem necessary - good luck!
  let i = 0;
  for (let j = 1; j < numArr.length; j++) {
    if (numArr[i] !== numArr[j]) {
      i++;
      numArr[i] = numArr[j];
    }
  }
  if (i > 0) {
    return i + 1;
  } else {
    return i;
  }
}

console.log(countUniqueValues([1, 1, 1, 2, 3, 4, 4, 5, 6]));
