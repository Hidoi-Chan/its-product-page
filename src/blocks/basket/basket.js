import {declOfNum} from '@/functions.js'

export default class Basket {
    constructor (elem, button) {
        this.$elem = elem
        this.$buttonOpen = button
        this.products = []
        this.$buttonOpen.addEventListener('click', this.open.bind(this))
        this.$elem.addEventListener('click', this.clickHandler.bind(this))
        this.renderProducts()
    }

    get $backdrop() {
        return this.$elem.querySelector('.backdrop')
    }

    get $basketProductsError() {
        return this.$elem.querySelector('.basket__product-error')
    }

    get $basketProductsContainer() {
        return this.$elem.querySelector('.basket__product-cards')
    }
    
    get $basketProductsSumContainer() {
        return this.$elem.querySelector('.basket__products-sum')
    }
    
    get $basketPriceSum () {
        return this.$elem.querySelector('.basket__price-sum')
    }

    addProduct(product) {
        const index = this.products.findIndex(item => item.id === product.id)
        if (index === -1) {
            product.sum = 1
            this.products.push(product)
        } else {
            this.products[index].sum++
        }
    }

    setBasketProductsSum() {
        let allSum = 0
        let sum = this.products.reduce((sum, item) => {
            if (item.filters['in-stock']) {
                sum+= item.sum
                allSum+= item.price
            }
            return sum
        }, 0)
        this.$basketProductsSumContainer.innerText = sum + ' ' + declOfNum(sum, ['товар', 'товара', 'товаров'])
        this.$buttonOpen.innerHTML = `<span>${sum}</span>`
        this.$basketPriceSum.innerText = allSum
    }

    renderProducts() {
        this.$basketProductsError.innerText = ''
        let html = ''
        if (this.products.length) {
            this.products.map(product => {
                const disabled = !product.filters['in-stock']
                html+= `
                    <div class="basket-product ${disabled ? 'basket-product_disabled' : ''}" data-id="${product.id}">
                        <a href="#"  class="basket-product__link-img"><img class="basket-product__img" src="assets/images/${product.image}", alt="${product.name}"></a>
                        <div class="basket-product__text">
                            <a class="basket-product__title">${product.name}</a>
                            <p class="basket-product__price">${product.price} &#8381;</p>
                        </div>
                        <div class="basket-product__counters">
                            <button class="basket-product__counter-button" data-action="decrement"}>-</button>
                            <span class="basket-product__conter">${product.sum}</span>
                            <button class="basket-product__counter-button" data-action="increment" ${disabled && 'disabled'}>+</button>
                        </div>
                        <button class="basket-product__control" data-action="${disabled ? 'repeat' : 'delete'}"></button>
                    </div>
                `
            })
        } else {
            this.$basketProductsError.innerText = 'Вы еще не добавили в корзину ни одного товара'
        }
        this.$basketProductsContainer.innerHTML = html
        this.setBasketProductsSum()
    }

    clickHandler(event) {

        if (event.target === this.$backdrop) {
            this.close()
        }
        if (event.target.closest('[data-action]')) {
            const action = event.target.dataset.action
            if (event.target.closest('.basket-product')) {
                const id = event.target.closest('.basket-product').dataset.id
                const indexOfProduct = this.products.findIndex(product => product.id === +id)
                this[action](indexOfProduct)
            } else {
                this[action]()
            }
        }
    }

    open() {
        this.$elem.classList.add('basket_open')
    }

    close() {
        this.$elem.classList.remove('basket_open')
    }

    clean() {
        this.products = []
        this.renderProducts()
    }

    decrement(index) {
        if (this.products[index].sum === 1) {
            this.products.splice(index, 1)
        } else {
            this.products[index].sum--
        }
        this.renderProducts()
    }

    increment(index) {
        console.log(index)
        this.products[index].sum++
        this.renderProducts()
    }

    delete(index) {
        this.products.splice(index, 1)
        this.renderProducts()
    }

    repeat(index) {
    }
    
    buy() {
        if (this.products.length) {
            this.products = []
            this.renderProducts()
            this.$basketProductsError.innerText = 'Ваш заказ успешно оформлен! Оператор свяжется с вами в ближайшее время'
        } else {
            this.renderProducts()
        }
    }
}