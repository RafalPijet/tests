var outputC = document.getElementById("greeter-outputC");
var outputF = document.getElementById("greeter-outputF");
var buttonC = document.getElementById("greeter-buttonC");
var buttonF = document.getElementById("greeter-buttonF");
var info = document.getElementById("info-field")
var answer1 = "The water is frozen. Put on a warm jacket, hat and scarf. You can go skiing";
var answer2 = "The water is liquid. You do not have to be warmly dressed. You can ride a bike";
var answer3 = "The water is in the form of water vapor. Watch out because you're getting burned. You can make yourself a cup of tea";

outputC.innerHTML = "Push the button to convert temperature from degrees Celsius to Fahrenheit";
outputF.innerHTML = "Push the button to convert temperature from degrees Fahrenheit to Celsius";
buttonC.addEventListener("click", function() {
    var number = window.prompt("Enter the temperature in degrees Celsius");
    var result;
    number = parseInt(number);

    if (isNaN(number)) {
        outputC.innerHTML = "Error!!! You must enter number";
        info.innerHTML = "Wait for information";
    } else {
        result = number * 1.8 + 32;
        outputC.innerHTML = "<br>" + "Temperature " + number + " Celsius degrees = " + Math.round(result) + " Fahrenheit degrees";

        if (number <= 0) {
            info.innerHTML = answer1;
        } else if ((number >= 0) && (number < 100)) {
            info.innerHTML = answer2;
        } else {
            info.innerHTML = answer3;
        }
    }
});
buttonF.addEventListener("click", function () {
    var number = window.prompt("Enter the temperature in degrees Fahrenheit");
    var result;
    number = parseInt(number);

    if (isNaN(number)) {
        outputF.innerHTML = "Error!!! You must enter number";
        info.innerHTML = "Wait for information";
    } else {
        result = (number - 32) / 2 * 1.1 ;
        outputF.innerHTML = "<br>" + "Temperature " + number + " Fahrenheit degrees = " + Math.round(result) + " Celsius degrees";

        if (result <= 0) {
            info.innerHTML = answer1;
        } else if ((result >= 0) && (result < 100)) {
            info.innerHTML = answer2;
        } else {
            info.innerHTML = answer3;
        }
    }
});




