

import Experience from "../../Experience";
import EventEmitter from "../../Utils/EventEmitter";
import Angles from "./Angles";

export default class Loader extends EventEmitter {
    constructor() {

        super()

        this.experience = new Experience()
        this.instance = document.querySelector('.loader')
        this.top = this.instance.querySelector('.loader-top')
        this.bottom = this.instance.querySelector('.loader-bottom')
        this.isPhone = this.experience.isPhone
        // 

        // 
        // État des chargements
        this.domReady = false
        this.texturesReady = false
        this.dataReady = false

        this.minDuration = 3100
        // this.minDuration = 0
        this.startTime = Date.now()

        this.topLogo = this.instance.querySelector('.loader-topLogo')
        this.bottomLogo = this.instance.querySelector('.loader-bottomLogo')

        this.angles = new Angles()

        this.setLoading()
        this.waitForReady()




    }
    disable() {
        this.trigger('loaded')
        this.instance.style.display = 'none'
    }
    setLoading() {
        this.instance.style.transition = 'none'
        this.top.style.transition = 'none'
        this.bottom.style.transition = 'none'
        void this.instance.offsetWidth;

        this.top.style.height = this.isPhone ? '50vw' : '50%'
        this.bottom.style.height = this.isPhone ? '50vw' : '50%'

        this.topLogo.querySelector('img').style.transform = 'translateY(0%)'
        this.bottomLogo.querySelector('img').style.transform = 'translateY(0%)'
    }

    onDataLoaded() {
        this.dataReady = true
        this.checkReady()

    }

    onTexturesLoaded() {
        this.texturesReady = true
        this.checkReady()

    }

    waitForReady() {
        if (document.readyState === "complete") {
            this.domReady = true

            this.checkReady()
        } else {
            window.addEventListener("load", () => {
                this.domReady = true

                this.checkReady()
            })
        }

    }

    checkReady() {
        if (!this.experience.world && this.domReady && this.texturesReady && this.dataReady) {
            const elapsed = Date.now() - this.startTime
            const remaining = this.minDuration - elapsed
            if (remaining > 0) {
                setTimeout(() => {
                    this.trigger('loaded')
                    this.angles.disappear(this.angles.loader99)
                    this.angles.crossesAppear()
                    setTimeout(() => {
                        this.closeLoader()
                        this.angles.rotate()
                    }, 1000)
                }, remaining)
            } else {
                this.trigger('loaded')
                this.angles.disappear(this.angles.loader99)
                this.angles.crossesAppear()
                setTimeout(() => {
                    this.closeLoader()
                    this.angles.rotate()
                }, 1000)
            }
        }
    }


    closeLoader() {
        this.experience.lenis.scrollTo(0, { immediate: true });


        this.top.style.transition = 'transform 1s var(--ease) 0.5s'
        this.top.style.transform = 'translateY(-100%)'
        this.bottom.style.transition = 'transform 1s var(--ease) 0.5s'
        this.bottom.style.transform = 'translateY(100%)'
        // overlay
        this.instance.style.pointerEvents = 'none'
        this.instance.style.transition = 'none'
        this.instance.style.backdropFilter = 'brightness(0)'
        this.instance.offsetWidth
        this.instance.style.transition = 'backdrop-filter 1s var(--ease) 0.7s'
        this.instance.style.backdropFilter = 'brightness(1)'
        // logos & angles
        this.topLogo.style.transition = 'transform 1s var(--ease) 0.5s'
        this.bottomLogo.style.transition = 'transform 1s var(--ease) 0.5s'

        this.topLogo.style.transform = 'translate(-50%, 15vh)'
        this.bottomLogo.style.transform = 'translate(-50%, -15vh)'
        // 
        document.querySelector('.main').style.opacity = '1'
        document.querySelector('.footer').style.opacity = '1'

    }

    transition() {
        this.domReady = false
        this.dataReady = false

        // Réinitialisation des styles pour réouvrir le loader
        this.top.style.height = '0%'
        this.bottom.style.height = '0%'
        void this.top.offsetWidth; // trigger reflow

        this.top.style.transition = 'height 1s var(--ease)'
        this.bottom.style.transition = 'height 1s var(--ease)'
        this.top.style.transform = 'translateY(0%)'
        this.bottom.style.transform = 'translateY(0%)'
        this.top.style.height = '50%'
        this.bottom.style.height = '50%'
        // overlay
        this.topLogo.querySelector('img').style.transition = 'none'
        this.bottomLogo.querySelector('img').style.transition = 'none'
        this.topLogo.querySelector('img').style.transform = 'translateY(110%)'
        this.bottomLogo.querySelector('img').style.transform = 'translateY(-110%)'
        this.topLogo.style.transition = 'none'
        this.bottomLogo.style.transition = 'none'
        this.topLogo.style.transform = 'translate(-50%, 0)'
        this.bottomLogo.style.transform = 'translate(-50%, 0)'
        // 
        this.instance.style.pointerEvents = 'all'
        this.instance.style.transition = 'none'
        this.instance.style.backdropFilter = 'brightness(1)'
        this.instance.offsetWidth
        this.instance.style.transition = 'backdrop-filter 1s var(--ease)'
        this.instance.style.backdropFilter = 'brightness(0)'
        // 
        this.topLogo.querySelector('img').style.transition = 'transform 1s var(--ease) 0.5s'
        this.bottomLogo.querySelector('img').style.transition = 'transform 1s var(--ease) 0.5s'
        this.topLogo.querySelector('img').style.transform = 'translateY(0%)'
        this.bottomLogo.querySelector('img').style.transform = 'translateY(0%)'
        this.angles.crossesAppear()




        setTimeout(() => {
            // this.waitForReady()
            this.closeLoader()
            this.angles.rotate()

        }, 1500)

    }


}