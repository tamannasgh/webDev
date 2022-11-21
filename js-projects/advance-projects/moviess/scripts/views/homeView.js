import mainView from "./mainView.js";
import { getSliderImages, makeCard } from "../impFunctions.js";
import { discoverMovies, discoverTvs } from "../model.js";

class HomeView extends mainView{
    
    homeDom = document.querySelector(".home");
    slider = this.homeDom.querySelector(".slider");
    moviesSection = this.homeDom.querySelector(".movies-card");
    tvsSection = this.homeDom.querySelector(".tvs-card");

    sliderImages = [];


    renderPage(){

        // this.pageTitle.textContent = "Discover Movies and Tvs";

        discoverMovies().then( (data) => {

            console.log(data);

            this.sliderImages = getSliderImages(data);

            console.log("slider iamges", this.sliderImages)

            data.forEach( d => {
                const card = makeCard(d);
                this.addCard(card, this.moviesSection );
            });

        }).then( () => {
            this.handleSlider();
        });


        discoverTvs().then( (data) => {

            console.log(data);

            data.forEach( d => {
                const card = makeCard(d);
                this.addCard(card, this.tvsSection);
            });

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