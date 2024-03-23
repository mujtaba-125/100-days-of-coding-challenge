/*Guest List: If you could invite anyone, living or deceased, to dinner, who would you
invite? Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner. */
//making a list that store the element
var GuestList = ["Basir", "Zunair", "Hammid"];
//message of inviting for each guest
var InviteMessage = "We'd be honored by your presence at dinner! Join us for a memorable celebration.";
//print the name of the element present at the list by add the invite message
console.log("\nDear ".concat(GuestList[0], " , ").concat(InviteMessage));
console.log("\nDear ".concat(GuestList[1], " , ").concat(InviteMessage));
console.log("\nDear ".concat(GuestList[2], " , ").concat(InviteMessage));
