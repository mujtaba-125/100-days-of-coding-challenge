/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in 
time for the dinner, and you have space for only two guests.

a) Start with your program from Exercise 16. Add a new line that prints a message saying
that you can invite only two people for dinner.

b) Remove guests from your list one at a time until only two names remain in your list.Each
 time you pop a name from your list, print a message to that person letting them know you’re 
 sorry you can’t invite them to dinner.

c) Print a message to each of the two people still on your list, letting them know they’re
 still invited.

d) Remove the last two names from your list, so you have an empty list. Print your list to 
make sure you actually have an empty list at the end of your program*/

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

//statement to the end of your program informing people that you found a bigger dinner table
console.log("I found a bigger dinning table for inviting more people ");

//Add one new guest to the beginning of array by using unshift keyword.
GuestList.unshift("Ali");
console.log("\nAdding the guest at the starting of the list");
console.log(GuestList);

/*Add one new guest to the middle of your array. • Use append() to add one new guest to the
end of your list. • Print a new set of invitation messages, one for each person in your list.*/

//adding the guest at the middle of the list by using the splice method
GuestList.splice(2,0,"Sarim");
console.log("\nAdding the guest at the middle of the list");
console.log(GuestList);

//adding the guest at the end of the list by using the push key word
GuestList.push("Mohsin");
console.log("\nAdding the guest at the end of the list"); 
console.log(GuestList);

/* a)  Add a new line that prints a message saying that you can invite only two people for
 dinner.*/
console.log("\nDue to some lack of arrangement, I just only invite two people ")

/* b) Remove guests from your list one at a time until only two names remain in your list.Each
 time you pop a name from your list, print a message to that person letting them know you’re 
 sorry you can’t invite them to dinner.*/
let Remove_Guest1=GuestList.pop()
console.log(Remove_Guest1+" sorry, you can’t invite for dinner.")

let Remove_Guest2=GuestList.pop()
console.log(Remove_Guest2+" sorry, you can’t invite for dinner.")

let Remove_Guest3=GuestList.pop()
console.log(Remove_Guest3+" sorry, you can’t invite for dinner.")

let Remove_Guest4=GuestList.pop()
console.log(Remove_Guest4+" sorry, you can’t invite for dinner.")

/*c) Print a message to each of the two people still on your list, letting them know they’re
 still invited. */

//create new message the guest ehich are still invited 
let message1:string="your are stil invited"

//print the name of the person which are still invited for dinner 

console.log(`\nDear ${GuestList[0]} ,${message1} ${InviteMessage}`)
console.log(`Dear ${GuestList[1]} ,${message1} ${InviteMessage}`)

/*d) Remove the last two names from your list, so you have an empty list. Print your list to 
make sure you actually have an empty list at the end of your program*/

let Removing_secondlast_person=GuestList.pop()
let Removing_last_person=GuestList.pop()

//print the list of the guest
console.log("\nThe empty list after poping all the name of the guest present in list")
console.log(GuestList)