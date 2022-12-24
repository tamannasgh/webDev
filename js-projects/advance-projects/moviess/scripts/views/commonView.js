import mainView from "./mainView.js";

class CommonView extends mainView{

    page = document.querySelector(".page");
    pageTitle = this.page.querySelector(".page-title-text");
    cards = this.page.querySelector(".cards");

    renderPage(title, data = "", cardClickedId, pageNo){

        this.slider.style.display = "block";

        if(title === "Discover"){
            this.slider.style.minHeight = "400px";
            this.slider.style.height = "60vh";

        } else{
            this.slider.style.minHeight = "100px";
            this.slider.style.height = "15vh";
        }

        if(data.length === 0 && (Array.isArray(data)) ){
            this.cards.innerHTML = "Sorry, no results found!"
        } else{
            this.pageTitle.textContent = title;
            this.cards.innerHTML = "";
    
            // console.log(data);
    
            this.makeAndAddCards(data, this.cards);
        }
       
        super.renderPage(this.page, cardClickedId);

    }

}

export default new CommonView();