function changeBg(){
    const body = document.body;
    const randomColor = getRandomColor();
    body.style.backgroundColor = randomColor;
}

function getRandomColor(){
    const red = Math.floor( Math.random() * 126 );
    const green = Math.floor( Math.random() * 126 );
    const blue = Math.floor( Math.random() * 126 );
    const color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}

const intervalId = setInterval(changeBg, 1000);

const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
    clearTimeout(intervalId);
    const p = document.querySelector(".text");   
    p.style.display = "block";
    p.textContent = document.body.style.backgroundColor;

});

changeBg();