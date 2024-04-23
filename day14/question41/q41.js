/*Magicians: Make a array of magician’s names. Pass the array to a function called
show_magicians(), which prints the name of each magician in the array.*/
// function show_magicians(magicians:string[]){
//     return magicians;
// }
// let magician_name= show_magicians(["Jhon","Michael","Zampa","christ"])
// console.log(magician_name);
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
// Array of magician's names
var magicianNames = ["Merlin", "Houdini", "David Copperfield", "Penn & Teller"];
// Call the function to display magician names
show_magicians(magicianNames);
