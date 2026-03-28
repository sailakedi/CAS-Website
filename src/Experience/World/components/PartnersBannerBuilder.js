import Experience from "../../Experience";


export default class PartnersBannerBuilder {
    constructor() {
        this.experience = new Experience();
        this.data = [
            this.experience.router.main_data.data.main_partner_logo1,
            this.experience.router.main_data.data.main_partner_logo2,
            this.experience.router.main_data.data.main_partner_logo3,
            this.experience.router.main_data.data.main_partner_logo4,
            this.experience.router.main_data.data.main_partner_logo5
        ]
        this.container = document.querySelector('.home-banner-container')
        this.data.forEach((item, index) => {
            const card = `
                            <div class="partnerCard"> 
                                <img src=${item.url} alt="" />
                            </div>
             `
            this.container.insertAdjacentHTML('beforeend', card)

        })
    }



}