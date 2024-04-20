/*Cities: Write a function called describe_city() that accepts the name of a city and
its country. The function should print a simple sentence, such as Karachi is in Pakistan.
Give the parameter for the country a default value. Call your function for three different
cities, at least one of which is not in the default country.*/
function describe_city(city, country) {
    if (country === void 0) { country = "pakistan"; }
    //store the first value in the variable
    var nameOfCity = city;
    //store the second value in the variale
    var nameOfCountry = country;
    //store the both value in the one variable
    var statement = "".concat(nameOfCity, " is in ").concat(nameOfCountry);
    // return the value
    return statement;
}
//calling the function
var value1 = describe_city("karachi");
console.log(value1);
//calling the function
var value2 = describe_city("karachi");
console.log(value2);
//calling the function
var value3 = describe_city("washington DC", "America");
console.log(value3);
