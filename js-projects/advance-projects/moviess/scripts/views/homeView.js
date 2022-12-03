import mainView from "./mainView.js";
import { getSliderImages } from "../impFunctions.js";

class HomeView extends mainView{
    
    homeDom = document.querySelector(".home");
    slider = this.homeDom.querySelector(".slider");
    moviesSection = this.homeDom.querySelector(".movies-card");
    tvsSection = this.homeDom.querySelector(".tvs-card");

    sliderImages = [];


    renderPage(moviesData = "", tvsData = "", cardClickedId){

        // console.log(moviesData, tvsData);

        if( !(this.sliderImages.length > 0) ){
            this.sliderImages = getSliderImages(moviesData);

            // console.log("slider iamges", this.sliderImages)
    
            this.handleSlider();
    
            this.makeAndAddCards(moviesData, this.moviesSection);
    
            this.makeAndAddCards(tvsData, this.tvsSection);
        }

        super.renderPage(this.homeDom, cardClickedId);

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