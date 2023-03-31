// Complete the solution so that it reverses the string passed into it. 
function solution(str) {
    return str.split("").reverse().join("");
  }
  
  let word = "world";
  let reversedWord = solution(word);
  console.log(reversedWord); 