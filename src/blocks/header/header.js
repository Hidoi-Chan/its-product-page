import renderMenu from '@blocks/header/nav/nav.js'
import menu from '@/data/menu.js'

const nav = document.getElementById('header-nav')
nav.insertAdjacentHTML('beforeend', renderMenu(menu))