const word = "прокрастинація";

let answer = []; // що відкрито

answer[0] = word[0];
answer[word.length - 1] = word[word.length - 1];

for (let i = 1; i < word.length - 1; i++) {
  answer[i] = "_";
}
let guess = document.getElementById("guess");
let answ = document.getElementById("answ");
answ.innerHTML = answer.join(" ");

console.log(answer.join(" "));

function guessLetter() {
  const letter = prompt("Вгадай літеру");

  for (let i = 1; i < word.length - 1; i++) {
    if (letter === word[i]) {
      answer[i] = letter;
    }
  }

  answ.innerHTML = answer.join(" ");
}


guess.addEventListener("click", guessLetter)