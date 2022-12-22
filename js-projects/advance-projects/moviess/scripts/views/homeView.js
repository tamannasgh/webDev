import mainView from "./mainView.js";
import { getSliderImages } from "../impFunctions.js";

class HomeView extends mainView{
    
    page = document.querySelector(".home");
    slider = this.page.querySelector(".slider");
    cards = this.page.querySelector(".movies-card");

    sliderImages = [];


    renderPage(data = "", cardClickedId){

        // console.log(data);

        if(data !== ""){
            this.sliderImages = getSliderImages(data);

            // console.log("slider iamges", this.sliderImages)
    
            this.handleSlider();
    
            this.makeAndAddCards(data, this.cards);
    
        }

        super.renderPage(this.page, cardClickedId);

    }

    handleSlider(imgNum = 0){

        let i = imgNum >= this.sliderImages.length ? 0 : imgNum;

        this.slider.style.backgroundImage = `url(${this.sliderImages[i]})`;

        
        setTimeout(() => {
            // console.log("im changing bg", i);
            this.handleSlider(i+1);
        }, 4000);
    }


}

export default new HomeView();