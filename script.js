const words = [
  "прокрастинація",
  "телефон",
  "комп'ютер",
  "шоколад",
  "програмування",
  "університет",
  "кава",
  "страшилка",
  "дракон",
  "планета",
];

const word = "матриця";

const tries = word.length;
let count = 0;

let remain = word.length - 2;

let answer = []; // що відкрито

answer[0] = word[0];
answer[word.length - 1] = word[word.length - 1];

for (let i = 1; i < word.length - 1; i++) {
  answer[i] = "_";
}
let guessButton = document.getElementById("guess");
let answElement = document.getElementById("answ");
let remainElement = document.getElementById("remain");
answElement.innerHTML = answer.join(" ");
remainElement.innerHTML = remain;

console.log(answer.join(" "));

function guessLetter() {
  const letter = prompt("Вгадай літеру");

  for (let i = 1; i < word.length - 1; i++) {
    if (letter === word[i]) {
      answer[i] = letter;
      remain--;
      count++;
    }
  }

  answElement.innerHTML = answer.join(" ");
  remainElement.innerHTML = remain;
}

guessButton.addEventListener("click", guessLetter);
