

import Experience from "../../Experience";
export default class CardsBuilder {
    constructor() {
        this.experience = new Experience();
        this.container = document.querySelector('.homeCards-container')
        this.experience.router.main_data.data.cards.forEach((item, index) => {
            const card = `
                        <div class="card isRed">
                            <img src="${item.card_image.url}" class="" />
                            <div class="card-content">
                            <div class="tl-cross"></div>
                            <div class="tr-cross"></div>
                            <div class="bl-cross"></div>
                            <h1 class="card-title">${item.card_title[0].text}</h1>
                            <a href="projects/${item.card_article_link.uid}" class="cta card-button">see more</a>
                            <div class="card-data">
                                <p>${item.card_infos[0].text}</p>
                                <div class="line"></div>
                            </div>
                            </div>
                        </div>
             `
            this.container.insertAdjacentHTML('beforeend', card)

        })
    }



}