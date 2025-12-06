const word = "прокрастинація";

let answer = []; // що відкрито

answer[0] = word[0];
answer[word.length - 1] = word[word.length - 1];

for (let i = 1; i < word.length - 1; i++) {
  answer[i] = "_";
}

let answ = document.getElementById("answ");
answ.innerHTML = answer.join(" ");

console.log(answer.join(" "));
