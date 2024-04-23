/*Album: Write a function called make_album() that builds a Object describing a music album.
The function should take in an artist name and an album title, and it should return a Object
containing these two pieces of information. Use the function to make three dictionaries 
representing different albums. Print each return value to show that Objects are storing the 
album information correctly. Add an optional parameter to make_album() that allows you to 
store the number of tracks on an album. If the calling line includes a value for the number
of tracks, add that value to the album’s Object. Make at least one new function call that 
includes the number of tracks on an album.*/

//create an object that store the three variable with strong typing 
interface Album{
    artist_name:string;
    album_ttile:string;
    tracks:number;
};
// create a function named as the make album and return it's each variable value
function make_album(artist_name:string,album_ttile:string,tracks:number):Album {
    return {artist_name,album_ttile,tracks}
}
//function call
//create a variables that store the value of the function 
let album1=make_album("Michael Jackson","Thriller",9)
let album2=make_album("Beatles","Abbey Road",17)
let album3=make_album("Pink Floyd","The dark side of the moon",10)

// print the each variable 
console.log(album1);
console.log(album2);
console.log(album3);