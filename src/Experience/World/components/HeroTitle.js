

import Experience from "../../Experience";
import functionLib from "../../Utils/utils";

export default class HeroTitle {
    constructor() {
        this.experience = new Experience();
        this.results = [
            {
                top: 'de',
                bottom: 'sign',
            },
            {
                top: 'cr',
                bottom: 'eate',
            },
            {
                top: 'per',
                bottom: 'form',
            },
        ]
        this.count = 0

        this.setHtml()

        this.start()



    }
    start() {
        this.appear(this.count)

        setInterval(() => {
            this.disappear(this.count)
            this.count = (this.count + 1) % this.results.length;
            this.appear(this.count)

        }, 3000)

    }
    setHtml() {
        this.titleContainer = document.querySelector('.heroTitleContainer');
        this.results.forEach((res, i) => {
            this.titleContainer.innerHTML += `
                                        <div class="heroStrokedTitle stroked-title-${i}">
                                        <h1 class="heroTitle">${res.top}</h1>
                                        <h1 class="heroTitle">${res.bottom}</h1>
                                        </div>
                                        <div class="heroPlainTitle plain-title-${i}">
                                        <h1 class="heroTitle">${res.top}</h1>
                                        <h1 class="heroTitle">${res.bottom}</h1>
                                        </div>
            `

        })
        this.titles = Array.from(this.titleContainer.querySelectorAll('div h1'));
        this.titles.forEach((title) => {
            functionLib.spanify(title);
        });
    }
    appear(i) {
        const filtered = Array.from(this.titleContainer.querySelectorAll('div'))
            .filter(title =>
                title.classList.contains(`stroked-title-${i}`) ||
                title.classList.contains(`plain-title-${i}`)
            );


        filtered.forEach(el => {
            const spans = el.querySelectorAll('span span');
            const wrapper = el.querySelectorAll('span');
            wrapper.forEach((span, i) => {
                setTimeout(() => {
                    span.style.zIndex = '1';
                }, 1000);

            })
            spans.forEach((span, i) => {
                span.style.transition = ''
                span.style.transform = 'translate(-100%, 0)'
                void span.offsetWidth;
                span.style.transition = `transform 1s var(--ease) 0.6s`;
                span.style.transform = 'translate(0, 0)';
                span.style.zIndex = '1';


            });
        });

    }
    disappear(i) {
        const filtered = Array.from(this.titleContainer.querySelectorAll('div'))
            .filter(title =>
                title.classList.contains(`stroked-title-${i}`) ||
                title.classList.contains(`plain-title-${i}`)
            );


        filtered.forEach(el => {
            const spans = el.querySelectorAll('span span');
            const wrapper = el.querySelectorAll('span');
            wrapper.forEach((span, i) => {
                setTimeout(() => {
                    span.style.zIndex = '0';
                }, 1000);


            })
            spans.forEach((span, i) => {
                span.style.transition = ''
                span.style.transform = 'translate(0, 0)'
                void span.offsetWidth;
                span.style.transition = `transform 1s var(--ease) 0.5s`;
                span.style.transform = 'translate(100%, 0)';
                setTimeout(() => {
                    span.style.zIndex = '0';

                }, 1000)
            });
        });

    }


    update() {



    }
}