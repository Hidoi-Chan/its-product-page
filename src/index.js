import '@/icons/search.svg'
import '@/icons/profile.svg'
import '@/icons/heart.svg'
import '@/icons/repeat.svg'
import '@/icons/arrow-right.svg'
import '@/icons/plus.svg'
import '@/images/banner1.jpg'
import '@/images/product1.jpg'
import '@/images/product2.jpg'
import '@/images/product3.jpg'
import '@/images/product4.jpg'
import '@/images/product5.jpg'
import '@/images/product6.jpg'
import '@/images/product7.jpg'
import '@/images/product8.jpg'

import '@scss/style.scss'
import '@blocks/icon/icon.scss'
import '@blocks/header/logo/logo.scss';
import '@blocks/header/nav/nav.scss';
import '@blocks/header/tel/tel.scss';
import '@blocks/header/burger/burger.scss';
import Burger from '@blocks/header/burger/burger.js';
import '@blocks/header/breadcrumb/breadcrumb.scss';
import '@blocks/header/header.js'
import '@blocks/header/header.scss'
import BannersBlock from '@blocks/banners/banners.js'
import '@blocks/banners/banners.scss'
import '@blocks/toggle/toggle.scss'
import Select from '@blocks/select/select.js'
import '@blocks/select/select.scss';
import '@blocks/main/product-card/product-card.scss';
import {Filters, Main} from '@blocks/main/main.js'
import '@blocks/main/main.scss'
import '@blocks/footer/footer.scss'
import Basket from '@blocks/basket/basket.js'
import '@blocks/basket/basket.scss'
import products from '@/data/products.js'

new BannersBlock(document.getElementById('banners'))
new Burger(document.getElementById('burger-button'), document.getElementById('burger-container'))

const filters = new Filters(document.getElementById('main-sidebar'), document.getElementById('filters-button'))
const filtersArr = []

const select = new Select(document.getElementById('select'))
let selectArg = 'expensive-first'

const main = new Main(document.getElementById('main__content'), products)

filters.$filtersBlock.addEventListener('change', event => {
    filters.changeFilters(event, filtersArr)
    main.renderProducts(filtersArr, selectArg)
})
select.$elem.addEventListener('change', event => {
    selectArg = event.target.id
    main.renderProducts(filtersArr, selectArg)
})

const basket = new Basket(document.getElementById('basket'), document.querySelector('.icon.basket'))

export {basket}