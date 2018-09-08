//My sample script
var fortune_outputs = [
    'You are going to have a bad day',
    'You are going to have an okay day',
    'You are going to have a great day',
];
var fortune_clicks = 0
var fortune_function = function(){ //Need to store the function in a variable, otherwise a stand alone function seems to run as soon as the script is loaded.
    var fortune_randomNumber = Math.floor(Math.random()*(fortune_outputs.length));
    if (fortune_randomNumber >=1){
        fortune_clicks++
    } else {
        fortune_clicks = 0;
    };
    alert(fortune_outputs[fortune_randomNumber]);
    var find_fortune_summary = document.getElementById('fortune_summary');
    if(find_fortune_summary == null){
        var para = document.createElement('p');   //Creates a virtual paragraph element when called and stores in 'para'.
        para.setAttribute('id','fortune_summary'); //Sets the ID of the new paragraph element to 'fortune_summary'.
        var element_insert = document.querySelector('div p'); //Selects the location to input the new paragraph when called.
        element_insert.appendChild(para); //Add the virtual paragraph underneath the specified element.
        find_fortune_summary = document.getElementById('fortune_summary');
    };
    if(fortune_clicks <=1){
        find_fortune_summary.style.display = 'none';
    } else{
        find_fortune_summary.style.display = 'block';
    };
    find_fortune_summary.innerHTML = 'Nice! You have scored '+fortune_clicks+' good fortunes in a row.'; //Sets the text of the 'para' element.
    console.log(fortune_clicks);
};
document.querySelector('button#fortune').addEventListener("click",fortune_function); //addEventListener seems to be more reliable that onclick.

