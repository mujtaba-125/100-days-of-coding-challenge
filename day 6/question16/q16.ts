/*More Guests: You just found a bigger dinner table, so now more space is available. Think of 
three more guests to invite to dinner.

a) Start with your program from Exercise 15. Add a print statement to the end of your program
 informing people that you found a bigger dinner table.

b) Add one new guest to the beginning of your array.

c) Add one new guest to the middle of your array. • Use append() to add one new guest to the
 end of your list. • Print a new set of invitation messages, one for each person in your list. */

//making a list that store the element
let GuestList=["Basir","Zunair","Hammid"]
console.log("\tInital guestlist")
console.log(GuestList)

//message for inviting each guest
let InviteMessage:string="We'd be honored by your presence at dinner! Join us for a memorable celebration.";

//print the name of the element present at the list by add the invite message
console.log(`\nDear ${GuestList[0]} , ${InviteMessage}`)
console.log(`Dear ${GuestList[1]} , ${InviteMessage}`)
console.log(`Dear ${GuestList[2]} , ${InviteMessage}`)

/*statement at the end of the question14 program stating the name of the guest who 
can’t make it.*/
console.log("\n"+GuestList[1]+" can't make it due to his health issues.");

//adding the name of the new guest and replace from the person who can't make it 
console.log("\nIn replace of "+GuestList[1] +" the newly guest has been invited in a list");
GuestList[1]="Rajab";
console.log(GuestList);

//Print a second set of invitation messages, one for each person who is still in your list
console.log(`\nDear ${GuestList[0]} , ${InviteMessage}`);
console.log(`Dear ${GuestList[1]} , ${InviteMessage}`);
console.log(`Dear ${GuestList[2]} , ${InviteMessage}`);

// a)statement to the end of your program informing people that you found a bigger dinner table
console.log("I found a bigger dinning table for inviting more people ");

//b) Add one new guest to the beginning of array by using unshift keyword.
GuestList.unshift("Ali");
console.log("\nAdding the guest at the starting of the list");
console.log(GuestList);

/*c) Add one new guest to the middle of your array. • Use append() to add one new guest to the
end of your list. • Print a new set of invitation messages, one for each person in your list.*/

//adding the guest at the middle of the list by using the splice method
GuestList.splice(2,0,"Sarim");
console.log("\nAdding the guest at the middle of the list");
console.log(GuestList);

//adding the guest at the end of the list by using the push key word
GuestList.push("Mohsin");
console.log("\nAdding the guest at the end of the list"); 
console.log(GuestList);