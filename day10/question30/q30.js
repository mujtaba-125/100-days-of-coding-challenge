/*Hello Admin: Make a array of five or more usernames, including the name 'admin'.
Imagine you are writing code that will print a greeting to each user after they log
in to a website. Loop through the array, and print a greeting to each user:

• If the username is 'admin', print a special greeting, such as Hello admin,
would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again. */
//create a variable that store an element of the user name
var user_names = ["Mujtaba", "Maaz", "Ahmed", "admin", "Afzal"];
//print the element by using the for loop and attach the greeting message with them
for (var _i = 0, user_names_1 = user_names; _i < user_names_1.length; _i++) {
    var user_name = user_names_1[_i];
    if (user_name === "admin") { //if the user is admin 
        console.log("Hello ".concat(user_name, ", would you like to see a status report"));
    }
    else { //if the user is any other person
        console.log("Hello ".concat(user_name, ", thank you for logging in again"));
    }
}
