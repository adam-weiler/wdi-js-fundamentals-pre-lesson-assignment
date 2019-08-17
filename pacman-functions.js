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