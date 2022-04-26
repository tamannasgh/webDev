const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbar = document.getElementsByClassName("navbar-items")[0];

toggleButton.addEventListener("click", ()=>{
    navbar.classList.toggle("active")
})