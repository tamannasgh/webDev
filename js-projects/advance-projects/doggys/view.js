class ImageView{

    overlay = document.querySelector(".img-overlay");
    img = document.querySelector("img");


    showImage(imgSrc){
        this.img.setAttribute("src", imgSrc); 
        
        this.img.onload = ()=>this.handleImgLoading();
    }
    
    handleImgLoading(){
        this.overlay.classList.toggle("active-loading");
    }
}

export default new ImageView();