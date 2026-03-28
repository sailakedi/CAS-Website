

import Experience from "../../Experience";
import utils from "../../Utils/utils";

export default class Angles {
    constructor() {
        this.experience = new Experience();
        this.isPhone = this.experience.isPhone;


        this.angles = [
            document.querySelector('.loader-tl'),
            document.querySelector('.loader-tr'),
            document.querySelector('.loader-bl'),
            document.querySelector('.loader-br')
        ]
        this.crosses = [
            this.angles[0].querySelector('.loaderCross'),
            this.angles[1].querySelector('.loaderCross'),
            this.angles[2].querySelector('.loaderCross'),
            this.angles[3].querySelector('.loaderCross')
        ]
        this.loader33 = [
            this.angles[0].querySelector('.loader33'),
            this.angles[1].querySelector('.loader33'),
            this.angles[2].querySelector('.loader33'),
            this.angles[3].querySelector('.loader33')
        ]
        this.loader66 = [
            this.angles[0].querySelector('.loader66'),
            this.angles[1].querySelector('.loader66'),
            this.angles[2].querySelector('.loader66'),
            this.angles[3].querySelector('.loader66')
        ]
        this.loader99 = [
            this.angles[0].querySelector('.loader99'),
            this.angles[1].querySelector('.loader99'),
            this.angles[2].querySelector('.loader99'),
            this.angles[3].querySelector('.loader99')
        ]
        this.loaders = [this.loader33, this.loader66, this.loader99]
        this.steps = {
            0: "33",
            1: "66",
            2: "99",
        }

        this.loaders.forEach((loader) => {
            loader.forEach((l) => {
                utils.spanify(l)
                l.style.transform = `translate(0, 0)`
                l.querySelectorAll('span span').forEach((n) => {
                    n.style.transform = `translate(100%, 0)`
                })
            })
        })


        this.setNumbersAnimation()

        this.crosses.forEach((c) => { c.style.transform = 'translate(100%, 0)' })
        // angles

    }
    rotate() {

        this.angles.forEach((a) => {
            a.style.transition = 'none'
            a.style.transform = 'translate(0,0) rotate(0deg)' // état de base cohérent
        })
        void this.angles.offsetWidth // reflow pour forcer la prise en compte
        this.angles.forEach((a) => {
            a.style.transition = 'transform 1s var(--ease) 0.5s'
        })
        this.angles[0].style.transform = !this.isPhone ? 'translate(0, 50vh) rotate(-360deg) ' : 'translate(0, 50vw) rotate(-360deg)'
        this.angles[1].style.transform = !this.isPhone ? 'translate(0, 50vh) rotate(360deg) ' : 'translate(0, 50vw) rotate(360deg)'
        this.angles[2].style.transform = !this.isPhone ? 'translate(0, -50vh) rotate(-360deg) ' : 'translate(0, -50vw) rotate(360deg)'
        this.angles[3].style.transform = !this.isPhone ? 'translate(0, -50vh) rotate(360deg) ' : 'translate(0, -50vw) rotate(-360deg)'
    }
    appear(loader, delay = 0) {


        loader.forEach((n, i) => {

            // 
            const direction = i % 2 === 0

            const number = n.querySelectorAll('span span')
            number.forEach((n, i) => {
                n.style.transition = 'none'
                n.style.transform = `translate(${direction ? -100 : 100}%, 0)`
                void n.offsetWidth;
                n.style.transition = `transform 0.8s var(--ease) ${delay}s`
                n.style.transform = `translate(${direction ? -0 : 0}, 0)`
            })
            // 
        })
    }
    disappear(loader, delay = 0) {
        loader.forEach((n, i) => {
            // 
            const direction = i % 2 === 0
            const number = n.querySelectorAll('span span')
            number.forEach((n, i) => {
                n.style.transition = 'none'
                n.style.transform = `translate(${direction ? 0 : 0}%, 0)`
                void n.offsetWidth;
                n.style.transition = `transform 0.8s var(--ease) ${delay}s`
                n.style.transform = `translate(${direction ? 100 : -100}%, 0)`
            })
            // 
        })
    }
    crossesAppear() {

        this.angles.forEach((a) => {
            a.style.transition = 'none'
            a.style.transform = 'translate(0,0) rotate(0deg)' // état de base cohérent
        })
        void this.angles.offsetWidth // reflow pour forcer la prise en compte

        this.crosses.forEach((c, i) => {
            const direction = i % 2 === 0
            c.style.transition = 'none';
            c.style.transform = `translate(${direction ? -100 : 100}%, 0)`;
            void c.offsetWidth;
            c.style.transition = `transform 0.8s var(--ease) 0.5s`;
            c.style.transform = `translate(0, 0)`;
        })

    }
    setNumbersAnimation() {
        this.appear(this.loader33, 0.3);
        setTimeout(() => {
            this.disappear(this.loader33);
            this.appear(this.loader66, 0.3);
        }, 1100)
        setTimeout(() => {
            this.disappear(this.loader66);
            this.appear(this.loader99, 0.3);
        }, 2200)

    }


}