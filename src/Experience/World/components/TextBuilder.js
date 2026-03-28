import Experience from "../../Experience";
import utils from "../../Utils/utils";

export default class TextBuilder {
    constructor() {
        this.experience = new Experience();
        this.instances = document.querySelectorAll('.text');

        this.build();
    }

    build() {
        const observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    this.animate(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: this.experience.isPhone ? 0.2 : 0.8
        });

        this.instances.forEach((instance) => {
            observer.observe(instance); // observer chaque titre
        });
    }
    animate(instance) {

        // état initial
        instance.style.transition = 'none';
        instance.style.top = '50rem';
        instance.style.opacity = '0';

        // forcer reflow
        void instance.offsetWidth;

        // animation en cascade
        instance.style.transition = ' 1s ease-in-out';
        instance.style.top = '0';
        instance.style.opacity = '1';
    }

}
