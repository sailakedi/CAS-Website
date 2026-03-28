import Experience from "../../Experience";

export default class CtaBuilder {
    static experience = null;

    constructor() {

        this.experience = new Experience();

        // récupérer toutes les CTA
        this.instances = document.querySelectorAll('.cta');
        this.listeners = [];

        this.build();
    }

    build() {
        this.instances.forEach((instance) => {
            if (instance._ctaListeners) {
                const { mouseOverHandler, mouseOutHandler, clickHandler } = instance._ctaListeners;
                instance.removeEventListener('mouseenter', mouseOverHandler);
                instance.removeEventListener('mouseleave', mouseOutHandler);
                instance.removeEventListener('click', clickHandler);
            }

            if (!instance.classList.contains('cta-built')) {
                const content = instance.innerHTML;
                instance.innerHTML = `
                <div class="button-textContainer">
                    <div class="main">${content}</div>
                    <div class="secondary">
                        <span><span><p>${content}</p></span></span>
                        <span><span><p>${content}</p></span></span>
                        <span><span><p>${content}</p></span></span>
                        <span><span><p>${content}</p></span></span>
                    </div>
                </div>
            `;
                instance.classList.add('cta-built');
            }

            // créer les handlers
            const mouseOverHandler = (e) => this.handleMouseOver(e);
            const mouseOutHandler = (e) => this.handleMouseOut(e);
            const clickHandler = (e) => {
                const spans = e.currentTarget.querySelectorAll('.secondary span span');
                spans.forEach(span => span.style.transform = 'translate(0, 100%)');

                const content = e.currentTarget.querySelector('.main').textContent;

                if (content.toLowerCase().includes('get')) {
                    window.open('https://daultlafon.gumroad.com/l/mgpgop', '_blank');
                    return;
                } else if (content.toLowerCase().includes('instagram')) {
                    window.open('https://www.instagram.com/dault.lafon/', '_blank');

                } else if (content.toLowerCase().includes('contact')) {
                    window.open('mailto:youre-email@company.com', '_blank');

                }

                e.preventDefault();
                this.experience.router.route(e);
            };

            // attacher les listeners
            instance.addEventListener('mouseenter', mouseOverHandler);
            instance.addEventListener('mouseleave', mouseOutHandler);
            instance.addEventListener('click', clickHandler);

            // stocker sur l'élément pour pouvoir les supprimer lors du prochain build
            instance._ctaListeners = { mouseOverHandler, mouseOutHandler, clickHandler };
        });
    }

    removeListeners() {
        this.listeners.forEach(({ instance, mouseOverHandler, mouseOutHandler, clickHandler }) => {
            instance.removeEventListener('mouseover', mouseOverHandler);
            instance.removeEventListener('mouseout', mouseOutHandler);
            instance.removeEventListener('click', clickHandler);
        });
        this.listeners = [];
    }

    handleMouseOver(event) {
        const spans = event.currentTarget.querySelectorAll('.secondary span span');
        spans.forEach((span, i) => {
            span.style.transform = 'translate(0, 0)';
            span.style.transitionDelay = `${i * 0.05}s`;
        });

    }

    handleMouseOut(event) {
        const spans = event.currentTarget.querySelectorAll('.secondary span span');
        const len = spans.length;
        spans.forEach((span, i) => {
            span.style.transitionDelay = `${(len - 1 - i) * 0.05}s`;
            span.style.transform = 'translate(0, -100%)';
        });
    }
}
