import * as THREE from 'three'
import Experience from "../Experience";
import HeroTitle from './components/HeroTitle';
import utils from '../Utils/utils';
import CtaBuilder from './components/CtaBuilder';
import TitleBuilder from './components/TitleBuilder';
import TextBuilder from './components/TextBuilder';
import HomeScrollableSection from './components/HomeScrollableSection';
import CardsBuilder from './components/CardsBuilder';
import PartnersBannerBuilder from './components/PartnersBannerBuilder';
import gsap from "gsap";

export default class Home {

    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.ressources = this.experience.ressources
        this.time = this.experience.time
        this.camera = this.experience.camera.instance
        this.isPhone = this.experience.isPhone

        document.querySelector('.hero .videoContainer video').setAttribute('src', this.experience.router.main_data.data.home_hero_video.url)
        this.experience.router.main_data.data.home_aboutsection_text.forEach((t) => {
            document.querySelector('.hero-about-text').innerHTML += `<p>${t.text}</p>`
        })


        this.cardsBuilder = new CardsBuilder()
        this.scrollableSection = !this.isPhone ? new HomeScrollableSection(this) : null
        this.partnersBannerBuilder = new PartnersBannerBuilder()

        this.heroTitle = new HeroTitle()
        this.ctaBuilder = new CtaBuilder()
        this.titleBuilder = new TitleBuilder()
        this.textBuilder = new TextBuilder()
        this.scrollValue = 0
        this.scrollVelocity = 0
        this.tubeVisible = false
        this.video = document.querySelector('.hero .videoContainer video')
        this.isDestroyed = false

