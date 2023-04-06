// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num){
  //var countSheep = function(num) {
  var murmur = '';
  for (var i = 1; i <= num; i++) {
    murmur += i + ' sheep...';
  }
  return murmur
}  

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters. 

function getMiddle(s) {
  const len = s.length;
  const mid = Math.floor(len / 2);
  return len % 2 === 0 ? s.substr(mid - 1, 2) : s.substr(mid, 1);
} 