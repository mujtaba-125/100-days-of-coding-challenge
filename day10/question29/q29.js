/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent
if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array.
If the fruit is in your array, the if block should print a statement, such as You really like
bananas!*/
//create an array which contain the element
var favourite_fruits = ["mango", "banana", "apple"];
//Use only if block to check the all condition by using the includes key word {xyz.includes("name")}
if (favourite_fruits.includes("mango")) {
    console.log("you really like n ".concat(favourite_fruits[0]));
}
if (favourite_fruits.includes("banana")) {
    console.log("you really like n ".concat(favourite_fruits[1]));
}
if (favourite_fruits.includes("apple")) {
    console.log("you really like n ".concat(favourite_fruits[2]));
}
if (favourite_fruits.includes("guava")) {
    console.log("you really like n ".concat(favourite_fruits[3]));
}
if (favourite_fruits.includes("peach")) {
    console.log("you really like n ".concat(favourite_fruits[4]));
}
