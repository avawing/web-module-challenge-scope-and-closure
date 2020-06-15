// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * counter1 is a constant that contains a callback function, and counter two is a method.
 * Both of them do the same thing.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * Counter one uses a closure. It returns a function within a function.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * Counter1 is preferable if you want to call the function by another name for some reason. Useful for renaming functions.
 * Counter1 is also preferable when you are writing longer and more difficult programs and trying to save on computational time.
 * 
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){

    /*Code Here*/
return Math.floor(Math.random() * 2);
}


/* Task 3: finalScore()


Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) 
and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(num, callback){
  let score1 = 0;
  let score2 = 0;
  for(let i = 1; i < num; i++){
    score1 += callback();
    score2 += callback();
  }
  return `Home: ${score1} `+ "\n"  + `Away: ${score2}` + "\n" ;

  /*Code Here*/
}

console.log(finalScore(5, inning)) 

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

function scoreboard(number, callback) {
  /* CODE HERE */
  let board = '';
  let score1 = 0;
  let score2 = 0;

  for(let i = 1; i <= number; i++){
    score1 += callback()
    score2 += callback()
    
    if (i === 1){     
      board += `1st Inning: ${score1} - ${score2}`
    }
    if (i === 2){
      board += "\n" + `2nd Inning: ${score1} - ${score2}`
    } if (i === 3){
      board += "\n"+ `3rd Inning: ${score1} - ${score2}`
    } if (i > 3 && i < number) {
      board += "\n" + `${i}th Inning: ${score1} - ${score2}` 
    } if (i === number){
      board += "\n" + `${i}th Inning: ${score1} - ${score2}` + "\n \n" + `Final Score: ${score1} - ${score2}`
    }
    
  }
  return board
}
console.log(scoreboard(9, inning))

//function 'breaks' if innings go above 20