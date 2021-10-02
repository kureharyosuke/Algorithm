/**
 * Word Relay
 */

const bodyTS: HTMLElement = document.body;

const wordTS: HTMLDivElement = document.createElement("div");
wordTS.innerText = "apple";
document.body.append(wordTS);

const formTS: HTMLFormElement = document.createElement("form");
bodyTS.append(formTS);

const inputTS: HTMLInputElement = document.createElement("input");
formTS.append(inputTS);

const buttonTS: HTMLButtonElement = document.createElement("button");
buttonTS.innerText = "Button";
formTS.append(buttonTS);

const resultTS: HTMLDivElement = document.createElement("div");
resultTS.innerText = "";
bodyTS.append(resultTS);

formTS.addEventListener("submit", function CallBack(event: Event) {
  event.preventDefault();

  if (wordTS.innerText[wordTS.innerText.length - 1] === inputTS.value[0]) {
    resultTS.innerText = "Good!";

    wordTS.innerText = inputTS.value;

    inputTS.value = "";
    inputTS.focus();
  } else {
    resultTS.innerText = "Bad!";

    inputTS.value = "";
    inputTS.focus();
  }
});
