
/* Later, try adding an event listener through javascript instead of using an onsubmit attribute in the html
var ele = getElementById('TempForm');
if(ele.addEventListener){ //Listens for form submit for form with ID TempForm.
    ele.addEventListener("submit", display_convertTemp, false);  //Modern browsers
} else if(ele.attachEvent){
    ele.attachEvent('onsubmit', display_convertTemp);            //Old IE
};
*/
function display_convertTemp(){
    var TempNumber = document.getElementById('TempNumberInput').value;
    var k = document.getElementById('KelvinTempUnit').checked;
    var c = document.getElementById('CelsiusTempUnit').checked;
    var f = document.getElementById('FahrenheightTempUnit').checked;
    function convertTemp(){
        if (k == true){
             function convertKelvin(){
                 var kelvin = TempNumber;
                 var celsius = parseInt(kelvin,10)-273; //Convert Kelvin to Celsius
                 var fahrenheight = Math.floor(celsius * (9/5) + 32); //Convert Celsius to Fahrenheight and remove the decimal
                 document.getElementById('TempMessage').innerHTML = `The temperature is ${fahrenheight} degrees Fahrenheight, ${celsius} degrees Celsius and ${kelvin} Kelvin.`
             };
             convertKelvin();
         } else if (c == true) {
             function convertCelsius(){
                 var celsius = TempNumber;
                 var kelvin = parseInt(celsius,10)+273; //Convert Celsius to Kelvin
                 var fahrenheight = Math.floor(celsius * (9/5) + 32); //Convert Celsius to Fahrenheight and remove the decimal
                 document.getElementById('TempMessage').innerHTML = `The temperature is ${fahrenheight} degrees Fahrenheight, ${celsius} degrees Celsius and ${kelvin} Kelvin.`
                };
             convertCelsius();
         } else if (f == true) {
             function convertFahrenheight(){
                 var fahrenheight = TempNumber;
                 var celsius = Math.floor((fahrenheight - 32)*(5/9)); //Convert Fahrenheight to Celsius and remove the decimal
                 var kelvin = celsius + 273;
                 document.getElementById('TempMessage').innerHTML = `The temperature is ${fahrenheight} degrees Fahrenheight, ${celsius} degrees Celsius and ${kelvin} Kelvin.`
             };
             convertFahrenheight();
         } else {
             window.alert('Please select a temperature unit and resubmit.')
         };
     };
    convertTemp();
};


