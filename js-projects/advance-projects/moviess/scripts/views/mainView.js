import { makeCard } from "../impFunctions.js";

export default class MainView{
    
    navbar = document.querySelector("nav");
    expandBtn = document.querySelector(".expand-btn");
    navLinksDiv = document.querySelector(".nav-links-div");
    navLinks = document.querySelector(".nav-links");
    expandCardMain = document.querySelector(".expand-card-main");


    pageContents = document.querySelectorAll(".page-content");


    animateUsingClass(el, cls){
        setTimeout(() => {
            el.classList.toggle(cls);
        }, 0);
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

    stopVideo(){
        const iframe = this.expandCardMain.querySelector(".video").querySelector("iframe");
        const video = this.expandCardMain.querySelector(".video").querySelector("video");
        if ( iframe) {
            const iframeSrc = iframe.src;
            iframe.src = iframeSrc; 
        }
        if ( video) {
            video.pause();
        }
    }

    renderPage(page, cardClickedId){
        this.pageContents.forEach( page => {
            page.classList.remove("active-page");
        });


        this.animateUsingClass(page, "active-page");
        this.stopVideo();

        if(cardClickedId){
            const cardClicked = document.getElementById(cardClickedId);
            console.log(cardClickedId, cardClicked.getBoundingClientRect() );
        } else{
            window.scrollTo(0, 0);
        }
    }

}