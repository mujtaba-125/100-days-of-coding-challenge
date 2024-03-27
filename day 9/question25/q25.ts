/*Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called
alien_color and assign it a value of 'green', 'yellow', or 'red'.

• Write an if statement to test whether the alien’s color is green. If it is, print a
message that the player just earned 5 points.

• Write one version of this program that passes the if test and another that fails.
(The version that fails will have no output.)*/

//create an object or map that store the alien color
let alien_color:{
    alien_color1:string,
    alien_color2:string,
    alien_color3:string}=
{
    alien_color1:"green",
    alien_color2:"yellow",
    alien_color3:"red"
}
//if statement to test the condition of green variable
console.log("Method 1")
if (alien_color.alien_color1==="green"){
    console.log("you earned 5 points!")//an alien was just shot down in a game

}

//The same question will also be done with different method

// Variable to store the alien's color
let alien_colors:'green' | 'red' | 'yellow' = 'green' ;
console.log("\nMethod 2")

//if statement to test the condition of green variable
if (alien_colors=='green'){
    console.log("you earned a 5 points! ")//an alien was just shot down in a game
}


