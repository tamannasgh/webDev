import { imgUrl, bckdrpUrl } from "./config.js";

// this function will take the data of movie or tv from that we're getting from api and return the card made out of it
export function makeCard(movieOrTvObj){
    
    const card = document.createElement("div");
    card.setAttribute("id", movieOrTvObj.id);
    card.classList.add("card");
    card.dataset.id = movieOrTvObj.id;

    // card.dataset.type = movieOrTvObj.title ? "movie" : "tv";
    card.dataset.type = movieOrTvObj.media_type ? movieOrTvObj.media_type : movieOrTvObj.title ? "movie" : "tv";
    
    card.innerHTML = `

    <img src="${imgUrl}/${movieOrTvObj.poster_path ?? movieOrTvObj.profile_path}" alt="img">
    <div class="overlay flexbox">
        <p>${movieOrTvObj.title ? movieOrTvObj.title : movieOrTvObj.name}</p>
    </div>

    `;

    return card;

}

export function getSliderImages(data){
    const imgs = [];
    
    data.forEach( d => {
       imgs.push(`${bckdrpUrl}/${d.backdrop_path}`); 
    });

    return imgs;
}
