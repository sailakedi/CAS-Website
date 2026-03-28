import * as THREE from 'three'
import Experience from './Experience.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'



export default class Camera {


    constructor() {
        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.canvas = this.experience.canvas
        this.animationDuration = 1000
        this.setInstance()


    }

    setInstance() {
        const aspect = this.sizes.width / this.sizes.height;
        const hFOV = 35;
        const vFOV = 2 * Math.atan(Math.tan(hFOV * Math.PI / 180 / 2) / aspect) * 180 / Math.PI;
        // 
        this.instance = new THREE.PerspectiveCamera(
            vFOV,
            this.sizes.width /
            this.sizes.height,
            0.1,
            100
        )


        this.instance.position.set(0, 0, 3)

        this.scene.add(this.instance)


    }



    setOrbitControls() {
        this.controls = new OrbitControls(this.instance, this.canvas)
        this.controls.enableDamping = true
    }
    resize() {
        const aspect = this.sizes.width / this.sizes.height;
        const hFOV = 35;
        const vFOV = 2 * Math.atan(Math.tan(hFOV * Math.PI / 180 / 2) / aspect) * 180 / Math.PI;
        this.instance.fov = vFOV;
        this.instance.aspect = this.sizes.width / this.sizes.height
        this.instance.updateProjectionMatrix()
    }
    update() {

    }




}