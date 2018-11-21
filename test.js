var output = document.getElementById('greeter-output');

output.innerHTML = 'Click the button! I want to say hello!' + '<br><br>' + output.innerHTML;

var button = document.getElementById('greeter-button');

var name;

button.addEventListener('click', function(){
    name = window.prompt('What is your name?');
    if ((name == "null") || (name.length == 0)) {
        output.innerHTML = "Error!!! You must enter name";
    }
    else {
        output.innerHTML = 'Hello '+name+'!' + '<br><br>' + output.innerHTML;
    }
});
