/**
 * GuGuDan
 */

let number1: number = Math.ceil(Math.random() * 9);
let number2: number = Math.ceil(Math.random() * 9);

const body: HTMLElement = document.body;

const gugudan: HTMLDivElement = document.createElement("div");
gugudan.innerText = `${number1} * ${number2} = `;
body.append(gugudan);

const form: HTMLFormElement = document.createElement("form");
document.body.append(form);

const input: HTMLInputElement = document.createElement("input");
input.type = "number";
form.append(input);

const button: HTMLButtonElement = document.createElement("button");
button.innerText = "Button";
form.append(button);

const result: HTMLDivElement = document.createElement("div");
result.textContent = "";
body.append(result);

form.addEventListener("submit", (event: Event) => {
  event.preventDefault();
  const answer: number = number1 * number2;
  const userAnswer: number = Number(input.value); // parseInt(input.value);
  if (userAnswer === answer) {
    result.textContent = "Good";

    number1 = Math.ceil(Math.random() * 9);
    number2 = Math.ceil(Math.random() * 9);
    gugudan.innerText = `${number1} * ${number2} = `;

    input.value = "";
    input.focus();
  } else {
    result.textContent = "No";

    input.value = "";
    input.focus();
  }
});
