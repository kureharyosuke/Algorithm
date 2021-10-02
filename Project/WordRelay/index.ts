/**
 * Word Relay
 */

const body: HTMLElement = document.body;

const word: HTMLDivElement = document.createElement("div");
word.innerText = "apple";
document.body.append(word);

const form: HTMLFormElement = document.createElement("form");
body.append(form);

const input: HTMLInputElement = document.createElement("input");
form.append(input);

const button: HTMLButtonElement = document.createElement("button");
button.innerText = "Button";
form.append(button);

const result: HTMLDivElement = document.createElement("div");
result.innerText = "";
body.append(result);

form.addEventListener("submit", function CallBack(event: Event) {
  event.preventDefault();

  if (word.innerText[word.innerText.length - 1] === input.value[0]) {
    result.innerText = "Good!";

    word.innerText = input.value;

    input.value = "";
    input.focus();
  } else {
    result.innerText = "Bad!";

    input.value = "";
    input.focus();
  }
});
