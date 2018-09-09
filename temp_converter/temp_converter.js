var TempNumber = getElementById().value;
/* Later, try adding an event listener through javascript instead of using an onsubmit attribute in the html
var ele = getElementById('TempForm');
if(ele.addEventListener){ //Listens for form submit for form with ID TempForm.
    ele.addEventListener("submit", display_convertTemp, false);  //Modern browsers
} else if(ele.attachEvent){
    ele.attachEvent('onsubmit', display_convertTemp);            //Old IE
};
*/
function convertTemp(){
   var k = getElementById('KelvinTempUnit').checked;
   var c = getElementById('CelsiusTempUnit').checked;
   var f = getElementById('FahrenheightTempUnit').checked;
   if (k == true){
        function convertKelvin(){
            var kelvin = TempNumber;
            var celsius = kelvin - 273; //Convert Kelvin to Celsius
            var fahrenheit = Math.floor(celsius * (9/5) + 32); //Convert Celsius to Fahrenheit and remove the decimal
        };
        convertKelvin();
        return;
    } else if (c == true) {
        function convertCelsius(){
            var celsius = TempNumber;
            var kelvin = TempNumber + 273; //Convert Celsius to Kelvin
            var fahrenheit = Math.floor(celsius * (9/5) + 32); //Convert Celsius to Fahrenheit and remove the decimal
        };
        convertCelsius();
        return;
    } else if (f == true) {
        function convertFahrenheight(){
            var fahrenheit = TempNumber;
            var celsius = Math.floor((fahrenheit - 32)*(5/9)); //Convert Fahrenheight to Celsius and remove the decimal
            var kelvin = celsius + 273;
        };
        convertFahrenheight();
        return;
    } else {
        window.alert('Please select a temperature unit and resubmit.')
    };
};
function display_convertTemp(){
    convertTemp();
    document.getElementById('TempMessage').innerHTML = `The temperature is ${fahrenheit} degrees Fahrenheit, ${celsius} degrees Celsius and ${kelvin} Kelvin.`
};

