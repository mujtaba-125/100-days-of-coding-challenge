/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you
need to send out a new set of invitations. You’ll have to think of someone else to invite.

a) Start with your program from Exercise 14. Add a print statement at the end of your
program stating the name of the guest who can’t make it.

b) Modify your list, replacing the name of the guest who can’t make it with the name of the
new person you are inviting.

c) Print a second set of invitation messages, one for each person who is still in your list.*/

//making a list that store the element
let GuestList=["Basir","Zunair","Hammid"]

//message for inviting each guest
let InviteMessage:string="We'd be honored by your presence at dinner! Join us for a memorable celebration.";

//print the name of the element present at the list by add the invite message
console.log(`Dear ${GuestList[0]} , ${InviteMessage}`)
console.log(`Dear ${GuestList[1]} , ${InviteMessage}`)
console.log(`Dear ${GuestList[2]} , ${InviteMessage}`)

/* a) statement at the end of the question14 program stating the name of the guest who 
can’t make it.*/
console.log("\n"+GuestList[1]+" can't make it due to his health issues.")

// b) adding the name of the new guest and replace from the person who can't make it 
console.log("\nIn replace of "+GuestList[1] +" the newly guest has been invited in a list")
GuestList[1]="Rajab";
console.log(GuestList)

// c) Print a second set of invitation messages, one for each person who is still in your list
console.log(`\nDear ${GuestList[0]} , ${InviteMessage}`)
console.log(`Dear ${GuestList[1]} , ${InviteMessage}`)
console.log(`Dear ${GuestList[2]} , ${InviteMessage}`)