import mainView from "./mainView.js";
import { getSliderImages, makeCard } from "../impFunctions.js";

class HomeView extends mainView{
    
    homeDom = document.querySelector(".home");
    slider = this.homeDom.querySelector(".slider");
    moviesSection = this.homeDom.querySelector(".movies-card");
    tvsSection = this.homeDom.querySelector(".tvs-card");

    sliderImages = [];


    renderPage(moviesData, tvsData){

        // console.log(moviesData, tvsData);

        this.sliderImages = getSliderImages(moviesData);

        // console.log("slider iamges", this.sliderImages)

        this.handleSlider();

        moviesData.forEach( d => {
            const card = makeCard(d);
            this.addCard(card, this.moviesSection );
        });

        tvsData.forEach( d => {
            const card = makeCard(d);
            this.addCard(card, this.tvsSection);
        });


    }

    handleSlider(imgNum = 0){

        let i = imgNum >= this.sliderImages.length ? 0 : imgNum;

        this.slider.style.backgroundImage = `url(${this.sliderImages[i]})`

        
        setTimeout(() => {
            this.handleSlider(i+1);
        }, 5000);
    }


}

export default new HomeView();