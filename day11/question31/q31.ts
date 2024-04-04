/*No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/

//create a variable that store an element of the user name
let user_names:string[]=["Mujtaba","Maaz","Ahmed","admin","Afzal"]

//This statement slice method is use for the deleting all the element inside the array 
user_names.splice(0)

//print the element by using the for loop and attach the greeting message with them

//create the if else block if the length of the array is 0 print the message
if(user_names.length===0){
    console.log("we need to find some users")
}else//if any user it present this block will run inside the else block the another if else chain condition is present while using the for loop
    for(let user_name of user_names){

        if (user_name==="admin"){ //if the user is admin 
            console.log(`Hello ${user_name}, would you like to see a status report`)

        }else{//if the user is any other person
            console.log(`Hello ${user_name}, thank you for logging in again`)

        }
}


