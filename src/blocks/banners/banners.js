export default class BannersBlock {

    constructor(elem) {
        this.$elem = elem
        this.currentBanner = 1
        this.renderDots()
        this.$elem.addEventListener('click', this.clickHandler.bind(this))
    }

    get $slider() {
        return this.$elem.querySelector('.banners__slider')
    }

    get $banners() {
        return Array.from(this.$elem.querySelectorAll('.banners__link'))
    }

    get $dotsContainer() {
        return this.$elem.querySelector('.banners__dots')
    }

    get $dots() {
        return Array.from(this.$elem.querySelectorAll('.banners__dot'))
    }

    get $bannersButtons() {
        return {
            prev: this.$elem.querySelector('.banners__arrow[data-action="prev"]'),
            next: this.$elem.querySelector('.banners__arrow[data-action="next"]')
        }
    }

    renderDots() {
        let num = 1
        let html = ''
        while (num <= this.$banners.length) {
            html+=`<div class="banners__dot ${num === 1 && 'banners__dot_active'}" data-index="${num}"></div>`
            num++
        }

        this.$dotsContainer.innerHTML = html
    }

    changeBanner(param) {
        this.$dots[this.currentBanner - 1].classList.remove('banners__dot_active')
        switch (param) {
            case 'prev':
                this.currentBanner--
                break;
            case 'next':
                this.currentBanner++
                break;
            default:
                this.currentBanner = param
                break;
        }
        const bannerIndex = this.currentBanner - 1
        this.$slider.style.left = this.$slider.offsetWidth * -bannerIndex + 'px'
        this.$dots[bannerIndex].classList.add('banners__dot_active')

        if (bannerIndex === 0) {
            this.$bannersButtons.prev.setAttribute("disabled", "disabled")
        } else if (bannerIndex === this.$banners.length - 1) {
            this.$bannersButtons.next.setAttribute("disabled", "disabled")
        } else {
            this.$bannersButtons.prev.removeAttribute("disabled")
            this.$bannersButtons.next.removeAttribute("disabled")
        }
    }

    clickHandler(event) {
        const target = event.target

        if (Object.keys(this.$bannersButtons).includes(target.dataset.action)) {
            this.changeBanner(target.dataset.action)
        }

        if (this.$dots.includes(target)) {
            this.changeBanner(target.dataset.index)
        }
    }
}