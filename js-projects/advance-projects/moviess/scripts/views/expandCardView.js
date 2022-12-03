import { makeExpandCard } from "../impFunctions.js";
import mainView from "./mainView.js";

class ExpandCardView extends mainView{

    page = document.querySelector(".expand-card");
    backBtn = this.page.querySelector(".back");

    expandCardMain = this.page.querySelector(".expand-card-main");
    genres = this.page.querySelector(".genres");
    infoIntro = this.page.querySelector(".info-intro");
    casts = this.page.querySelector(".casts");

    clickedFromPage;
    cardClicked;

    renderPage(data, cardClicked, clickedFromPage){
        super.renderPage(this.page);

        makeExpandCard(data, this.expandCardMain, this.genres, this.infoIntro, this.casts);


        this.cardClicked = cardClicked;
        this.clickedFromPage = clickedFromPage;
        
    }

    addEventListeners(){
        this.expandCardMain.addEventListener("click", this.handleTrailer.bind(this) );
    }

    handleTrailer(e){
        if( !(e.target.classList.contains("watch-trailer") || e.target.classList.contains("fa-play") || e.target.classList.contains("cross")) ) return;

        this.expandCardMain.querySelector(".video").classList.toggle("active-video");

        if(e.target.classList.contains("cross")){
            this.stopVideo();                
        }
    }
}

export default new ExpandCardView();