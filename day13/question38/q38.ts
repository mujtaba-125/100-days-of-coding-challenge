/*Cities: Write a function called describe_city() that accepts the name of a city and
its country. The function should print a simple sentence, such as Karachi is in Pakistan.
Give the parameter for the country a default value. Call your function for three different 
cities, at least one of which is not in the default country.*/

//making a function named as describe function
function describe_city(city:string,country:string="pakistan"){
    //store the first value in the variable
    let nameOfCity:string=city;
    //store the second value in the variale
    let nameOfCountry:string=country;
    //store the both value in the one variable
    let statement:string=`${nameOfCity} is in ${nameOfCountry}`;
    // return the value
    return statement;
}
//calling the function by default value
let value1= describe_city("Karachi");
console.log(value1);

//calling the function by default value
let value2= describe_city("Sialkot");
console.log(value2);

//calling the function by passing the arguement
let value3= describe_city("Washington DC","America");
console.log(value3);