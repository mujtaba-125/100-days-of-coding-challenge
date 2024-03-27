/*Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the 
appropriate color alien. */

//assigning the value of the variable
let alien_color:'green'|'yellow'|'red' ="yellow";

//if else chain

//If the alien is green, print a message that the player earned 5 points
if (alien_color=="green"){
    console.log("player earned 5 points")
}

//If the alien is red, print a message that the player earned 15 points.
else if (alien_color=="yellow"){
    console.log("player earned 10 points")
}

//If the alien is red, print a message that the player earned 15 points
else { //for the remaining one it implies on
    console.log("player earned 15 points")

}