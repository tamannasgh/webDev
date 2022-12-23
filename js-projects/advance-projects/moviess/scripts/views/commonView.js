import mainView from "./mainView.js";

class CommonView extends mainView{

    page = document.querySelector(".page");
    pageTitle = this.page.querySelector(".page-title-text");
    cards = this.page.querySelector(".cards");

    renderPage(title, data = "", cardClickedId, pageNo){

        if(title === "Discover"){
            this.slider.style.display = "block";
        } else{
            this.slider.style.display = "none";
        }

        if(!(data === "") ){
            this.pageTitle.textContent = title;
            this.cards.innerHTML = "";
    
            // console.log(data);
    
            this.makeAndAddCards(data, this.cards);
        }
        
        if(data.length === 0 && (Array.isArray(data)) ){
            this.cards.innerHTML = "Sorry, no results found!"
        }
       
        super.renderPage(this.page, cardClickedId);

    }

}

export default new CommonView();