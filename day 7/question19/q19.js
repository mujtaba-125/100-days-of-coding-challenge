/*Dinner Guests: Working with one of the programs from Exercises 14 through 18,
print a message indicating the number of people you are inviting to dinner.*/
//question 14
//making a list that store the element
var GuestList = ["Basir", "Zunair", "Hammid"];
//message for inviting each guest
var InviteMessage = "We'd be honored by your presence at dinner! Join us for a memorable celebration.";
//print the name of the element present at the list by add the invite message
console.log("\nDear ".concat(GuestList[0], " , ").concat(InviteMessage));
console.log("\nDear ".concat(GuestList[1], " , ").concat(InviteMessage));
console.log("\nDear ".concat(GuestList[2], " , ").concat(InviteMessage));
//number of people are inviting ofr dinner
console.log("Number of people are inviting for dinner is " + GuestList.length);
