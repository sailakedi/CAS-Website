import Experience from "../../Experience"
export default class Burger {
    constructor(container) {
        this.experience = new Experience()

        this.container = container
        this.width = 185

        this.boundings = this.container.getBoundingClientRect()
        // 
        this.container.style.width = `${this.width}rem`
        this.container.style.height = `${this.width * 1.2125}rem`
        // 
        this.unit = this.width / 9
        // top
        this.top = document.createElement("div")
        this.top.classList.add('burger-top-container')
        this.container.appendChild(this.top)

        this.top.style.width = '100%'
        this.top.style.height = `100%`
        // 
        this.isClickable = true
        this.isAnimating = false
        this.isOpen = false



        this.setBars()
        document.querySelectorAll('.burgerBar').forEach((el, i) => {
            void el.offsetWidth // Force reflow
            el.style.transition = `1s var(--ease)`
            el.style.height = `100%`


        })
        this.setMouseEvents()
    }

    setBars() {
        const topContainer = document.createElement('div')

        topContainer.style.width = '100%'
        topContainer.style.height = '100%'

        topContainer.classList.add('burger-bars-top-container')

        this.top.innerHTML = ''

        this.top.appendChild(topContainer)

        // Créer les bars et les ajouter aux containers
        for (let i = 0; i < 5; i++) {
            const div = document.createElement("div")
            // Styles de base
            div.style.transition = `0.5s var(--ease) ${i * 0.05}s`
            div.style.background = 'var(--white)'
            // Classes
            div.classList.add(`burger-t-b${i}`)
            div.classList.add(`burgerBar`)
            topContainer.appendChild(div)
        }

        // Créer les barres Top avec createbar
        // Top bars
        this.tb0 = document.querySelector('.burger-t-b0');
        this.tb1 = document.querySelector('.burger-t-b1');
        this.tb2 = document.querySelector('.burger-t-b2');
        this.tb3 = document.querySelector('.burger-t-b3');
        this.tb4 = document.querySelector('.burger-t-b4');

        this.createTopbar(this.tb0, this.unit, 0, 0, 0);
        this.createTopbar(this.tb1, this.unit, 0, 0, this.unit * 2);
        this.createTopbar(this.tb2, this.unit, 0, 0, this.unit * 4);
        this.createTopbar(this.tb3, this.unit, 0, 0, this.unit * 6);
        this.createTopbar(this.tb4, this.unit, 0, 0, this.unit * 8);

    }


    createTopbar(el, width, height, bottom, left) {
        el.style.width = `${width}rem`
        el.style.height = `0%`
        el.style.bottom = `50%`
        el.style.transform = `translateY(50%)`
        el.style.left = `${left}rem`
    }
    open() {
        // Pour les enlever plus tard
        this.isOpen = true
        this.experience.world.logo.close()

        this.container.style.transition = '1s ease-in-out'
        this.container.style.transform = `rotate(${180}deg)`
        document.querySelectorAll('.burgerBar').forEach((el, i) => {
            el.style.left = `${this.unit * 4}rem`
            el.style.transition = `0.5s var(--ease)`
            el.style.height = `100%`
            el.style.transition = `0.5s var(--ease) ${i * 0.05}s`
            el.style.transform = `translateY(50%) rotate(${360 / 5 * i}deg)`

        })
        this.experience.world.menu.open()
    }
    close() {
        this.isOpen = false
        this.experience.world.logo.open()

        this.container.style.transition = ''
        this.container.style.transform = `rotate(${0}deg)`

        document.querySelectorAll('.burgerBar').forEach((el, i) => {
            el.style.left = `${this.unit * i * 2}rem`
            el.style.transition = `0.5s var(--ease) ${i * 0.05}s`
            el.style.transform = `translateY(50%) rotate(0deg)`


        })
        this.experience.world.menu.close()


    }

    handleMouseEnter() {

        // container
        this.container.style.cursor = 'pointer'
        // 
        if (this.isOpen && !this.isAnimating) {
            document.querySelectorAll('.burgerBar').forEach((el, i) => {
                el.style.transition = `0.5s var(--ease) `
                el.style.transform = `translateY(50%) rotate(90deg)`
            })

        } else if (!this.isAnimating) {
            document.querySelectorAll('.burgerBar').forEach((el, i) => {
                el.style.transition = `0.5s var(--ease) `

                el.style.left = `${this.unit * 4}rem`
            })
        }




    }
    handleMouseLeave() {
        // container
        this.container.style.cursor = 'default'

        // 
        if (this.isOpen) {
            document.querySelectorAll('.burgerBar').forEach((el, i) => {
                el.style.transform = `translateY(50%) rotate(${360 / 5 * i}deg)`

            })

        } else {
            // this.tb0.style.height = `100%`
            // this.tb1.style.height = `100%`
            // this.tb2.style.height = `100%`
            // this.tb3.style.height = `100%`
            // this.tb4.style.height = `100%`
            document.querySelectorAll('.burgerBar').forEach((el, i) => {
                el.style.left = `${this.unit * i * 2}rem`

            })
        }




    }



    setMouseEvents() {
        this.handleMouseEnterBound = this.handleMouseEnter.bind(this)
        this.handleMouseLeaveBound = this.handleMouseLeave.bind(this)

        // Ajouter les listeners
        this.container.addEventListener('mouseenter', this.handleMouseEnterBound)
        this.container.addEventListener('mouseleave', this.handleMouseLeaveBound)
        this.container.addEventListener('mouseover', this.handleMouseEnterBound)
        this.container.addEventListener('mouseout', this.handleMouseLeaveBound)



        this.container.addEventListener('click', (e) => {
            if (!this.isAnimating) {
                this.isAnimating = true
                setTimeout(() => {
                    this.isAnimating = false
                }, 500)
            }

            if (this.isClickable) {
                this.isClickable = false


                if (!this.isOpen) {
                    // ouvrir le menu
                    this.open()
                    this.isOpen = true


                } else {
                    // fermer le menu
                    this.experience.world.logo.open()
                    this.close()
                    this.isOpen = false


                }

                setTimeout(() => {
                    this.isClickable = true
                }, 1000)

            }

        })

    }


}