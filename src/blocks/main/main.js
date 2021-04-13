import {declOfNum} from '@/functions.js'
import {basket} from '@/index.js'

export class Filters {
    constructor(elem, button) {
        this.$elem = elem,
        this.$button = button
        this.$button.addEventListener('click', this.open.bind(this))
        this.$backdrop.addEventListener('click', this.close.bind(this))
    }

    get $filtersBlock() {
        return this.$elem.querySelector('.main__filters-block')
    }

    get $backdrop() {
        return this.$elem.querySelector('.backdrop')
    }

    open() {
        this.$elem.classList.add('main__sidebar_open')
    }

    close() {
        this.$elem.classList.remove('main__sidebar_open')
    }

    changeFilters(event, arr) {
        const target = event.target.closest('.toggle').querySelector('input[type="checkbox"]')
        if (target.checked) {
            arr.push(target.value)
        } else {
            arr.splice(arr.indexOf(target.value), 1)
        }
    }
}

export class Main {
    constructor(elem, products) {
        this.$elem = elem
        this.products = products
        this.renderProducts()
        this.$productsContainer.addEventListener('click', this.clickHandler.bind(this))
    }
    
    get $productsSumContainer() {
        return this.$elem.querySelector('.main__products-sum')
    }
    
    get $productsError() {
        return this.$elem.querySelector('.main__products-error')
    }
    
    get $productsContainer() {
        return this.$elem.querySelector('.main__products-container')
    }

    changeProducts(num) {
        this.products = this.products.slice(0, num)
    }

    setProductsSum(products) {
        this.$productsSumContainer.innerHTML = products.length + ' ' + declOfNum(products.length, ['товар', 'товара', 'товаров'])
    }

    doFilter(filters, products) {
        return products.filter(product => {
            let result = true
            for (let filter of filters) {
                if (!product.filters[filter]) result = false
            }
            return result
        })
    }

    doSortings(sortings, products) {
        switch (sortings) {
            case 'cheap-first':
                products.sort((a,b) => a.price - b.price)
                break;
            case 'expensive-first':
                products.sort((a,b) => b.price - a.price)
                break;
        }
    }

    renderProducts(filters, sortings = 'expensive-first') {
        this.$productsError.innerText = ''
        let html = ''
        let products = [...this.products]
        if (filters) {
            products = this.doFilter(filters, products)
        }
        if (sortings) {
            this.doSortings(sortings, products)
        }
        if (products.length) {
            products.map(product => {
                html+= `
                    <div class="product-card main__product-card" data-id="${product.id}">
                        <a href="#"><img class="product-card__img" src="assets/images/${product.image}", alt="${product.name}"></a>
                        <div class="product-card__data">
                            <a class="product-card__title" href="#">${product.name}</a>
                            <div class="product-card__price-row">
                                <p class="product-card__price">${product.price} &#8381;</p>
                                <button class="product-card__buy"></button>
                            </div>
                        </div>
                    </div>
                `
            })
        } else {
            this.$productsError.innerText = 'К сожалению, подходящих товаров не нашлось'
        }
        this.$productsContainer.innerHTML = html
        this.setProductsSum(products)
    }

    clickHandler(event) {
        if (event.target.closest('.product-card__buy')) {
            const productId = event.target.closest('.product-card').dataset.id
            const product = this.products.find(product => product.id === +productId)
            basket.addProduct(product)
            basket.renderProducts()
        }
    } 
}