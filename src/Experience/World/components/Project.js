import Experience from "../../Experience";

export default class Project {
    constructor(data) {
        this.experience = new Experience();
        this.container = document.querySelector('.projects-container');
        this.data = data;
        this.template = `
            <div class="projectRow hidden">
                <div class="project-top">
                    <div class="project-cross cross1"></div>
                    <div class="project-cross cross2"></div>
                    <div class="project-cross cross3"></div>
                    <div class="section">
                        <p class="project-infos">${this.data.data.article_title[0].text}</p>
                        <div class="project-line project-top-line"></div>
                    </div>
                    <div class="section">
                        <p class="project-infos">${this.data.data.article_label[0].text}</p>
                        <div class="project-line project-top-line"></div>
                    </div>
                    <div class="section"></div>
                </div>
                <div class="project-pic">
                    <div class="pic-section">
                        <div class="project-image-container isRed">
                            <img src="${this.data.data.article_main_thumbnail.url}" alt="" />
                        </div>
                    </div>
                    <div class="pic-section">
                        <div class="project-image-container isRed">
                            <img src="${this.data.data.article_second_thumbnail.url}" alt="" />
                        </div>
                    </div>
                    <div class="pic-section">
                        <div class="project-image-container isRed">
                            <img src="${this.data.data.article_third_thumbnail.url}" alt="" />
                        </div>
                    </div>
                </div>
                <div class="project-bottom">
                    <div class="project-cross cross4"></div>
                    <div class="section"></div>
                    <div class="section"></div>
                    <a href="projects/${this.data.uid}" class="section">
                        <div class="project-line project-bottom-line"></div>
                        <p class="project-infos">SEE DETAILS</p>
                    </a>
                </div>
            </div>
        `;

        // insertion
        this.container.insertAdjacentHTML('beforeend', this.template);

        // sélectionner le dernier projet ajouté
        const projectRow = this.container.querySelector('.projectRow:last-child');

        // observer l'élément
        this.observe(projectRow);
    }

    observe(element) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    obs.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2
        });

        observer.observe(element);
    }
}
