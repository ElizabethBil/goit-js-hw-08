function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const bodyColor = document.querySelector("body");
const colorName = document.querySelector(".color");
const btnColorChanger = document.querySelector(".change-color");


const handlerBtnClick = () => {
  bodyColor.style.backgroundColor = getRandomHexColor();
  
  colorName.textContent = getRandomHexColor();
}

btnColorChanger.addEventListener("click", handlerBtnClick)