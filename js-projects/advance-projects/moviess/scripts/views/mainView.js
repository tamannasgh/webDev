export default class MainView{
    
    navbar = document.querySelector("nav");
    expandBtn = document.querySelector(".expand-btn");
    navLinksDiv = document.querySelector(".nav-links-div");
    navLinks = document.querySelector(".nav-links");

    animateUsingClass(el, cls){
        setTimeout(() => {
            el.classList.toggle(cls);
        }, 10);
    }

    addEventListeners(){
        this.expandBtn.addEventListener("click", (e) => this.expandNavbar() );

        this.navLinksDiv.addEventListener("click", (e) => this.expandNavbar() );
    }

    expandNavbar(){
        if( document.body.clientWidth >= 800 ) return;

        this.animateUsingClass(this.navLinksDiv, "active-nav-links-div");
        this.animateUsingClass(this.navLinks, "active-nav-links");
    }



}