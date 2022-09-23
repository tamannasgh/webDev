const firstCont = document.querySelector('div');
console.log(firstCont);
console.log(firstCont.innerHTML); //isme html aati h poori ki poori mtlb jitna likha h file mei utna

console.log(firstCont.innerText);  //srf wo jo web page pr dikh ra h jse ye haha hidden h to page mei nhi dikhra to isme bhi nhi dikhra

console.log(firstCont.textContent);  //ye bilkul innerHtml jsa hi h ki jo file mei h wo pr bss text code nhi


const body = document.body;
// body.style.backgroundColor = "#333";
// body.style.color = "white";


const heading = document.querySelector(".heading");
console.log(heading.getAttribute("class"));
heading.setAttribute("class", "dark");


console.log(heading.classList);
heading.classList.add("fancyText");
console.log(heading.classList);

console.log(heading.classList.contains("dark"));
heading.classList.remove("fancyText");
console.log(heading.classList);

heading.classList.replace("dark", "fancyText");



