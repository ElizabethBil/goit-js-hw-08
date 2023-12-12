// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).

const allLiItems = document.querySelectorAll(".item");
console.log(allLiItems.length);



allLiItems.forEach( el => {
    const headings = el.querySelector("h2").textContent;
    const names = el.querySelectorAll("ul > li").length;
    console.log(`${headings} : ${names}`);
})


allLiItems.forEach( el => {
    const headings = el.querySelector("h2").textContent;
    const liInItem = el.querySelectorAll("ul > li");
    const liTextArray = Array.from(liInItem).map(item => item.textContent);
    console.log(`${headings} : ${liTextArray}`);
})




