function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const input = document.querySelector("input");
const buttons = document.querySelectorAll("button");
const box = document.querySelector("#boxes");

const createBoxes = (amount) => {
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.style.width = 30 + 10 * i + "px";
    div.style.height = 30 + 10 * i + "px";
    div.style.backgroundColor = getRandomHexColor();
  
    box.append(div)
  }
};

input.addEventListener("input", createBoxes);

const btnAdd = (e) => {
  e.preventDefault();

  const quantityOfBoxes = input.value;
  // 10ткова система числення
  const quantityToNumbers = parseInt(quantityOfBoxes, 10);

if (quantityToNumbers > 0) {
  createBoxes(quantityToNumbers)
}
}

buttons[0].addEventListener("click", btnAdd);


const btnDestroy = (e) => {
  e.preventDefault();

  box.innerHTML = "";
  input.value = "";
};

buttons[1].addEventListener("click", btnDestroy);
