/*Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to print out the name
of each animal.
• Modify your program to print a statement about each animal, such as A dog would make a great
 pet.
• Add a line at the end of your program stating what these animals have in common. You could
print a sentence such as Any of these animals would make a great pet!*/
// make a list of an animal having the similar characteristics
var animal = ["cats", "tiger", "lions", "leoperds", "cheetahs"];
//using for loop for print the each element present in the list
for (var _i = 0, animal_1 = animal; _i < animal_1.length; _i++) {
    var animals = animal_1[_i];
    console.log(animals);
    console.log("The ".concat(animals, " would make a great pet"));
}
//state outside of the program
console.log("Cats, including domestic and big cats, share a carnivorous diet, solitary hunting behavior, and remarkable agility, essential for stalking prey and surviving in diverse habitats.");
