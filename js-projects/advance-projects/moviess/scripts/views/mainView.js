import { makeCard } from "../impFunctions.js";


export default class MainView{
    
    navbar = document.querySelector("nav");
    expandBtn = document.querySelector(".expand-btn");
    navLinksDiv = document.querySelector(".nav-links-div");
    navLinks = document.querySelector(".nav-links");

    pageContents = document.querySelectorAll(".page-content");


    animateUsingClass(el, cls){
        setTimeout(() => {
            el.classList.toggle(cls);
        }, 10);
    }

    addEventListeners(){
        this.expandBtn.addEventListener("click", (e) => this.expandNavbar(e) );

        this.navLinksDiv.addEventListener("click", (e) => this.expandNavbar(e) );
    }

    expandNavbar(e){
        if( document.body.clientWidth >= 800 ) return;
        if(e.target.classList.contains("nav-links")) return;

        this.navLinksDiv.classList.toggle("active-nav-links-div");
        this.navLinks.classList.toggle("active-nav-links");

    }

    // page --------------------------------

    makeAndAddCards(data, dom){
        data.forEach( d => {
            const card = makeCard(d);
            this.addCard(card, dom );
        });
    }

    addCard(card, dom){
        dom.append(card);
    }

    renderPage(page){
        this.pageContents.forEach( page => {
            page.style.display = "none";
        });

        document.querySelector(page).style.display = "block";
    }

}