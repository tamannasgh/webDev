import mainView from "./mainView.js";

class CommonView extends mainView{

    page = document.querySelector(".other-pages");
    pageTitle = this.page.querySelector(".page-title-text");
    pageCardsDom = this.page.querySelector(".cards");

    renderPage(title, data){
        super.renderPage(".other-pages");
        
        this.pageTitle.textContent = title;
        this.pageCardsDom.innerHTML = "";

        // console.log(data);

        this.makeAndAddCards(data, this.pageCardsDom);
    }

}

export default new CommonView();