// A named function.
function eatDot1() {
    console.log('MUNCH!');
}

// Anonymous function
/* Here we assign the function to a variable,
   instead of giving it a name directly. */
const eatDot2 = function() {
    console.log('MUNCH!');
}

// Arrow function
// Also anonymous.
const eatDot3 = () => {
    console.log('MUNCH!');
}

eatDot1();
eatDot2();
eatDot3();



const highScores = []; //This is a const, but since it is an array we can add values to it.
function addHighScore(highScoreList, playerInitials, score) {
    const record = { player: playerInitials, score: score };
    highScoreList.push(record); //Add record to array.
}

addHighScore(highScores, 'SDL', 2000);
addHighScore(highScores, 'JSL', 10000);
console.log(highScores);