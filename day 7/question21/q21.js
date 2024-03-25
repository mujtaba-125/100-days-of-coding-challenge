/*They think of something you could store in a TypeScript Object. Write a program that
creates Objects containing these items.*/
//create an object with key value pair
var user = {
    first_name: "Maaz",
    last_name: "Malik",
    age: 18,
    hobbies: ["cricket", "gamming", "reading"]
};
//print the object named as user
console.log("\nThe name of the user is ".concat(user.first_name, " ").concat(user.last_name, " , the age of the user\nis ").concat(user.age, " , the number one favourite  hobby of  ").concat(user.first_name, " is ").concat(user.hobbies[0]));
//create second object with key value pair
var shop = {
    nameOfShop: "get in out",
    customerExperience: "Excellent",
    discount: "based on the event",
    currentLocation: "Bahadurabad,block G-21 Karachi"
};
//print the object named as shop
console.log("\nThe name of the shop is ".concat(shop.nameOfShop, " at ").concat(shop.currentLocation, "\nThe review of the customer is ").concat(shop.customerExperience, " while they have offer of discount ").concat(shop.discount));
//create third object with key value pair
var fruits = {
    favouiteFruits: ["mango", "banana", "dates", "grapes"],
    summerFruits: ["mango", "plums", "papaya", "peach"],
    winterFruits: ["oranges", "Grapefruit", "pear"]
};
//print the object named as fruits
console.log("\nMy favourite fruit is ".concat(fruits.favouiteFruits, " \nThe fruit comes in the summer are\t \n\t").concat(fruits.summerFruits, " \nand the fruit that comes in the winter season are \n\t").concat(fruits.winterFruits));
