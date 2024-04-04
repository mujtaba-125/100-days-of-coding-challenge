"use strict";
/*Checking Usernames: Do the following to create a program that simulates how websites ensure
that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new
usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has,
print a message that the person will need to enter a new username. If a username has not been
used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be
accepted.*/
Object.defineProperty(exports, "__esModule", { value: true });
//Make a list of five or more usernames called current_users.
var current_users = ["Ali", "Sara", "Tariq", "Javaid", "Hunain"];
//make another list of five usernames called new_users with addition of two more user
var usernames = ["Ali", "Sara", "Tariq", "Javaid", "Danish", "Mirza"];
var _loop_1 = function (username) {
    if (current_users.some(function (val) { return val.toLowerCase() === username.toLowerCase(); })) {
        console.log("Sorry, this name of user ,".concat(username, " is already taken"));
    }
    else
        (console.log("This name of user, ".concat(username, " is available")));
};
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var username = usernames_1[_i];
    _loop_1(username);
}
