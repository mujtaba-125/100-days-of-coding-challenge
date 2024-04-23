/*Magicians: Make a array of magician’s names. Pass the array to a function called 
show_magicians(), which prints the name of each magician in the array.*/

//create a function and passing the parameter using the foreach loop call back the function
function show_magicians(magicians:string[]):void{
  magicians.forEach(magician => {//using the foreach loop array and call back the function
       console.log(magician);//print each element
       
  });
}
//creating an array
let magician_name= ["Jhon","Michael","Zampa","christ"];
//function call 
show_magicians(magician_name);
  