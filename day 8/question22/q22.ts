/*Intentional Error: If you haven’t received an array index error in one of your
programs yet, try to make one happen. Change an index in one of your programs to
produce an index error. Make sure you correct the error before closing the program.*/

//The program that cause an error
let myArray = [1, 2, 3]; 

// Accessing the fourth element (index 3), which doesn't exist
let InvalidValue = myArray[3]; 
console.log(InvalidValue);  // This will cause an error

myArray[3]=89;
// Accessing the fourth element (index 3), which  exist
console.log(myArray[3]) // This will not cause an error