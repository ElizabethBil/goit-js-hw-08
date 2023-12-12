const nameInput = document.querySelector("#name-input");
let nameOutput = document.querySelector("#name-output");

const nameReplace = () => {
    const inputValue = nameInput.value.trim();
    if (inputValue) {
        nameOutput.textContent = inputValue;
    } else {
        nameOutput.textContent = "Anonymous"
    }
    
};

nameInput.addEventListener("input", nameReplace)

