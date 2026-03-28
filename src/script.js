
import Experience from './Experience/Experience.js'

// Canvas
function isPhone() {
    return window.matchMedia("(max-width: 480px)").matches
}
const canvas = document.querySelector('canvas.webgl')

const experience = new Experience(canvas, isPhone())

