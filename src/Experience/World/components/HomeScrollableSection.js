import Experience from "../../Experience";
import utils from "../../Utils/utils";

export default class HomeScrollableSection {
    constructor(page) {
        this.experience = new Experience();
        this.container = document.querySelector('.horizontalScroll')
        this.target = this.container.querySelector('.homeCards-container');

        // 
        this.target.style.top = `${(window.innerHeight * 0.5) - (this.target.querySelector('.card').getBoundingClientRect().height * 0.4)}px`;
        this.target.style.left = `${(window.innerWidth * 0.5) - (this.target.querySelector('.card').getBoundingClientRect().width * 0.5)}px`;
        this.page = page;
        // 

        // 
        this.experience.lenis.on("scroll", (e) => {


        });





    }
    onScroll(e) {
        const scrollY = e.animatedScroll;
        this.sectionStart = this.container.getBoundingClientRect().top + scrollY
        this.sectionEnd = this.sectionStart + this.container.getBoundingClientRect().height - window.innerHeight;


        this.hasStarted = scrollY > this.sectionStart;

        this.hasEnded = scrollY > this.sectionEnd;
        // 
        const inScroll = this.container.getBoundingClientRect().top;
        const totalScroll = this.container.getBoundingClientRect().height - window.innerHeight + this.target.querySelector('.card').getBoundingClientRect().width;
        const cardWidth = this.target.querySelector('.card').getBoundingClientRect().width;
        const maxOffsetX = this.target.offsetWidth - cardWidth;
        const percent = (inScroll) * 100 / totalScroll;
        const pix = percent / 100 * this.target.getBoundingClientRect().width;


        if (!this.hasStarted) {
            this.target.style.transform = `translateY(${0}px) translateX(${0}%)`;
            this.page.tubeDisappear();

        } else if (!this.hasEnded) {
            this.page.tubeAppear();
            const offset = scrollY - this.sectionStart;
            this.target.style.transform = `translateY(${offset}px) translateX(${Math.max(-maxOffsetX, pix)}px)`;
        } else {
            this.page.tubeDisappear();

            this.target.style.transform = `translateY(${this.sectionEnd - this.sectionStart}px) translateX(${-maxOffsetX}px)`;

        }

    }

    resize() {
        const scrollY = this.experience.lenis.animatedScroll; // <- current scroll position
        const cardRect = this.target.querySelector('.card').getBoundingClientRect();

        this.target.style.top = `${(window.innerHeight * 0.5) - (cardRect.height * 0.4)}px`;
        this.target.style.left = `${(window.innerWidth * 0.5) - (cardRect.width * 0.5)}px`;
        this.sectionStart = this.container.getBoundingClientRect().top + scrollY
        this.sectionEnd = this.sectionStart + this.container.getBoundingClientRect().height - window.innerHeight;


        this.hasStarted = scrollY > this.sectionStart;

        this.hasEnded = scrollY > this.sectionEnd;
        // 
        const inScroll = this.container.getBoundingClientRect().top;
        const totalScroll = this.container.getBoundingClientRect().height - window.innerHeight + this.target.querySelector('.card').getBoundingClientRect().width;
        const cardWidth = this.target.querySelector('.card').getBoundingClientRect().width;
        const maxOffsetX = this.target.offsetWidth - cardWidth;
        const percent = (inScroll) * 100 / totalScroll;
        const pix = percent / 100 * this.target.getBoundingClientRect().width;


        if (!this.hasStarted) {
            this.target.style.transform = `translateY(${0}px) translateX(${0}%)`;
        } else if (!this.hasEnded) {
            const offset = scrollY - this.sectionStart;
            this.target.style.transform = `translateY(${offset}px) translateX(${Math.max(-maxOffsetX, pix)}px)`;
        } else {
            this.target.style.transform = `translateY(${this.sectionEnd - this.sectionStart}px) translateX(${-maxOffsetX}px)`;

        }
    }








}
