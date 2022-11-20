import { imgUrl } from "./config.js";


export function makeCard(movieOrTvObj){
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.id = movieOrTvObj.id;
    card.innerHTML = `

    <img src="${imgUrl}/${movieOrTvObj.poster_path}" alt="img">
    <div class="overlay flexbox">
        <p>${movieOrTvObj.title ? movieOrTvObj.title : movieOrTvObj.name}</p>
    </div>

    `;

    return card;

}
