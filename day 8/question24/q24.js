/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If
you want to try more comparisons, write more tests. Have at least one True and one False
result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater
  than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array */
//Tests for equality and inequality with strings
//store a variable in form of string
var city = "Karachi";
//Tests equality with string
console.log("Test for equality with string ");
console.log(city === "Karachi");
//Tests inequality with string
console.log("Test for inequality with string");
console.log(city !== "Karachi");
//Tests using the lower case function
var lowercase_variable = "Governor House Initiative of IT courses";
console.log("Tests using the lower case function");
console.log("governor house initiative of it courses" === lowercase_variable.toLowerCase());
/*Numerical tests involving equality and inequality, greater than and less than, greater
than or equal to, and less than or equal to*/
var Numerical_test = 10;
console.log("checking equality (Numerical_test===10)");
console.log(Numerical_test === 10); //checking equality 
console.log("checking inequality (Numerical_test!==10)");
console.log(Numerical_test !== 10); ////checking inequality 
console.log("checking the greater than(Numerical_test>12)");
console.log(Numerical_test > 12); //checking the greater than
console.log("checking the lesser than(Numerical_test<5)");
console.log(Numerical_test < 5); //checking the lesser than
console.log("checking the greater than equals to(Numerical_test>=7)");
console.log(Numerical_test >= 7); //checking the greater than equals to
console.log("checking the leser than equals to (Numerical_test<=15)");
console.log(Numerical_test <= 15); //checking the leser than equals to
//Tests using "and" and "or" operators
//Tests using "and" operators
//storing a varable 
var a = 10;
var b = 15;
//Tests using "and" operators
console.log("(a===10)&&(b===15)"); //when both conditions are true
console.log((a === 10) && (b === 15));
console.log("(a===10)&&(b===13)"); //when either condition are true
console.log((a === 10) && (b === 13));
console.log("(a===12)&&(b===15)"); //when either condition are true
console.log((a === 12) && (b === 15));
console.log("(a===20)&&(b===18)"); //when both condition are false
console.log((a === 20) && (b === 18));
//Tests using "or" operators
console.log("(a===10)||(b===15)"); //when both conditions are true
console.log((a === 10) || (b === 15));
console.log("(a===10)||(b===13)"); //when either condition are true
console.log((a === 10) || (b === 13));
console.log("(a===12)||(b===15)"); //when either condition are true
console.log((a === 12) || (b === 15));
console.log("(a===20)||(b===18)"); //when both condition are false
console.log((a === 20) || (b === 18));
//storing an elements in an array
var nums = [1, 2, 3, 4, 5];
//Test whether an item is in a array
console.log(4 in nums); // Corrected way to check if an item is  in the array
//storing an elements in an array
var countries = ["Pakistan", "Saudia Arabia", "Iran", "Afghanistan", "China"];
//Test whether an item is not in a array
console.log(!("Oman" in countries)); // Check if "Iran" is not in the countries array 
