/*Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians
by adding the phrase the Great to each magician’s name. Call show_magicians() 
to see that the list has actually been modified */

//create a function and passing the parameter using the foreach loop call back the function
function show_magicians(magicians:string[]):void{
     magicians.forEach(magician => {//using the foreach loop array and call back the function
          console.log(magician);//print each element    
     });
}     
function make_great(magicians:string[]):string[]{
     return magicians.map(magician=>`The Great ${magician}`);//by using the map method the each function return by the call back function each time and print it's value in function call   
     }   
   
//creating an array named as magician_name
let magician_name:string[]= ["Jhon","Michael","Zampa","christ"]
//function call 
console.log(make_great(magician_name))

