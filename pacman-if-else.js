let powerPelletEaten = false;
let ghosts = 4;

while (true) {
    console.log(`Ghosts remaining: ${ghosts}`);

    if (!powerPelletEaten) {
        console.log('Pac-Man eats the power pellet.');
        powerPelletEaten = true;
    } else if (ghosts > 0) {
        console.log('Pac-Man eats a ghost');
        ghosts --;
    } else {
        break;
    }
}

console.log('Pac-Man returns home to his wife after a long day in the maze.');