import * as THREE from 'three'
import Experience from "../Experience";
import CtaBuilder from './components/CtaBuilder';
import TitleBuilder from './components/TitleBuilder';
import TextBuilder from './components/TextBuilder';
import ToolsSectionBuilder from './components/ToolsSectionBuilder';
import utils from '../Utils/utils';
import gsap from "gsap";
export default class About {

    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.ressources = this.experience.ressources
        this.time = this.experience.time
        this.camera = this.experience.camera.instance
        this.isPhone = this.experience.isPhone

        this.ctaBuilder = new CtaBuilder();
        this.titleBuilder = new TitleBuilder()
        this.textBuilder = new TextBuilder()
        // 
        this.contentTools = {
            text: this.experience.router.main_data.data.content_tools_text[0].text,
            images: this.experience.router.main_data.data.content_tools_images
        }
        this.liveTools = {
            text: this.experience.router.main_data.data.live_tools_text[0].text,
            images: this.experience.router.main_data.data.live_tools
        }
        this.realTimeTools = {
            text: this.experience.router.main_data.data.real_time_tools_text[0].text,
            images: this.experience.router.main_data.data.real_time_tools_images
        }
        this.stageTools = {
            text: this.experience.router.main_data.data.stage_tools_text[0].text,
            images: this.experience.router.main_data.data.stage_tools_images
        }
        this.aiTools = {
            text: this.experience.router.main_data.data.ai_tools_text[0].text,
            images: this.experience.router.main_data.data.ai_tools_images
        }


        this.tools = [
            this.liveTools,
            this.realTimeTools,
            this.stageTools,
            this.contentTools,
            this.aiTools
        ]
        this.textureLoader = new THREE.TextureLoader()
        // 
        this.setBalls()
        this.toolsSectionBuilder = new ToolsSectionBuilder(this)
        this.firstSectionPourcentage = 1
        this.secondSectionPourcentage = 0
        this.logoVisible = true
        this.partnerContainer = document.querySelector('.about-partnersContainer')
        document.querySelector('.about-text p').innerHTML = this.experience.router.main_data.data.about_text[0].text

        this.isDestroyed = false


