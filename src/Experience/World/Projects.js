import * as THREE from 'three'
import Experience from "../Experience";
import TitleBuilder from './components/TitleBuilder';
import CtaBuilder from './components/CtaBuilder';
import Project from './components/Project';

export default class Projects {

    constructor() {
        this.experience = new Experience()
        this.ctaBuilder = new CtaBuilder();
        this.titleBuilder = new TitleBuilder()
        this.toggle = false
        this.isPhone = this.experience.isPhone

        // ! utiliser getProject pour générer le html
        this.getProjects()
        this.setToggle()

        // 
        // 







    }
    async getProjects() {
        this.client = this.experience.router.client
        const articles = this.experience.router.data.results.filter(el => el.type === 'article')
        articles.forEach(article => {
            new Project(article);
        });


        const newLinks = document.querySelectorAll('.project-bottom a');
        newLinks.forEach((link) => {
            if (!link.dataset.listener) {
                link.dataset.listener = "true";
                link.addEventListener('click', e => {
                    e.preventDefault();
                    this.experience.router.route(e);
                });
            }
        });
        if (this.isPhone) {
            document.querySelectorAll('.project-pic').forEach(el => {
                el.querySelectorAll('.pic-section').forEach((section, i) => {
                    i !== 0 ? section.style.display = 'none' : section.style.display = 'block';
                });
            });
        }

    }

    setToggle() {
        this.projectsToggle = document.querySelector('.projects-toggle');
        this.projectsToggle.addEventListener('click', () => {
            this.toggle = !this.toggle;
            if (this.toggle) {
                document.querySelectorAll('.project-bottom').forEach(el => el.style.transform = !this.isPhone ? 'translateY(calc(-100% - 40rem))' : 'translateY(-60rem)');
                document.querySelectorAll('.project-pic').forEach(el => el.style.height = '0');
                document.querySelector('.projects-container').style.rowGap = !this.isPhone ? '0' : '100rem';
                this.projectsToggle.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
            } else {
                document.querySelectorAll('.project-bottom').forEach(el => el.style.transform = 'translateY(0)');
                document.querySelectorAll('.project-pic').forEach(el => el.style.height = !this.isPhone ? '320rem' : `${320 * 1.625}rem`);
                document.querySelector('.projects-container').style.rowGap = '200rem';
                this.projectsToggle.querySelectorAll('.dot').forEach(dot => dot.classList.add('active'));


            }
        });
    }

    update() {

    }

}