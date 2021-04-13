export default class Select {
    constructor(elem) {
        this.$elem = elem
        this.$elem.addEventListener('change', this.changeSelectValue.bind(this))
        this.$elem.addEventListener('click', this.clickHandler.bind(this))
    }

    get $selectButton() {
        return this.$elem.querySelector('.select__button')
    }

    get $selectedOption() {
        return this.$elem.querySelector('.selected-option')
    }

    get $backdrop() {
        return this.$elem.querySelector('.backdrop')
    }

    changeSelectValue(event) {
        const name = event.target.id
        this.$selectedOption.innerText = event.target.value
        this.$elem.classList.remove('select_open')
    }

    clickHandler(event) {
        if (event.target.closest('.select__button')) {
            this.$elem.classList.add('select_open')
        }
        if (event.target === this.$backdrop) {
            this.$elem.classList.remove('select_open')
        }
    }
}