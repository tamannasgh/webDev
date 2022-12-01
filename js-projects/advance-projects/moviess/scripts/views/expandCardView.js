import { makeExpandCard } from "../impFunctions.js";
import mainView from "./mainView.js";

class ExpandCardView extends mainView{

    page = document.querySelector(".expand-card");
    backBtn = this.page.querySelector(".back");

    cardMain = this.page.querySelector(".expand-card-main");
    genres = this.page.querySelector(".genres");
    infoIntro = this.page.querySelector(".info-intro");
    casts = this.page.querySelector(".casts");

    clickedFromPage;
    cardClicked;

    renderPage(data, cardClicked, clickedFromPage, scrollTo){
        super.renderPage(this.page, scrollTo);

        makeExpandCard(data, this.cardMain, this.genres, this.infoIntro, this.casts);


        this.cardClicked = cardClicked;
        this.clickedFromPage = clickedFromPage;
        
    }

}

export default new ExpandCardView();