import * as THREE from 'three'
import Sizes from "./Utils/Sizes"
import Time from "./Utils/Time"
import Camera from './Camera.js'
import Renderer from './Renderer.js'
import World from './World/World.js'
import Ressources from './Utils/Ressources.js'
import Debug from './Utils/Debug.js'
import sources from './sources.js'
import Loader from './World/components/Loader.js'
import vertexShader from '../shaders/vertex.glsl'
import fragmentShader from '../shaders/fragment.glsl'

import Router from '../router/router.js'
import Lenis from 'lenis'
let instance = null



export default class Experience {
    constructor(canvas, isPhone) {
        if (instance) {
            return instance
        }
        instance = this
        window.experience = this

        // Options
        this.canvas = canvas
        this.canvas.style.opacity = 1
        this.isPhone = isPhone
        if ("scrollRestoration" in history) {
            history.scrollRestoration = "manual";
        }
        this.lenis = new Lenis({
            autoRaf: true,
            wheelMultiplier: 1.5,
        });
        document.querySelector('.noise-overlay').style.opacity = 0.3

        this.loader = new Loader()

        //Setup
        this.debug = new Debug()
        this.sizes = new Sizes()
        this.time = new Time()
        this.scene = new THREE.Scene()
        this.router = new Router()

        this.ressources = new Ressources(sources)
        this.camera = new Camera()
        this.renderer = new Renderer()
        this.pageOpen = false
        this.mouse = new THREE.Vector2(0, 0)

        this.ressources.on('ready', () => {
            this.loader.onTexturesLoaded();
            // 
            this.redMaterial = new THREE.ShaderMaterial({
                transparent: true,
                opacity: 1,
                vertexShader,
                fragmentShader,
                uniforms: {
                    u_alpha: new THREE.Uniform(1),
                    u_useTexture: new THREE.Uniform(false),
                    u_texture: new THREE.Uniform(null),

                }

            });

        })

        this.loader.on('loaded', () => {
            if (!this.world) {
                this.world = new World()
            }
        })


        //sizes resize Event
        this.sizes.on('resize', () => {
            this.resize()
        })
        //Time tick Event
        this.time.on('tick', () => {

            this.update()

        })
        // update mouse POS
        window.addEventListener('mousemove', (event) => {
            this.mouse.x = event.clientX
            this.mouse.y = event.clientY
        })
        this.lenis.on('scroll', (e) => {
            if (this.world) {
                this.world.onScroll(e)
            }
        })


    }


    resize() {

        this.camera.resize()
        this.renderer.resize()
        this.world?.resize()


    }
    update() {
        this.camera.update()
        this.world?.update()
        this.renderer.update()

    }


    destroy() {

        this.sizes.off('resize')
        this.time.off('tick')
        this.router.off('routing')

        this.scene.traverse((child) => {

            if (child.isMesh) {
                child.geometry.dispose()


                for (const key in child.material) {
                    const value = child.material[key]

                    if (value && typeof value.dispose === 'function') {
                        value.dispose()
                    }

                }



            }
        })

        this.camera.controls.dispose()
        this.renderer.instance.dispose()

        if (this.debug.active) {
            this.debug.ui.destroy()

        }
    }




}