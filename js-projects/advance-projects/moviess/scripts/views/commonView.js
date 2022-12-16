import mainView from "./mainView.js";

class CommonView extends mainView{

    page = document.querySelector(".other-pages");
    pageTitle = this.page.querySelector(".page-title-text");
    pageCardsDom = this.page.querySelector(".cards");

    renderPage(title, data = "", cardClickedId){

        if(!(data === "") ){
            this.pageTitle.textContent = title;
            this.pageCardsDom.innerHTML = "";
    
            // console.log(data);
    
            this.makeAndAddCards(data, this.pageCardsDom);
        }
        
        if(data.length === 0 && (Array.isArray(data)) ){
            this.pageCardsDom.innerHTML = "Sorry, no results found!"
        }
       
        super.renderPage(this.page, cardClickedId);

    }

}

export default new CommonView();