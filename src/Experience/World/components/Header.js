import * as THREE from 'three'
import Experience from '../../Experience'

export default class Header {

    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.ressources = this.experience.ressources
        this.time = this.experience.time
        this.instance = document.querySelector('.nav')


        this.links = this.instance.querySelectorAll('a')
        this.links.forEach((link) => {
            link.addEventListener('click', e => {
                e.preventDefault()
                this.experience.router.route(e)

            })
        })





    }

    update() {

    }

}