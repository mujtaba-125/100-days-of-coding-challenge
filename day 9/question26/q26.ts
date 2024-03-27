/* Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else
chain.
• If the alien’s color is green, print a statement that the player just earned 5 points 
for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the 
else block.*/

//assigning the variable 
let alien_color:'green'|'red'|'yellow'= 'green';

//if else chain
if(alien_color==='green'){//alien’s color is green
    console.log("earned 5 points for shooting the alien.");
}
//If the alien’s color isn’t green, print a statement that the player just earned 10 points.

else { //player just earned 10 points
    console.log("you just earned 10 points");
}