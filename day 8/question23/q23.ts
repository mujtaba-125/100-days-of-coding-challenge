/*Conditional Tests: Write a series of conditional tests. Print a statement describing each
test and your prediction for the results of each test. Your code should look something like 
this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to 
True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate
to False. */

//tests evaluate to True

//1st condition test (==)
let numbers:number =5;//create a variable that store a number
console.log("if number == 5 , I guess the true number")
console.log(numbers==5)//check the equality of the variable(==)

//2nd condition test(>)
let percentage:number=85;//create a variable that store a percentage
console.log("if percentage < 80  , I guess the true percentage")
console.log(percentage>80)//check the condition greater than(>)

//3rd condition test(<)
let age :number=18;
console.log("if age >10  , I guess the true age")
console.log(age<20)//check the condition of lesser than(<)

//4th condition test(!=)
let city:string="Karachi";//create a variable that store a string named as city
console.log("if city !=karachi, I guess the true city")
console.log(city!="karachi")//check the condition of not equals to(!=)
 
//5th condition test(boolean value)
let parking:boolean=true//create a variable that store a boolean value
console.log("if parking is true, I guess the right")
console.log(parking)//check the boolean value

//tests evaluate to false

//6th condition test (==)
let time ="7:00am to 9:00am"
console.log("if time =='7:00pm to 9:00pm', I guess the false timming")
console.log(time=="7:00pm to 9:00pm")////check the equality of the variable(==)

//7th condition test (>=)
let price:number=50;//create a variable that store the value of price
console.log("if price >=55, I guess the false price")
console.log(price >=55)//check the condition greater than(>=)

//8th condition test (!=)
let calculation:number=5*5;//create a variable that store the value of price
console.log("if calculation !=25 , I guess the false calculation")
console.log(calculation !=25)//check the condition greater than(!=)

//9th condition test (<=)
let budget:number=800000;//create a variable that store the budget
console.log("if Budget<=65486, I guess the false Budget")
console.log(budget <= 65486)//check the condition greater than(<=)

//10th condition test(boolean value)
let user_name:boolean=false//create a variable that store a boolean value
console.log("if user_name is false, I guess the wrong user")
console.log(user_name)//check the boolean value