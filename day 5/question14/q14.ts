/*Guest List: If you could invite anyone, living or deceased, to dinner, who would you
invite? Make a list that includes at least three people you’d like to invite to dinner. 
Then use your list to print a message to each person, inviting them to dinner. */

//making a list that store the element
let GuestList=["Basir","Zunair","Hammid"]

//message for inviting each guest
let InviteMessage:string="We'd be honored by your presence at dinner! Join us for a memorable celebration.";

//print the name of the element present at the list by add the invite message
console.log(`\nDear ${GuestList[0]} , ${InviteMessage}`)
console.log(`\nDear ${GuestList[1]} , ${InviteMessage}`)
console.log(`\nDear ${GuestList[2]} , ${InviteMessage}`)
