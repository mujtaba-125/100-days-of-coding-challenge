/*Seeing the World: Think of at least five places in the world you’d like to visit.
a) Store the locations in a array. Make sure the array is not in alphabetical order.

b) Print your array in its original order.

c) Print your array in alphabetical order without modifying the actual list.

d) Show that your array is still in its original order by printing it.

e) Print your array in reverse alphabetical order without changing the order of the original list.

f) Show that your array is still in its original order by printing it again.

g) Reverse the order of your list. Print the array to show that its order has changed.

h) Reverse the order of your list again. Print the list to show it’s back to its original order.

i) Sort your array so it’s stored in alphabetical order. Print the array to show that its order
has been changed.

j) Sort to change your array so it’s stored in reverse alphabetical order. Print the list to
show that its order has changed. */
//a) Store the locations in a array. Make sure the array is not in alphabetical order.
var locations = ["Harmain Shareef", "Masjid-e-Nabwi", "Masjid-e-Aqsa", "karbala", "Najaf"];
//b) Print your array in its original order.
console.log("\tarray in its original order");
console.log(locations);
//c) Print your array in alphabetical order without modifying the actual list.
console.log("\tArray in alphabetical order");
//first converting it into slice and store it in a variable
var sorted_array = locations.slice();
//print it by using the sort key word for print in alphabatical order
console.log(sorted_array.sort());
//d) Show that your array is still in its original order by printing it.
console.log("\tArray is still in its original order");
console.log(locations);
//e)Print your array in reverse alphabetical order without changing the order of the original list.
console.log("\tArray in reverse alphabetical order");
console.log(sorted_array.reverse());
//f)Show that your array is still in its original order by printing it again.
console.log("\tAgain check the Array is still in its original order");
console.log(locations);
//g) Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reverse the order of the list");
console.log(locations.reverse());
/*h) Reverse the order of your list again. Print the list to show it’s back to its original
order.*/
console.log("Reverse the order of the list again");
console.log(locations.reverse());
/*i) Sort your array so it’s stored in alphabetical order. Print the array to show that its order
has been changed.*/
console.log("\tSort array so it’s stored in alphabetical order");
console.log(locations.sort());
/*j)Sort to change your array so it’s stored in reverse alphabetical order. Print the list to
show that its order has changed.*/
console.log("\tSort to change your array so it’s stored in reverse alphabetical order");
console.log(locations.reverse());
