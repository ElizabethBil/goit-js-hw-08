const logForm = document.querySelector(".login-form");


const obj = {};

logForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputs = document.querySelectorAll("input");
    if (Array.from(inputs).some(input => input.value.trim() === "")) {
        alert('All form fields must be filled in')
        return
    }
 
    const data = new FormData(e.target);
    data.forEach((value, key) => {
        console.log(`${key} : ${value}`);

        obj[key] = value;
    })
    console.log(obj);

    e.target.reset();
})
