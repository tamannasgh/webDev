export default class MainView{
    
    navbar = document.querySelector("nav");
    expandBtn = document.querySelector(".expand-btn");
    navLinksDiv = document.querySelector(".nav-links-div");
    navLinks = document.querySelector(".nav-links");

    pageTitle = document.querySelector(".page-title");



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

        this.navLinksDiv.classList.toggle("active-nav-links-div");
        this.navLinks.classList.toggle("active-nav-links");

    }

    // page --------------------------------


    addCard(card, dom){
        dom.append(card);
    }

}