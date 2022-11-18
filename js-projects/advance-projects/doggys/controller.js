import { getImage } from "./model.js";
import image from "./view.js";

const btn = document.querySelector("button");


btn.addEventListener("click", function(e){
    image.handleImgLoading();
    getImage().then(function(imgSrc){
        image.showImage(imgSrc);
    });
});
