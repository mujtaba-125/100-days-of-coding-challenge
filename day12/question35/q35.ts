/*Animals: Think of at least three different animals that have a common characteristic. 
Store the names of these animals in a list, and then use a for loop to print out the name 
of each animal. 
• Modify your program to print a statement about each animal, such as A dog would make a great
 pet. 
• Add a line at the end of your program stating what these animals have in common. You could 
print a sentence such as Any of these animals would make a great pet!*/

// make a list of an animal having the similar characteristics
let animal:string[]=["cats","tiger","lions","leoperds","cheetahs"]

//using for loop for print the each element present in the list
for (let animals of animal){
    console.log(`The ${animals} would make a great pet`)//modify the line by adding the statement
}
//state outside of the program
console.log("Cats, including domestic and big cats, share a carnivorous diet, solitary hunting behavior, and remarkable agility, essential for stalking prey and surviving in diverse habitats.")