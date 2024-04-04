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

import { afterEach } from "node:test"

//Make a list of five or more usernames called current_users.
let current_users:string[]=["Ali","Sara","Tariq","Javaid","Hunain"]

//make another list of five usernames called new_users with addition of two more user
let usernames:string[]=["Ali","Sara","Tariq","Javaid","Danish","Mirza"]

for(let username of usernames){
    if(current_users.some(val=>val.toLowerCase()===username.toLowerCase())){
        console.log(`Sorry, this name of user ,${username} is already taken`)
    }else(
        console.log(`This name of user, ${username} is available`)
    )
}