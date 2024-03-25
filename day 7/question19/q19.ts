/*Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
print a message indicating the number of people you are inviting to dinner.*/

//question 14
//making a list that store the element
let GuestList=["Basir","Zunair","Hammid"]

//message for inviting each guest
let InviteMessage:string="We'd be honored by your presence at dinner! Join us for a memorable celebration.";

//print the name of the element present at the list by add the invite message
console.log(`\nDear ${GuestList[0]} , ${InviteMessage}`)
console.log(`\nDear ${GuestList[1]} , ${InviteMessage}`)
console.log(`\nDear ${GuestList[2]} , ${InviteMessage}`)

//number of people are inviting ofr dinner
console.log("Number of people are inviting for dinner is "+GuestList.length)