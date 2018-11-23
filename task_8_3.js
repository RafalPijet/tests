"use strict";
(function () {
    var outputC = document.getElementById("greeter-outputC");
    var outputF = document.getElementById("greeter-outputF");
    var buttonC = document.getElementById("greeter-buttonC");
    var buttonF = document.getElementById("greeter-buttonF");
    var info = document.getElementById("info-field");
    var answerError = "Error!!! You must enter number";
    var validation = function(isFirst) {
        var number = parseInt(window.prompt("Enter the temperature"));

        if (isNaN(number)) {

            if (isFirst) {
                outputC.innerHTML = answerError;
            } else {
                outputF.innerHTML = answerError;
            }
            return null;
        } else {
            return number;
        }
    }
    var convertCtoF = function(number) {

        if (number != null) {
            return Math.round(number * 1.8 + 32);
        }
    }
    var convertFtoC = function(number) {

        if (number != null) {
            return Math.round((number - 32) / 2 * 1.1);
        }
    }
    var selectInfo = function(temp, char) {

        if (((char == "C") && (temp <= 0)) || ((char == "F") && (temp <= 32))) {
            return "The water is frozen. Put on a warm jacket, hat and scarf. You can go skiing";
        } else if (((char == "C") && ((temp >= 0) && (temp < 100))) || ((char == "F") && ((temp >= 32) && (temp < 213)))) {
            return "The water is liquid. You do not have to be warmly dressed. You can ride a bike";
        } else {
            return "The water is in the form of water vapor. Watch out because you're getting burned. You can make yourself a cup of tea";
        }
    }
    var showInfo = function(text, tempC, tempF) {
        info.innerHTML =  "(Temperature " + tempC + " Celsius degrees = " + tempF + " Fahrenheit degrees) --> " + text + "<br><br>" + info.innerHTML;
    }

    outputC.innerHTML = "Push the button to convert temperature from degrees Celsius to Fahrenheit";
    outputF.innerHTML = "Push the button to convert temperature from degrees Fahrenheit to Celsius";
    info.innerHTML = "Wait for information";
    buttonC.addEventListener("click", function() {
        var takeNumber = validation(true);

        if (takeNumber != null) {
            var tempInF = convertCtoF(takeNumber);
            var answer = selectInfo(tempInF, "F");
            outputC.innerHTML = "<br>" + "Temperature " + takeNumber + " Celsius degrees = " + tempInF + " Fahrenheit degrees";
            showInfo(answer, takeNumber, tempInF);
        }
    });
    buttonF.addEventListener("click", function () {
        var takeNumber = validation(false);

        if (takeNumber != null) {
            var tempInC = convertFtoC(takeNumber);
            var answer = selectInfo(tempInC, "C");
            outputF.innerHTML = "<br>" + "Temperature " + takeNumber + " Fahrenheit degrees = " + tempInC + " Celsius degrees";
            showInfo(answer, tempInC, takeNumber);
        }
    });
})();





