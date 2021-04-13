export default class Burger {
    constructor(button, elem) {
        this.$elem = elem
        this.$button = button
        this.$button.addEventListener('click', this.open.bind(this))
        this.$backdrop.addEventListener('click', this.close.bind(this))
    }

    get $block() {
        return this.$elem.querySelector('.burger__block')
    }

    get $backdrop() {
        return this.$elem.querySelector('.backdrop')
    }

    open() {
        this.$elem.classList.add('header__burger-container_open')
    }

    close() {
        this.$elem.classList.remove('header__burger-container_open')
    }
}