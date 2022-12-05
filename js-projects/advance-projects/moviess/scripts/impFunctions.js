import { imgUrl, bckdrpUrl } from "./config.js";

// this function will take the data of movie or tv from that we're getting from api and return the card made out of it
export function makeCard(data){
    
    const card = document.createElement("div");
    card.setAttribute("id", data.id);
    card.classList.add("card", "flexbox");

    // card.dataset.type = movieOrTvObj.title ? "movie" : "tv";
    card.dataset.type = data.media_type ? data.media_type : data.title ? "movie" : "tv";
    
    card.innerHTML = `

    ${data.poster_path || data.profile_path || data.backdrop_path ? `<img src="${imgUrl}/${data.poster_path || data.profile_path || data.backdrop_path}" alt="img"></img>` : "Sorry, Image is not Available!"}

    
    <div class="overlay flexbox">
        <p>${data.title ?? data.name}</p>
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

export function makeExpandCard(data, cardMain, genres, infoIntro, casts){
    console.log(data);

    cardMain.innerHTML = `
    <div class="main-content">
        <div class="name">${data.title ?? data.name}</div>
        <button class="btn watch-trailer"><i class="fa fa-play"></i>watch trailer</button>
    </div>

    <div class="video flexbox">
        ${data.videos.results.length > 0 ? `<iframe src="https://www.youtube.com/embed/${data.videos.results[0].key}" frame-border="0" width="100%" height="100%"></iframe>` : "Sorry, Trailer is not Available!"}
        <button class="btn cross">x</button>
    </div>
    
    `;
    cardMain.style.backgroundImage = `url("${bckdrpUrl}/${data.backdrop_path || data.poster_path}")`;


    genres.innerHTML = "";
    data.genres.forEach( genre => {
        const span = document.createElement("span");
        span.textContent = genre.name;
        genres.append(span);
    });


    infoIntro.innerHTML = `
    <div class="info">
        <p>Status : <span>${data.status}</span></p>
        <p>Duration : <span>${data.runtime ? `${data.runtime}min` : `${data.number_of_episodes} episodes` }</span></p>
        <p><a target="_blank" href="${data.homepage || `https://www.google.com/search?q=${data.title ?? data.name}`}">learn more <i class="fa fa-external-link"></i></a></p>
    </div>

    <div class="intro">
        <div class="tag-line">${data.tagline || data.title || data.name}</div>
        <div class="overview">${data.overview}</div> 
    </div>
    `;


    casts.innerHTML = "";
    data.credits.cast.forEach( c => {
        const card = makeCard(c);
        casts.append(card);
    });

}