        this.setPartnerCards()
        this.setLogo()


    }
    setLogo() {
        this.logo = this.experience.ressources.items.logo.scene.clone()
        this.logoHtmlTarget = document.querySelector('.about-top')
        // add materials
        this.logoItems = []
        this.logo.traverse((child) => {
            if (child.isMesh) {
                child.material = this.experience.redMaterial.clone()
                child.userData.random = Math.random()
                this.logoItems.push(child)
            }
        })
        this.logoScale = 0.18;
        this.logo.scale.set(this.logoScale, this.logoScale, this.logoScale);
        this.logo.rotation.y = -0.2 + Math.PI
        this.scene.add(this.logo);
        this.positionLogo()

    }

    logoAppear() {
        if (!this.logoVisible) {
            this.logoVisible = true
            this.logo.visible = true

            this.logoItems.forEach((item) => {
                gsap.to(item.material.uniforms.u_alpha,
                    {
                        value: 1, duration: 1, ease: "power3.inOut"
                    }
                )

            })

        }
    }
    logoDisappear() {
        if (this.logoVisible) {
            this.logoVisible = false
            gsap.to(this.logo.scale,
                {
                    x: 0.5, y: 0.5, z: 0.5, duration: 1, ease: "power3.inOut", onComplete: () => {
                        this.logo.visible = false
                    }
                }
            )
            this.logoItems.forEach((item) => {
                gsap.to(item.material.uniforms.u_alpha,
                    {
                        value: 0, duration: 1, ease: "power3.inOut"
                    }
                )

            })
        }

    }
    positionLogo(e = null) {


        const wPos = utils.getWorldPositionFromElement(this.logoHtmlTarget, this.camera, 3);
        let offsetedPos = !this.isPhone ? utils.remToWorldOffset(-600, -100, this.camera, 3) : utils.remToWorldOffset(-0, -400, this.camera, 3);
        const secondSectionOffset = utils.remToWorldOffset(-150, -600, this.camera, 3);
        const scrollOffset = utils.pixelsToWorldOffset(window.scrollY, 0, this.camera, 3)
        this.logo.position.set(wPos.x - (offsetedPos.x * this.firstSectionPourcentage) + (secondSectionOffset.x * this.secondSectionPourcentage), wPos.y - (offsetedPos.y * this.firstSectionPourcentage) - (scrollOffset.x) - (secondSectionOffset.y * this.secondSectionPourcentage), 0);

        if (e) {
            this.firstSectionPourcentage = Math.pow(Math.max(1. - (e.animatedScroll / window.innerHeight), 0), 3)
            this.secondSectionPourcentage = Math.min(((e.animatedScroll - window.innerHeight + 50) / (window.innerHeight)), 1)
            this.secondSectionPourcentage = Math.max(this.secondSectionPourcentage, 0)


            const scrollOffset = utils.pixelsToWorldOffset(e.animatedScroll, 0, this.camera, 3)
            this.logo.position.set(wPos.x - (offsetedPos.x * this.firstSectionPourcentage) + (secondSectionOffset.x * this.secondSectionPourcentage), wPos.y - (offsetedPos.y * this.firstSectionPourcentage) - (scrollOffset.x) - (secondSectionOffset.y * this.secondSectionPourcentage), 0);


        }

    }
    setBalls() {
        this.ballsGroup = new THREE.Group()
        this.ballsLittleGroups = []
        const liveToolsTextures = this.liveTools.images.map(image => this.textureLoader.load(image.live_tools_image.url));
        const realTimeToolsTextures = this.realTimeTools.images.map(image => this.textureLoader.load(image.real_time_tools_image.url));
        const stageToolsTextures = this.stageTools.images.map(image => this.textureLoader.load(image.stage_tools_image.url));
        const contentToolsTextures = this.contentTools.images.map(image => this.textureLoader.load(image.content_tools_image.url));
        const aiToolsTextures = this.aiTools.images.map(image => this.textureLoader.load(image.ai_tools_image.url));
        const sections = [liveToolsTextures, realTimeToolsTextures, stageToolsTextures, contentToolsTextures, aiToolsTextures];

        // push balls in group
        sections.forEach((section) => {
            const littleGroup = new THREE.Group()
            section.forEach((texture, i) => {
                const ball = new THREE.Mesh(
                    new THREE.SphereGeometry(0.1, 16, 16),
                    this.experience.redMaterial.clone()
                )
                ball.material.uniforms.u_alpha.value = 1
                ball.material.depthTest = false
                ball.material.depthWrite = false
                ball.material.uniforms.u_texture = new THREE.Uniform(texture)
                ball.material.uniforms.u_useTexture = new THREE.Uniform(true)
                ball.rotation.y = -Math.PI * 0.5

                if (this.isPhone) {
                    ball.scale.set(3, 3, 3)
                }



                littleGroup.add(ball)
            })
            this.ballsLittleGroups.push(littleGroup)
        })

        // add les petits group au grand & position balls
        this.ballsLittleGroups.forEach((group, i) => {
            const size = group.children.length;
            group.children.forEach((ball, i) => {
                const angle = (i / size) * Math.PI * 2;
                const radius = 0.3; // Rayon du cercle
                ball.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);
                ball.userData.random = Math.random();
            });
            // add bb group au parent
            this.ballsGroup.add(group);
        })


        this.scene.add(this.ballsGroup);
        this.positionBallsGroup();
    }
    positionBallsGroup(e) {
        this.ballsHtmlTarget = document.querySelector('.about-tools')
        const wPos = utils.getWorldPositionFromElement(this.ballsHtmlTarget, this.camera, 3);
        this.ballsGroup.position.set(wPos.x, wPos.y, 0);

        if (e) {
            this.ballsGroup.position.set(wPos.x, wPos.y, 0);
        }
    }
    showBalls(index) {
        let direction = 0;
        if (this.toolsSectionBuilder) {
            if (this.toolsSectionBuilder.prevIndex < this.toolsSectionBuilder.currentIndex || this.toolsSectionBuilder.prevIndex === 0) {
                direction = 1
            } else {
                direction = -1
            }
        }
        this.ballsLittleGroups.forEach((group, i) => {
            gsap.to(group.rotation, {
                z: direction > 0 ? group.rotation.z - Math.PI : group.rotation.z + Math.PI, duration: 1, ease: "power3.inOut"

            })
            if (i === index) {
                group.traverse((child) => {
                    if (child.isMesh) {
                        child.visible = true;
                        gsap.to(child.material.uniforms.u_alpha, {
                            value: 1,
                            duration: 0.5,
                            delay: 0.6,

                        });
                    }
                })
            } else {
                group.traverse((child) => {
                    if (child.isMesh) {
                        gsap.to(child.material.uniforms.u_alpha, {
                            value: 0,
                            duration: 0.5,
                            onComplete: () => {
                                child.visible = false;
                            }
                        });
                    }
                })
            }
        });
    }

    onScroll(e) {
        if (this.isDestroyed) return;

        this.positionLogo(e)
        this.positionBallsGroup(e)
        const rect = this.partnerContainer.getBoundingClientRect();
        const bottomY = rect.top + (rect.height - (window.innerHeight * 1.2)) + e.animatedScroll; // position absolue dans la page

        if (e.animatedScroll > bottomY) {
            this.logoDisappear()
        } else {
            this.logoAppear()
        }
    }
    resize() {
        if (this.isDestroyed) return;

        this.positionLogo()
    }

    setPartnerCards() {
        const container = document.querySelector('.about-partnersContainer')

        this.experience.router.main_data.data.about_partners.forEach((item, index) => {
            const card = `
                    <div class="about-partnerCards">
                     <img src=${item.partner_logo.url} alt="" />
                    </div>
             `
            container.insertAdjacentHTML('beforeend', card)

        })
    }

    update() {
        if (this.isDestroyed) return;

        const initialRotation = {
            x: 0,
            y: this.isPhone ? Math.PI : -0.2 + Math.PI,
            z: 0
        }
        const firstSectionTarget = {
            x: -(Math.PI * 0.2),
            y: (Math.PI + 0.5) + Math.PI,
            z: 0
        }
        const secondSectionTarget = {
            x: -firstSectionTarget.x + 0.3,
            y: Math.PI + Math.PI * 0.75,
            z: 0
        }
        const targetRotationX = (firstSectionTarget.x * (1 - this.firstSectionPourcentage)) + (secondSectionTarget.x * this.secondSectionPourcentage);
        const targetRotationY = (initialRotation.y * this.firstSectionPourcentage) + (firstSectionTarget.y * (1 - this.firstSectionPourcentage)) + (secondSectionTarget.y * this.secondSectionPourcentage);
        const targetScale = this.isPhone ? 0.5 + (this.secondSectionPourcentage * 0.4) : 0.18 + (this.secondSectionPourcentage * 0.4);


        this.logo.rotation.x = THREE.MathUtils.lerp(this.logo.rotation.x, targetRotationX, 0.1);
        this.logo.rotation.y = THREE.MathUtils.lerp(this.logo.rotation.y, targetRotationY, 0.1);

        this.logo.scale.x = THREE.MathUtils.lerp(this.logo.scale.x, targetScale, 0.1);
        this.logo.scale.y = THREE.MathUtils.lerp(this.logo.scale.y, targetScale, 0.1);
        this.logo.scale.z = THREE.MathUtils.lerp(this.logo.scale.z, targetScale, 0.1);
        // this.logo.scale.set(targetScale.x, targetScale.y, targetScale.z);

        // 
        this.logoItems.forEach((item) => {
            const originRotation = -Math.PI * 0.5;
            const cos = Math.cos(this.experience.time.elapsed * 0.001 + (item.userData.random * 10)) * Math.PI * 0.05;
            // const cos = Math.cos(this.experience.time.elapsed * 0.001 + (item.userData.random * 10)) * 0.001;
            item.rotation.z = originRotation + (cos) - (originRotation * (1 - this.firstSectionPourcentage));


        });
        if (this.toolsSectionBuilder.prevIndex < this.toolsSectionBuilder.currentIndex || this.toolsSectionBuilder.prevIndex === 0) {
            this.ballsGroup.rotation.z -= this.experience.time.delta * 0.5
        } else {
            this.ballsGroup.rotation.z += this.experience.time.delta * 0.5
        }

        this.ballsLittleGroups.forEach((group, i) => {
            const size = group.children.length;
            group.children.forEach((ball, i) => {
                const angle = (i / size) * Math.PI * 2;
                const radiusOffset = (Math.cos(this.experience.time.elapsed * 0.001 + angle + (ball.userData.random * Math.PI * 2)) + 1) * 0.1;

                const radius = !this.isPhone ? 0.3 + radiusOffset : 0.6 + radiusOffset; // Rayon du cercle
                ball.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);
                ball.rotation.z += this.experience.time.delta;
                ball.lookAt(new THREE.Vector3(-1, 0, 0));
            });
            // add bb group au parent
            this.ballsGroup.add(group);
        })



    }
    destroy() {
        this.isDestroyed = true;
        const renderer = this.experience.renderer.instance; // Optionnel, pour logs

        // ----------------------------
        // Logo
        // ----------------------------
        if (this.logo) {
            this.logo.traverse((child) => {
                if (child.isMesh) {
                    if (child.geometry) child.geometry.dispose();
                    if (child.material) {
                        if (Array.isArray(child.material)) {
                            child.material.forEach(m => m.dispose());
                        } else {
                            child.material.dispose();
                        }
                    }
                }
            });
            this.scene.remove(this.logo);
            this.logo = null;
            this.logoItems = [];
        }

        // ----------------------------
        // Balls
        // ----------------------------
        if (this.ballsGroup) {
            this.ballsGroup.traverse((child) => {
                if (child.isMesh) {
                    if (child.geometry) child.geometry.dispose();
                    if (child.material) {
                        if (Array.isArray(child.material)) {
                            child.material.forEach(m => m.dispose());
                        } else {
                            child.material.dispose();
                        }
                    }
                }
            });
            this.scene.remove(this.ballsGroup);
            this.ballsGroup = null;
            this.ballsLittleGroups = [];
        }

        // ----------------------------
        // ToolsSectionBuilder
        // ----------------------------
        if (this.toolsSectionBuilder && this.toolsSectionBuilder.destroy) {
            this.toolsSectionBuilder.destroy();
            this.toolsSectionBuilder = null;
        }

        // ----------------------------
        // Builders (cta, title, text)
        // ----------------------------
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

        // ----------------------------
        // Partner cards
        // ----------------------------
        if (this.partnerContainer) {
            this.partnerContainer.innerHTML = '';
            this.partnerContainer = null;
        }

    }



}