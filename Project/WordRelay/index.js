/**
 * Word Relay
 */
var body = document.body;
var word = document.createElement("div");
word.innerText = "apple";
document.body.append(word);
var form = document.createElement("form");
body.append(form);
var input = document.createElement("input");
form.append(input);
var button = document.createElement("button");
button.innerText = "Button";
form.append(button);
var result = document.createElement("div");
result.innerText = "";
body.append(result);
form.addEventListener("submit", function CallBack(event) {
    event.preventDefault();
    if (word.innerText[word.innerText.length - 1] === input.value[0]) {
        result.innerText = "Good!";
        word.innerText = input.value;
        input.value = "";
        input.focus();
    }
    else {
        result.innerText = "Bad!";
        input.value = "";
        input.focus();
    }
});
