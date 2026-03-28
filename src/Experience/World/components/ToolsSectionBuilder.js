import Experience from "../../Experience";

export default class ToolsSectionBuilder {
    constructor(page) {
        this.experience = new Experience();

        // Sélecteurs
        this.section = document.querySelector(".about-tools");
        this.dots = Array.from(this.section.querySelectorAll(".sliderDots .dot"));
        this.prevBtn = this.section.querySelector(".tools-prev");
        this.nextBtn = this.section.querySelector(".tools-next");
        this.page = page
        this.currentIndex = 0;
        this.prevIndex = 0;
        this.prevRotate = 0;
        this.nextRotate = 0;
        this.isPhone = this.experience.isPhone





        this.setHtml();
        this.init();
    }
    setHtml() {
        const container = document.querySelector('.tools-text')

        container.innerHTML = this.page.tools.map(tool => `<p>${tool.text}</p>`).join('');
        this.texts = Array.from(container.querySelectorAll('p'));
    }

    init() {
        // Initial state
        this.updateDisplay();
        this.page.showBalls(this.currentIndex)

        // Navigation buttons
        this.prevBtn.addEventListener("click", () => this.prevSlide());
        this.nextBtn.addEventListener("click", () => this.nextSlide());

        // Click sur les dots
        this.dots.forEach((dot, index) => {
            dot.addEventListener("click", () => {
                this.prevIndex = this.currentIndex;
                this.currentIndex = index;
                this.updateDisplay();
                this.page.showBalls(this.currentIndex);
            });
        });
    }

    prevSlide() {
        this.prevIndex = this.currentIndex;
        this.currentIndex--;
        if (this.currentIndex < 0) this.currentIndex = this.texts.length - 1;
        this.prevRotate += 45;
        this.prevBtn.style.transform = !this.isPhone ? `translate(calc(-50% - 400rem), -50%) rotate(${-this.prevRotate}deg)` : `translate(calc(-50% - 100rem), -50%) rotate(${-this.prevRotate}deg)`;
        this.prevBtn.querySelector('div').style.transform = `rotate(${this.prevRotate}deg)`;
        this.updateDisplay();
        this.page.showBalls(this.currentIndex)

    }

    nextSlide() {
        this.prevIndex = this.currentIndex;
        this.currentIndex++;
        if (this.currentIndex >= this.texts.length) this.currentIndex = 0;
        this.nextRotate += 45;
        this.nextBtn.style.transform = !this.isPhone ? `translate(calc(50% + 400rem), -50%) rotate(${this.nextRotate}deg)` : `translate(calc(50% + 100rem), -50%) rotate(${this.nextRotate}deg)`;
        this.nextBtn.querySelector('div').style.transform = `rotate(${-this.nextRotate}deg)`;
        this.updateDisplay();
        this.page.showBalls(this.currentIndex)

    }

    updateDisplay() {
        // Texte
        this.texts.forEach((p, index) => {
            p.style.opacity = index === this.currentIndex ? "1" : "0";
            p.style.transition = "opacity 0.5s ease";
        });

        // Dots
        this.dots.forEach((dot, index) => {
            if (index === this.currentIndex) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }
        });
    }

    update() { }
}
