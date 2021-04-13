function renderItem(item) {

    const classes = ['nav__link']    
    if (item.href === window.location.pathname) {
        classes.push('active')
    }

    return `
        <li class="nav__item">
            <a href="${item.href}" class="${classes.join(' ')}">
                ${item.name}
            </a>
        </li>
    `
}

export default function renderMenu(menu) {
    let html = ''
    menu.map(item => {
        html += renderItem(item)
    })
    return '<ul class="nav__menu">' + html + '</ul>'
}