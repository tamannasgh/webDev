document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    const cursor = document.querySelector(".cursor");
    const cursorInner = document.querySelector(".inner-cursor");
    cursor.style.top = `${y}px`
    cursor.style.left = `${x}px`

    setTimeout(()=>{
        cursorInner.style.top = `${y+20}px`
        cursorInner.style.left = `${x+20}px`
    }, 100);
});

const imagesDiv = document.querySelector(".images");
const hackBtn = document.querySelector(".hack");

hackBtn.addEventListener("click", (e) => {
    
    const img = imagesDiv.querySelector("img");

    imagesDiv.style.display = "flex";
        
    
    for(let i = 1 ; i < 8 ; i++){
        setTimeout(() => {

            
            img.setAttribute("src", `./b${i}.jpg`);
            img.classList.add("active-image");

            if(i === 7){
                img.remove();
                imagesDiv.children[0].children[0].textContent = "HACKED!!";
                imagesDiv.children[0].children[0].style.color = "red";
                setTimeout(adminLogin, 1000);
            }

            img.addEventListener("transitionend", (e) => {
                img.classList.remove("active-image");
            });
        

            
        }, 1000*i);
        
    }
});

const formDiv = document.querySelector(".login");
const form = formDiv.children[1];
const main = document.querySelector("main");

function adminLogin(){
    imagesDiv.remove();
    hackBtn.remove();
    formDiv.style.display = "block";

    setTimeout(() => {
        formDiv.classList.add("active-login");
    }, 0);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = form.children[0].value.toLowerCase();
    const password = form.children[1].value.toLowerCase();

    if(username === "admin" && password === "password"){
        form.remove();
        formDiv.children[0].textContent = "Check The Console Hacker!";
        console.log("HAPPIEST BIRTHDAY ICHU HACKER !!! (sorry yrr thodi der lg gyi)");
    } else{
        main.style.animation = "wrong 0.3s";

        main.addEventListener("animationend", (e) => {
            main.style.animation = "";
        });

        form.reset();
    }
})