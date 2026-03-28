import Experience from "../../Experience";
import utils from "../../Utils/utils";

export default class TitleBuilder {
    constructor() {
        this.experience = new Experience();
        this.instances = document.querySelectorAll('.title');
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
            threshold: 0.8 
        });

        this.instances.forEach((instance) => {
            utils.spanify(instance); 
            observer.observe(instance); 
        });
    }

    animate(instance) {
        const spans = instance.querySelectorAll('.heroTitle-wrapper span');

        spans.forEach((span, i) => {
            // état initial
            span.style.transition = 'none';
            span.style.transform = 'translateX(-100%)';

            // forcer reflow
            void span.offsetWidth;

            // animation en cascade
            span.style.transition = 'transform 1s var(--ease)';
            span.style.transform = 'translateX(0)';
        });
    }
}
