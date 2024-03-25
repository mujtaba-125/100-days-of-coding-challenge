/*They think of something you could store in a TypeScript Object. Write a program that
creates Objects containing these items.*/

//create an object with key value pair
let user:{first_name:string, 
    last_name:string,
    age:number,
    hobbies:string[]}=
    {
    first_name:"Maaz",
    last_name:"Malik",
    age:18,
    hobbies:["cricket","gamming","reading"]
}
//print the object named as user
console.log(`\nThe name of the user is ${user.first_name} ${user.last_name} , the age of the user
is ${user.age} , the number one favourite  hobby of  ${user.first_name} is ${user.hobbies[0]}`)

//create second object with key value pair
let shop:{nameOfShop:string,
    customerExperience:string,
    discount:string,
    currentLocation:string}=
    {
    nameOfShop:"get in out",
    customerExperience:"Excellent",
    discount:"based on the event",
    currentLocation:"Bahadurabad,block G-21 Karachi"
}
//print the object named as shop
console.log(`\nThe name of the shop is ${shop.nameOfShop} at ${shop.currentLocation}\nThe review of the customer is ${shop.customerExperience} while they have offer of discount ${shop.discount}`)

//create third object with key value pair
let fruits : {
    favouiteFruits:string[],
    summerFruits:string[],
    winterFruits:string[]}=
    {
    favouiteFruits:["mango","banana","dates","grapes"],
    summerFruits:["mango","plums","papaya","peach"],
    winterFruits:["oranges","Grapefruit","pear"]
}
//print the object named as fruits
console.log(`\nMy favourite fruit is ${fruits.favouiteFruits} \nThe fruit comes in the summer are\t 
\t${fruits.summerFruits} 
and the fruit that comes in the winter season are \n\t${fruits.winterFruits}`)