        this.setBanner()
        this.setThree()
        this.isPhone ? this.tubeAppear() : null

    }
    destroy() {
        this.isDestroyed = true;
        const renderer = this.experience.renderer.instance; 
        if (this.tube) {
            this.tube.traverse((child) => {
                if (child.isMesh) {
                    if (child.geometry) {
                        child.geometry.dispose();
                    }
                    if (child.material) {
                        if (Array.isArray(child.material)) {
                            child.material.forEach((m) => m.dispose());
                        } else {
                            child.material.dispose();
                        }
                    }
                }
            });
            this.scene.remove(this.tube);
            this.tube = null;
            this.tubesArray = [];
        }

        // Supprimer les bars
        if (this.bars) {
            this.bars.traverse((child) => {
                if (child.isMesh) {
                    if (child.geometry) child.geometry.dispose();
                    if (child.material) {
                        if (Array.isArray(child.material)) {
                            child.material.forEach((m) => m.dispose());
                        } else {
                            child.material.dispose();
                        }
                    }
                }
            });
            this.scene.remove(this.bars);
            this.bars = null;
            this.barsArray = [];
        }

        // Supprimer les sections et autres références
        if (this.scrollableSection && this.scrollableSection.destroy) {
            this.scrollableSection.destroy();
            this.scrollableSection = null;
        }

        if (this.heroTitle && this.heroTitle.destroy) {
            this.heroTitle.destroy();
            this.heroTitle = null;
        }

        if (this.ctaBuilder && this.ctaBuilder.destroy) {
            this.ctaBuilder.destroy();
            this.ctaBuilder = null;
        }

        if (this.titleBuilder && this.titleBuilder.destroy) {
            this.titleBuilder.destroy();
            this.titleBuilder = null;
        }

        if (this.textBuilder && this.textBuilder.destroy) {
            this.textBuilder.destroy();
            this.textBuilder = null;
        }

    }

    setThree() {
 
        this.bars = this.experience.ressources.items.bars.scene
        this.barsHtmlTarget = !this.isPhone ? document.querySelector('.hero-about-titleContainer') : document.querySelector('.hero-about');
        // add materials
        this.barsArray = []
        this.bars.traverse((child) => {
            if (child.isMesh) {
                child.material = this.experience.redMaterial.clone()
                this.barsArray.push(child)
            }
        })
        this.barsScale = 0.25;
        this.bars.scale.set(this.barsScale, this.barsScale, this.barsScale);
        this.scene.add(this.bars);
        // 
        this.positionBars()
        // 
        // tube
        this.tube = this.experience.ressources.items.tube.scene
        this.tubeHtmlTarget = !this.isPhone ? document.querySelector('.homeCards-container') : document.querySelector('.home-work');
        this.tubesArray = []

        this.tube.traverse((child) => {
            if (child.isMesh) {
                child.material = this.experience.redMaterial.clone()
                child.userData.initialPosition = child.position.clone();
                child.userData.random = 1 + (Math.random() * 2);
                this.tubesArray.push(child);
            }
        })
        this.tubeScale = !this.isPhone ? 0.3 : 0.65;
        this.tube.scale.set(this.tubeScale, this.tubeScale, !this.isPhone ? this.tubeScale : 0.1);
        this.scene.add(this.tube);
        this.tubesArray.forEach((t) => {
            t.material.uniforms.u_alpha.value = 0
            t.scale.y = 0

        });

        this.positionTube()

    }
    tubeAppear() {

        if (!this.tubeVisible) {
            this.tubeVisible = true;
            this.tubesArray.forEach((child, i) => {
                gsap.to(child.material.uniforms.u_alpha,
                    {
                        value: 1, duration: 0.5, ease: "power3.inOut", delay: i * 0.02
                    })
                gsap.to(child.scale,
                    {
                        y: 0.4, duration: 0.5, ease: "power3.inOut", delay: i * 0.02
                    })
            })
        }
    }
    tubeDisappear() {
        if (this.tubeVisible) {
            this.tubeVisible = false;
            this.tubesArray.forEach((child, i) => {
                gsap.to(child.material.uniforms.u_alpha,
                    {
                        value: 0, duration: 0.5, ease: "power3.inOut", delay: i * 0.02
                    })
                gsap.to(child.scale,
                    {
                        y: 0, duration: 0.5, ease: "power3.inOut", delay: i * 0.02
                    })
            })
        }
    }
    positionBars(e = null) {

        const wPos = utils.getWorldPositionFromElement(this.barsHtmlTarget, this.camera, 3);
        const offsetedPos = utils.remToWorldOffset(this.isPhone ? 0 : 500, this.isPhone ? 200 : -200, this.camera, 3);
        this.bars.position.set(wPos.x - offsetedPos.x, wPos.y - offsetedPos.y, wPos.z);

        if (e) {
            const scrollOffset = utils.remToWorldOffset(window.innerHeight - e.animatedScroll, 0, this.camera, 3)
            this.bars.position.set(wPos.x - offsetedPos.x - (scrollOffset.x * 0.1), wPos.y - offsetedPos.y, wPos.z);

        }
    }
    positionTube() {
        const wPos = utils.getWorldPositionFromElement(this.tubeHtmlTarget, this.camera, 3);
        const offsetedPos = utils.remToWorldOffset(0, !this.isPhone ? 20 : -200, this.camera, 3);
        this.tube.position.set(0, wPos.y - offsetedPos.y, wPos.z);
    }

    setBanner() {
        this.bannerElements = document.querySelectorAll('.partnerCard')
        this.bannerElements.forEach((el, index) => {
            const duration = 20
            const delay = duration / this.bannerElements.length * (this.bannerElements.length - (index)) * -1

            el.style.animationDelay = `${delay}s`
            el.style.animationDuration = `${duration}s`
            // 30s / 8 * (8 - 2) * -1
        })

    }

    onScroll(e) {
        if (this.isDestroyed) return;

        this.scrollValue = e.animatedScroll * 0.001
        this.scrollVelocity = e.velocity * 0.001
        if (this.scrollableSection) {
            this.scrollableSection.onScroll(e);
        }
        if (e.animatedScroll > window.innerHeight) {
            this.video.style.zIndex = '-1'
        } else {
            this.video.style.zIndex = '0'
        }

        this.positionBars(e)
        this.positionTube()


    }


    update() {
        if (this.isDestroyed) return;

        if (this.heroTitle) {
            this.heroTitle.update()
        }
        this.barsArray.forEach((child, i) => {
            child.rotation.z = this.experience.time.elapsed * 0.0001 + ((i * Math.PI * 2) / this.barsArray.length) + this.scrollValue;
        });
        this.tube.rotation.z = this.experience.time.elapsed * 0.0001 + this.scrollValue;
        const scrollMultiplier = 6;
        this.tube.traverse((child) => {
            if (child.isMesh) {
                const initialPos = child.userData.initialPosition;
                const distance = Math.abs(this.scrollVelocity * scrollMultiplier);
                const offset = initialPos.clone().sub(this.tube.position).normalize().multiplyScalar(distance);
                const targetPos = initialPos.clone().add(offset);
                child.position.lerp(targetPos, 0.1);
            }
        });


    }

    resize() {
        if (this.isDestroyed) return;

        this.scrollableSection ? this.scrollableSection.resize() : null;
        // resize bars
        this.positionBars();


    }

}