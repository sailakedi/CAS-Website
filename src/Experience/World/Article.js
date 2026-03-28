import * as THREE from 'three'
import Experience from "../Experience";
import TitleBuilder from './components/TitleBuilder';
import CtaBuilder from './components/CtaBuilder';
import TextBuilder from './components/TextBuilder';
export default class Article {

    constructor() {
        this.experience = new Experience()
        this.ctaBuilder = new CtaBuilder();
        this.titleBuilder = new TitleBuilder()
        this.textBuilder = new TextBuilder()
        this.data = this.experience.router.main_data
        this.isPhone = this.experience.isPhone

        if (this.data) {
            document.querySelector('.article-title').innerHTML = `${this.data.data.article_title[0].text}`;

            const descriptionContainer = document.querySelector('.description')
            this.data.data.article_description.forEach((p) => {
                descriptionContainer.innerHTML += `<p>${p.text}</p>`;
            })
            const tableauContainer = document.querySelector('.tableau')
            this.data.data.article_label_list.forEach((el) => {
                tableauContainer.innerHTML += `
                                                <div class="tableau-item">
                                                    <div class="article-cross"></div>
                                                    <dt>${el.label_item[0].text}</dt>
                                                    <div class="article-line"></div>
                                                    <dd>${el.label_value[0].text}</dd>
                                                    <div class="article-cross"></div>
                                                </div>
                                            `;
            })

            const medias = this.data.data.article_gallery
            const galleryContainer = document.querySelector('.article-content')

            medias.forEach((media) => {
                const type = media.link_to_media.kind
                const display = media.article_media_size
                // 
                let className = 'full'
                if (display === 'full') {
                    className = 'full'
                } else if (display === 'left') {
                    className = 'verticalLeft'
                } else if (display === 'right') {
                    className = 'verticalRight'
                } else if (display === 'center') {
                    className = 'verticalCenter'
                }
                // 
                const template =
                    type === 'file' ? `
                <div class="${className}">
                    <video
                    src="${media.link_to_media.url}"
                    muted
                    autoplay
                    loop
                    ></video>
                </div>
                ` :
                        `
                    <div class="${className}">
                        <img src="${media.link_to_media.url}" alt="" />
                    </div>
                `
                galleryContainer.innerHTML += template;

            })
            if (this.isPhone) {
                console.log(document.querySelector('.article-data .description').getBoundingClientRect().height);

                document.querySelector('.article-top').style.height = `${window.innerHeight + document.querySelector('.article-data .description').getBoundingClientRect().height + 20}px`;
            }
        }




    }

    update() {

    }

}