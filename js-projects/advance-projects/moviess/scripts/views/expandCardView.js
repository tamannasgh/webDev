import mainView from "./mainView.js";

class ExpandCardView extends mainView{

    page = document.querySelector(".expand-card");
    backBtn = this.page.querySelector(".back");
    clickedFromPage;
    cardClicked;

    renderPage(cardClicked, clickedFromPage, scrollTo){
        super.renderPage(this.page, scrollTo);

        this.cardClicked = cardClicked;
        this.clickedFromPage = clickedFromPage;

    }

    


}

export default new ExpandCardView();