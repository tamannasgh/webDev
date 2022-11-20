import mainView from "./mainView.js";
import { makeCard } from "../impFunctions.js";
import { discoverMovies, discoverTvs } from "../model.js";

class HomeView extends mainView{
    
    mainSection = document.querySelector("main");
    moviesSection = this.mainSection.querySelector(".movies-card");
    tvsSection = this.mainSection.querySelector(".tvs-card");


    renderPage(){

        discoverMovies().then( (data) => {

            console.log(data);

            for(let i=0 ; i < 12 ; i++){

                const card = makeCard(data[i]);
                this.addCard(card, this.moviesSection);
                
            }

        });

        discoverTvs().then( (data) => {

            console.log(data);

            for(let i=0 ; i< 12 ; i++){

                const card = makeCard(data[i]);
                this.addCard(card, this.tvsSection);

            }

        });


    }


}

export default new HomeView();