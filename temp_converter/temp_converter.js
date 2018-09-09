//Assign the Kelvin conversion constant
var kelvin = 293;
//Convert Kevlin to Celsius
const celsius = kelvin - 273;
//Changeable variable to allow Farenheit calculation from Celsius
let fahrenheit = celsius * (9/5) + 32;
//Remove the decimal from farenheit calculation
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit and ${celsius} degrees Celsius.`);