import * as THREE from 'three'
import Experience from "../Experience";
import utils from '../Utils/utils';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Article from './Article';
import Logo from './components/Logo';
import Burger from './components/Burger';
import Menu from './components/Menu';

export default class World {

    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.ressources = this.experience.ressources
        this.camera = this.experience.camera.instance
        this.time = this.experience.time
        this.isPhone = this.experience.isPhone


        this.logo = new Logo(document.querySelector('.logo'))
        this.burger = new Burger(document.querySelector('.burger'))
        this.menu = new Menu()



        this.page = null
        // ? uncomment to add loader
        document.querySelector('.main').innerHTML = this.experience.router.html;
        if (this.experience.router.path === '/') {
            this.page = new Home();
        } else if (this.experience.router.path === '/about') {
            this.page = new About();
        } else if (this.experience.router.path === '/projects') {
            this.page = new Projects();
        } else if (this.experience.router.path.startsWith('/projects/')) {
            this.page = new Article();
        }



        this.experience.router.on('routing', () => {

            this.experience.loader.transition()
            setTimeout(() => {
                if (this.experience.world.menu.isOpen) {
                    this.experience.world.burger.close();
                }
                if (this.page && this.page.destroy) {
                    this.page.destroy();
                }
                setTimeout(() => {
                    document.querySelector('.main').innerHTML = this.experience.router.html;
                    if (this.experience.router.path === '/') {
                        this.page = new Home();
                    } else if (this.experience.router.path === '/about') {
                        this.page = new About();
                    } else if (this.experience.router.path === '/projects') {
                        this.page = new Projects();
                    } else if (this.experience.router.path.startsWith('/projects/')) {
                        this.page = new Article();
                    }
                }, 500)



            }, 1000)


        })

        // this.page = new Page()





        this.setFooter()
        document.addEventListener("visibilitychange", () => {
            if (document.hidden) {
                this.positionFooter()
            } else {
                this.positionFooter()
            }
        });
        this.update()

    }
    setFooter() {
        this.footer = this.experience.ressources.items.footer.scene
        this.footerHtmlTarget = document.querySelector('.footer')
        // add materials
        this.footerScale = !this.isPhone ? 0.25 : 0.45;
        this.footer.scale.set(this.footerScale, this.footerScale, this.footerScale);
        this.footer.traverse((child) => {
            if (child.isMesh) {
                child.material = this.experience.redMaterial
            }
        })
        this.footer.rotation.z = this.isPhone ? Math.PI * 0.5 : 0;
        this.scene.add(this.footer);
        //
        this.positionFooter()
    }
    positionFooter() {
        const wPos = utils.getWorldPositionFromElement(this.footerHtmlTarget, this.camera, 3);
        const offsetedPos = utils.pixelsToWorldOffset(0, window.innerHeight * 0.5, this.camera, 3);
        this.footer.position.set(wPos.x - offsetedPos.x, wPos.y + offsetedPos.y, wPos.z);

    }

    // ?events
    onScroll(e) {
        if (this.page && this.page.onScroll) {
            this.page.onScroll(e);
        }
        this.positionFooter()

    }




    update() {
        if (this.page) {

            this.page.update();
        }
        // update footer rotation
        this.footer.rotation.x = !this.isPhone ? -this.experience.time.elapsed * 0.0001 : -0.1;
        if (this.isPhone) {
            this.footer.rotation.y = -this.experience.time.elapsed * 0.0001;

        }


    }
    resize() {
        if (this.page.resize) {
            this.page.resize();
        }
        this.positionFooter()

    }

}