/*No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/
//create a variable that store an element of the user name
var user_names = ["Mujtaba", "Maaz", "Ahmed", "admin", "Afzal"];
//This statement is use for the deleting all the element inside the array 
user_names.splice(3, 2, "rahat");
//print the element by using the for loop and attach the greeting message with them
//create the if else block if the length of the array is 0 print the message
if (user_names.length === 0) {
    console.log("we need to find some users");
}
else //if any user it present this block will run inside the else block the another if else chain condition is present while using the for loop
    for (var _i = 0, user_names_1 = user_names; _i < user_names_1.length; _i++) {
        var user_name = user_names_1[_i];
        if (user_name === "admin") { //if the user is admin 
            console.log("Hello ".concat(user_name, ", would you like to see a status report"));
        }
        else { //if the user is any other person
            console.log("Hello ".concat(user_name, ", thank you for logging in again"));
        }
    }
