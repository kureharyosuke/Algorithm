/**
 * GuGuDan
 */
var number1 = Math.ceil(Math.random() * 9);
var number2 = Math.ceil(Math.random() * 9);
var body = document.body;
var gugudan = document.createElement("div");
gugudan.innerText = number1 + " * " + number2 + " = ";
body.append(gugudan);
var form = document.createElement("form");
document.body.append(form);
var input = document.createElement("input");
input.type = "number";
form.append(input);
var button = document.createElement("button");
button.innerText = "Button";
form.append(button);
var result = document.createElement("div");
result.textContent = "";
body.append(result);
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var answer = number1 * number2;
    var userAnswer = Number(input.value); // parseInt(input.value);
    if (userAnswer === answer) {
        result.textContent = "Good";
        number1 = Math.ceil(Math.random() * 9);
        number2 = Math.ceil(Math.random() * 9);
        gugudan.innerText = number1 + " * " + number2 + " = ";
        input.value = "";
        input.focus();
    }
    else {
        result.textContent = "No";
        input.value = "";
        input.focus();
    }
});
