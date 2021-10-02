/**
 * Word Relay
 */
var bodyTS = document.body;
var wordTS = document.createElement("div");
wordTS.innerText = "apple";
document.body.append(wordTS);
var formTS = document.createElement("form");
bodyTS.append(formTS);
var inputTS = document.createElement("input");
formTS.append(inputTS);
var buttonTS = document.createElement("button");
buttonTS.innerText = "Button";
formTS.append(buttonTS);
var resultTS = document.createElement("div");
resultTS.innerText = "";
bodyTS.append(resultTS);
formTS.addEventListener("submit", function CallBack(event) {
    event.preventDefault();
    if (wordTS.innerText[wordTS.innerText.length - 1] === inputTS.value[0]) {
        resultTS.innerText = "Good!";
        wordTS.innerText = inputTS.value;
        inputTS.value = "";
        inputTS.focus();
    }
    else {
        resultTS.innerText = "Bad!";
        inputTS.value = "";
        inputTS.focus();
    }
});
