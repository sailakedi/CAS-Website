import Experience from "../../Experience"

export default class Logo {
    constructor(container) {
        this.experience = new Experience()
        this.container = container
        this.width = 185
        // this.width = 500

        this.boundings = this.container.getBoundingClientRect()
        // 
        this.container.style.width = `${this.width}rem`
        this.container.style.height = `${this.width * 1.2125}rem`
        // 
        this.unit = this.width / 9
        // top
        this.top = document.createElement("div")
        this.top.classList.add('logo-top-container')
        this.bottom = document.createElement("div")
        this.bottom.classList.add('logo-bottom-container')
        this.container.appendChild(this.top)
        this.container.appendChild(this.bottom)

        this.top.style.width = '100%'
        this.top.style.height = `${(this.width * 1.2125 / 2) - (this.unit * 0.5)}rem`

        this.bottom.style.width = '100%'
        this.bottom.style.height = `${(this.width * 1.2125 / 2) - (this.unit * 0.5)}rem`

        this.setBars()
        this.setMouseEvents()
        this.open()

    }

    setBars() {
        // Créer les containers pour top et bottom
        this.topContainer = document.createElement('div')
        this.bottomContainer = document.createElement('div')

        this.topContainer.style.width = '100%'
        this.topContainer.style.height = '100%'
        this.bottomContainer.style.width = '100%'
        this.bottomContainer.style.height = '100%'

        this.topContainer.classList.add('bars-top-container')
        this.bottomContainer.classList.add('bars-bottom-container')

        // Vider les containers existants et y ajouter le nouveau container
        this.top.innerHTML = ''
        this.bottom.innerHTML = ''

        this.top.appendChild(this.topContainer)
        this.bottom.appendChild(this.bottomContainer)

        // Créer les bars et les ajouter aux containers
        for (let i = 1; i <= 6; i++) {
            const div = document.createElement("div")
            const div2 = document.createElement("div")
            // Styles de base
            div.style.transition = '0.5s var(--ease)'
            div.style.background = 'var(--white)'

            div2.style.transition = '0.5s var(--ease)'
            div2.style.background = 'var(--white)'

            // Classes
            div.classList.add(`t-b${i}`)
            div2.classList.add(`b-b${i}`)

            this.topContainer.appendChild(div)
            this.bottomContainer.appendChild(div2)
        }

        // Créer les barres Top avec createbar
        // Top bars
        this.tb1 = document.querySelector('.t-b1');
        this.tb2 = document.querySelector('.t-b2');
        this.tb3 = document.querySelector('.t-b3');
        this.tb4 = document.querySelector('.t-b4');
        this.tb5 = document.querySelector('.t-b5');
        this.tb6 = document.querySelector('.t-b6');

        this.createTopbar(this.tb1, this.unit, this.unit * 5, 0, 0);
        this.createTopbar(this.tb2, this.unit, this.unit * 3, 0, this.unit * 2);
        this.createTopbar(this.tb3, this.unit, this.unit * 4, 0, this.unit * 4);
        this.createTopbar(this.tb4, this.unit, this.unit * 3, 0, this.unit * 6);
        this.createTopbar(this.tb5, this.unit, this.unit * 5, 0, this.unit * 8);
        this.createTopbar(this.tb6, this.unit * 5, this.unit, this.unit * 4, this.unit * 2);

        // Bottom bars
        this.bb1 = document.querySelector('.b-b1');
        this.bb2 = document.querySelector('.b-b2');
        this.bb3 = document.querySelector('.b-b3');
        this.bb4 = document.querySelector('.b-b4');
        this.bb5 = document.querySelector('.b-b5');
        this.bb6 = document.querySelector('.b-b6');

        this.createBottombar(this.bb1, this.unit, this.unit * 5, 0, 0);
        this.createBottombar(this.bb2, this.unit, this.unit * 4, 0, this.unit * 2);
        this.createBottombar(this.bb3, this.unit, this.unit * 3, 0, this.unit * 4);
        this.createBottombar(this.bb4, this.unit, this.unit * 3, 0, this.unit * 6);
        this.createBottombar(this.bb5, this.unit, this.unit * 5, 0, this.unit * 8);
        this.createBottombar(this.bb6, this.unit * 5, this.unit, this.unit * 4, this.unit * 2);

    }


