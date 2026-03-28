import Experience from "../../Experience"

export default class Menu {
    constructor() {
        this.experience = new Experience()
        this.instance = document.querySelector('.menu')
        this.top = this.instance.querySelector('.menu-top')
        this.bottom = this.instance.querySelector('.menu-bottom')
        this.content = this.instance.querySelector('.menu-content')
        this.links = this.content.querySelectorAll('.menu-link-container a')
        this.isHoverable = false
        this.isOpen = false

        this.createFragments()

        this.links.forEach((link, i) => {
            link.addEventListener('mouseenter', (e) => this.handleMouseHover(e, i));
            link.addEventListener('mouseleave', (e) => this.handleMouseOut(e, i));
            link.addEventListener('click', (e) => this.handleClick(e));
        });

    }
    handleClick(e) {
        e.preventDefault();
        if (e.currentTarget.textContent === 'contact') {
            window.location.href = 'mailto:youre-email@company.com';
        } else {
            this.experience.router.route(e);
        }




    }
    handleMouseHover(e, i) {
        if (this.isHoverable) {
            const hoveredLink = this.links[i]
            const otherLinks = Array.from(this.links).filter((link, index) => index !== i)
            otherLinks.forEach(link => {
                link.style.opacity = '0.2'
            })
            hoveredLink.style.opacity = '1'
            document.querySelectorAll('.menu-item-container')[i].querySelectorAll('.link-fragment div').forEach((fragment, index) => {
                fragment.style.transition = `transform 0.3s var(--ease) ${index * 0.07}s`
                fragment.style.transform = 'translateY(0%)'
            });
        }
    }
    handleMouseOut(e, i) {
        this.links.forEach(link => {
            link.style.opacity = '1';
        });
        document.querySelectorAll('.menu-item-container')[i].querySelectorAll('.link-fragment div').forEach((fragment, index) => {
            const total = document.querySelectorAll('.menu-item-container')[i].querySelectorAll('.link-fragment div').length
            const newIndex = total - index

            fragment.style.transition = `transform 0.3s var(--ease) ${newIndex * 0.07}s`

            fragment.style.transform = 'translateY(100%)'
        });
    }
    createFragments() {

        this.itemContainer = document.querySelectorAll('.menu-item-container')
        this.itemContainer.forEach((container, containerIndex) => {
            const fragments = container.querySelectorAll('.link-fragment')

            fragments.forEach((fragment, i) => {
                if (containerIndex % 2) {
                    fragment.style.textAlign = 'right'
                    fragment.style.right = '-30rem'
                } else {
                    fragment.style.textAlign = 'left'
                    fragment.style.left = '-30rem'
                }

                const styles = [
                    { top: -47, height: 50, color: `rgba(${241 * 0.8}, ${51 * 0.8}, ${67 * 0.8}, 1)` },
                    { top: -70, height: 25, color: `rgba(${241 * 0.6}, ${51 * 0.6}, ${67 * 0.6}, 1)` },
                    { top: -82, height: 15, color: `rgba(${241 * 0.4}, ${51 * 0.4}, ${67 * 0.4}, 1)` }
                ]

                if (styles[i]) {
                    fragment.style.top = `${styles[i].top}%`
                    fragment.style.height = `${styles[i].height}%`
                    fragment.style.color = `${styles[i].color}`
                }

                // loop position de chaque individu

            });


        })
    }

    open() {
        this.isOpen = true
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
        this.instance.style.pointerEvents = 'all'
        this.instance.style.transition = 'none'
        this.instance.style.backdropFilter = 'brightness(1)'
        this.instance.offsetWidth
        this.instance.style.transition = 'backdrop-filter 1s var(--ease)'
        this.instance.style.backdropFilter = 'brightness(0)'
        // links
        this.links.forEach((l, i) => {
            l.style.transition = 'none'
            l.style.transform = i % 2 ? 'translateY(-100%)' : 'translateY(100%)'
            l.offsetWidth;
            l.style.transition = 'transform 1s var(--ease) 0.5s, opacity 0.2s ease-in-out'
            l.style.transform = 'translateY(0%)'
        })
        this.isHoverable = true
        // 
        this.itemContainer.forEach((c) => {
            const fragments = c.querySelectorAll('.link-fragment')
            fragments.forEach((f) => {
                f.style.opacity = 1
            })
        })

        // scroll
        this.experience.lenis.stop()
    }
    close() {
        this.isOpen = false
        this.top.style.transition = 'transform 1s var(--ease) 0.5s'
        this.top.style.transform = 'translateY(-100%)'
        this.bottom.style.transition = 'transform 1s var(--ease) 0.5s'
        this.bottom.style.transform = 'translateY(100%)'
        // overlay
        this.instance.style.pointerEvents = 'none'
        this.instance.style.transition = 'none'
        this.instance.style.backdropFilter = 'brightness(0)'
        this.instance.offsetWidth
        this.instance.style.transition = 'backdrop-filter 1s var(--ease) 0.5s'
        this.instance.style.backdropFilter = 'brightness(1)'
        // links
        this.links.forEach((l, i) => {
            l.style.transition = 'none'
            l.style.transform = 'translateY(0%)'
            l.offsetWidth;
            l.style.transition = 'transform 1s var(--ease)'
            l.style.transform = i % 2 ? 'translateY(100%)' : 'translateY(-100%)'
        })
        this.isHoverable = false
        this.itemContainer.forEach((c) => {
            const fragments = c.querySelectorAll('.link-fragment')
            fragments.forEach((f) => {
                f.style.opacity = 0
            })
        })

        // scroll
        this.experience.lenis.start()

    }

}