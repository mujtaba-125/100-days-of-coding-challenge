/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a 
message that reads I love TypeScript. Make a large shirt and a medium shirt with the default 
message, and a shirt of any size with a different message.*/

function make_shirt(size:string="large",text:string="I love typescript"){
    console.log(`The size of the shirt is "${size}" and message on the shirt is (${text})`)
}
//calling the function by mentioning the function definition of it's sequence of argument 
//call the default arguement by just calling the function definition 
make_shirt()
//call the function by passing the argement in function call (i.e:size) 
make_shirt("medium");
