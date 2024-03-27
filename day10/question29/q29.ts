/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent
if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array.
If the fruit is in your array, the if block should print a statement, such as You really like
bananas!*/

//create an array which contain the element
let favourite_fruits:string[]=["mango","banana","apple"];

//Use only if block to check the all condition by using the includes key word {xyz.includes("name")} which is similar to 'in' key words
if(favourite_fruits.includes("mango")){
    console.log(`you really like n ${favourite_fruits[0]}`)//print element through indexing
}
if(favourite_fruits.includes("banana")){
    console.log(`you really like n ${favourite_fruits[1]}`)
}
if(favourite_fruits.includes("apple")){
    console.log(`you really like n ${favourite_fruits[2]}`)
}
if(favourite_fruits.includes("guava")){
    console.log(`you really like n ${favourite_fruits[3]}`)
}
if(favourite_fruits.includes("peach")){
    console.log(`you really like n ${favourite_fruits[4]}`)
}