    createTopbar(el, width, height, bottom, left) {
        el.style.width = `${width}rem`
        el.style.height = `${height}rem`
        el.style.bottom = `${bottom}rem`
        el.style.left = `${left}rem`
    }

    createBottombar(el, width, height, top, left) {
        el.style.width = `${width}rem`
        el.style.height = `${height}rem`
        el.style.top = `${top}rem`
        el.style.left = `${left}rem`
    }

    setMouseEvents() {
        this.container.addEventListener('mouseenter', (e) => {
            // centre
            this.tb6.style.bottom = `${this.unit * 2}rem`
            this.bb6.style.top = `${this.unit * 2}rem`
            this.tb3.style.height = `${this.unit * 3}rem`
            this.bb2.style.height = `${this.unit * 3}rem`
            // extremités
            this.tb1.style.height = `${this.unit}rem`
            this.tb1.style.bottom = `${this.unit * 4}rem`
            this.bb1.style.height = `${this.unit}rem`
            this.bb1.style.top = `${this.unit * 4}rem`
            this.tb5.style.height = `${this.unit}rem`
            this.tb5.style.bottom = `${this.unit * 4}rem`
            this.bb5.style.height = `${this.unit}rem`
            this.bb5.style.top = `${this.unit * 4}rem`


        })
        this.container.addEventListener('mouseleave', (e) => {
            // centre
            this.tb6.style.bottom = `${this.unit * 4}rem`
            this.bb6.style.top = `${this.unit * 4}rem`
            this.tb3.style.height = `${this.unit * 4}rem`
            this.bb2.style.height = `${this.unit * 4}rem`
            // extremités
            this.tb1.style.height = `${this.unit * 5}rem`
            this.tb1.style.bottom = `${0}rem`
            this.bb1.style.height = `${this.unit * 5}rem`
            this.bb1.style.top = `${0}rem`
            this.tb5.style.height = `${this.unit * 5}rem`
            this.tb5.style.bottom = `${0}rem`
            this.bb5.style.height = `${this.unit * 5}rem`
            this.bb5.style.top = `${0}rem`


        })
        this.container.addEventListener('click', (e) => {
            e.preventDefault()
            e.stopPropagation()
            this.experience.router.route(e)
        })

    }
    open() {
        this.container.style.pointerEvents = 'all'

        this.topContainer.style.transition = ''
        this.topContainer.style.transform = 'translateY(105%)'
        this.topContainer.offsetHeight
        this.topContainer.style.transition = '1s var(--ease)'
        this.topContainer.style.transform = 'translateY(0)'
        this.bottomContainer.style.transition = ''
        this.bottomContainer.style.transform = 'translateY(-105%)'
        this.bottomContainer.offsetHeight
        this.bottomContainer.style.transition = '1s var(--ease)'
        this.bottomContainer.style.transform = 'translateY(0)'
    }
    close() {
        this.container.style.pointerEvents = 'none'
        this.topContainer.style.transition = ''
        this.topContainer.style.transform = 'translateY(0)'
        this.topContainer.offsetHeight
        this.topContainer.style.transition = '1s var(--ease)'
        this.topContainer.style.transform = 'translateY(105%)'
        this.bottomContainer.style.transition = ''
        this.bottomContainer.style.transform = 'translateY(0)'
        this.bottomContainer.offsetHeight
        this.bottomContainer.style.transition = '1s var(--ease)'
        this.bottomContainer.style.transform = 'translateY(-105%)'
    }


}