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