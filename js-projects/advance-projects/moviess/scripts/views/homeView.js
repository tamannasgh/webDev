import mainView from "./mainView.js";
import commonView from "./commonView.js";
import { getSliderImages } from "../impFunctions.js";

class HomeView extends mainView{
    
    sliderImages = [];


    renderPage(title, data = "", cardClickedId, pageNo){

        // console.log(data);

        if(this.sliderImages.length === 0){
            
            this.sliderImages = getSliderImages(data);    
            this.handleSlider();
    
        }

        commonView.renderPage(title, data, cardClickedId, pageNo);

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