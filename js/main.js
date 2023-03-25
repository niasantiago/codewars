/* Day 1 */ 
/* convert a number to a string */ 
function numberToString(num) {
    // Return a string of the number here!
      return num.toString(); 
  } 
 

/* Day 2 */ 
/* convert a string to a number in JavaScript */
const stringToNumber = function(str){
    // put your code here
    return parseInt(str);
}

/* Day 3 */  
/* Given a random non-negative number, you have to return the digits of this number within an array in reverse order */
function digitize(n) {
    //code here
     const digits = n.toString().split('').map(Number);
    return digits.reverse();
  }


/* Day 4 */ 
/*Instructions- Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"*/


function bmi(weight, height) {
    const bmiValue = weight / Math.pow(height, 2);
    
    if (bmiValue <= 18.5) {
      return "Underweight";
    } else if (bmiValue <= 25.0) {
      return "Normal";
    } else if (bmiValue <= 30.0) {
      return "Overweight";
    } else {
      return "Obese";
    }
  }
 
/* Day 5 */  
// There is a certain multiplayer game where players are assessed at the end of the game for merit. Players are ranked according to an internal scoring system that players don't see.

// You've discovered the formula for the scoring system!

// Create a function called scoring() that takes an array of Player objects and returns an array of player names, in order of descending score (highest score is index 0, 2nd highest is index 1, etc.).

// Each player's score is calculated as follows:

// Each normal kill is worth 100 points
// Each assist is worth 50 points
// Each point of damage done is worth 0.5 points
// Each point of healing done is worth 1 point
// The longest kill streak is worth 2^N, where N is the number of kills of the streak
// Environmental kills are worth 500 points (These are counted separately from normal kills) 

function scoring(array){
  scores = []
  for (let i=0; i<array.length; i++){
      let player = array[i];
      let score = 0;
      score += player.kills * 100;
      score += player.assists * 50;
      score += player.damage_done * 0.5;
      score += player.healing_done * 1;
      score += Math.pow(2, player.longest_kill_streak);
      score += player.environmental_kills * 500;
      scores.push({name: player.name, score: score});
  }
  scores.sort((a, b) => b.score - a.score);
  return scores.map(player => player.name);
} 
