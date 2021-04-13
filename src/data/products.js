const products = [
    {
        id: Math.floor(Math.random() * 1e9),
        name: 'Краска Wallquest, Brownsone MS90102',
        price: Math.floor(Math.random() * 1e4),
        image: 'product1.jpg',
        filters: {
            new: true,
            'in-stock': false,
            contractual: true,
            exclusive: true, 
            sale: false
        }
    },
    {
        id: Math.floor(Math.random() * 1e9),
        name: 'Краска Wallquest',
        price: Math.floor(Math.random() * 1e4),
        image: 'product2.jpg',
        filters: {
            new: true,
            'in-stock': false,
            contractual: false,
            exclusive: false, 
            sale: false
        }
    },
    {
        id: Math.floor(Math.random() * 1e9),
        name: 'Краска Wallquest, Brownsone MS90102, красный бархат рассветного неба',
        price: Math.floor(Math.random() * 1e4),
        image: 'product3.jpg',
        filters: {
            new: false,
            'in-stock': true,
            contractual: true,
            exclusive: true, 
            sale: false
        }
    },
    {
        id: Math.floor(Math.random() * 1e9),
        name: 'Краска Wallquest, Brownsone MS90102, морской бриз сине-голубой',
        price: Math.floor(Math.random() * 1e4),
        image: 'product4.jpg',
        filters: {
            new: false,
            'in-stock': true,
            contractual: true,
            exclusive: false, 
            sale: false
        }
    },
    {
        id: Math.floor(Math.random() * 1e9),
        name: 'Краска Wallquest, Brownsone MS90102',
        price: Math.floor(Math.random() * 1e4),
        image: 'product5.jpg',
        filters: {
            new: false,
            'in-stock': false,
            contractual: false,
            exclusive: true, 
            sale: false
        }
    },
    {
        id: Math.floor(Math.random() * 1e9),
        name: 'Краска Wallquest, Brownsone MS90102',
        price: Math.floor(Math.random() * 1e4),
        image: 'product6.jpg',
        filters: {
            new: true,
            'in-stock': false,
            contractual: true,
            exclusive: false, 
            sale: false
        }
    },
    {
        id: Math.floor(Math.random() * 1e9),
        name: 'Краска Wallquest, Brownsone MS90102',
        price: Math.floor(Math.random() * 1e4),
        image: 'product7.jpg',
        filters: {
            new: true,
            'in-stock': false,
            contractual: true,
            exclusive: true, 
            sale: false
        }
    },
    {
        id: Math.floor(Math.random() * 1e9),
        name: 'Краска Wallquest, Brownsone MS90102',
        price: Math.floor(Math.random() * 1e4),
        image: 'product8.jpg',
        filters: {
            new: true,
            'in-stock': false,
            contractual: false,
            exclusive: false, 
            sale: false
        }
    },
    {
        id: Math.floor(Math.random() * 1e9),
        name: 'Краска Wallquest, Brownsone MS90102',
        price: Math.floor(Math.random() * 1e4),
        image: 'product1.jpg',
        filters: {
            new: false,
            'in-stock': false,
            contractual: true,
            exclusive: false, 
            sale: false
        }
    },
    {
        id: Math.floor(Math.random() * 1e9),
        name: 'Краска Wallquest, Brownsone MS90102',
        price: Math.floor(Math.random() * 1e4),
        image: 'product2.jpg',
        filters: {
            new: false,
            'in-stock': true,
            contractual: true,
            exclusive: true, 
            sale: false
        }
    },
    {
        id: Math.floor(Math.random() * 1e9),
        name: 'Краска Wallquest, Brownsone MS90102',
        price: Math.floor(Math.random() * 1e4),
        image: 'product3.jpg',
        filters: {
            new: true,
            'in-stock': true,
            contractual: true,
            exclusive: true, 
            sale: false
        }
    },
    {
        id: Math.floor(Math.random() * 1e9),
        name: 'Краска Wallquest, Brownsone MS90102',
        price: Math.floor(Math.random() * 1e4),
        image: 'product4.jpg',
        filters: {
            new: true,
            'in-stock': false,
            contractual: true,
            exclusive: true, 
            sale: false
        }
    },
    {
        id: Math.floor(Math.random() * 1e9),
        name: 'Краска Wallquest, Brownsone MS90102',
        price: Math.floor(Math.random() * 1e4),
        image: 'product2.jpg',
        filters: {
            new: true,
            'in-stock': false,
            contractual: true,
            exclusive: true, 
            sale: false
        }
    },
    {
        id: Math.floor(Math.random() * 1e9),
        name: 'Краска Wallquest, Brownsone MS90102',
        price: Math.floor(Math.random() * 1e4),
        image: 'product5.jpg',
        filters: {
            new: true,
            'in-stock': true,
            contractual: false,
            exclusive: true, 
            sale: false
        }
    },
    {
        id: Math.floor(Math.random() * 1e9),
        name: 'Краска Wallquest, Brownsone MS90102',
        price: Math.floor(Math.random() * 1e4),
        image: 'product6.jpg',
        filters: {
            new: false,
            'in-stock': false,
            contractual: true,
            exclusive: false, 
            sale: false
        }
    },
    {
        id: Math.floor(Math.random() * 1e9),
        name: 'Краска Wallquest, Brownsone MS90102',
        price: Math.floor(Math.random() * 1e4),
        image: 'product7.jpg',
        filters: {
            new: false,
            'in-stock': true,
            contractual: false,
            exclusive: true, 
            sale: false
        }
    },
    {
        id: Math.floor(Math.random() * 1e9),
        name: 'Краска Wallquest, Brownsone MS90102',
        price: Math.floor(Math.random() * 1e4),
        image: 'product8.jpg',
        filters: {
            new: true,
            'in-stock': true,
            contractual: true,
            exclusive: false, 
            sale: false
        }
    },
    {
        id: Math.floor(Math.random() * 1e9),
        name: 'Краска Wallquest, Brownsone MS90102',
        price: Math.floor(Math.random() * 1e4),
        image: 'product1.jpg',
        filters: {
            new: true,
            'in-stock': true,
            contractual: true,
            exclusive: true, 
            sale: false
        }
    },
    {
        id: Math.floor(Math.random() * 1e9),
        name: 'Краска Wallquest, Brownsone MS90102',
        price: Math.floor(Math.random() * 1e4),
        image: 'product2.jpg',
        filters: {
            new: true,
            'in-stock': false,
            contractual: true,
            exclusive: true, 
            sale: false
        }
    },
    {
        id: Math.floor(Math.random() * 1e9),
        name: 'Краска Wallquest, Brownsone MS90102',
        price: Math.floor(Math.random() * 1e4),
        image: 'product3.jpg',
        filters: {
            new: true,
            'in-stock': false,
            contractual: false,
            exclusive: true, 
            sale: false
        }
    },
    {
        id: Math.floor(Math.random() * 1e9),
        name: 'Краска Wallquest, Brownsone MS90102',
        price: Math.floor(Math.random() * 1e4),
        image: 'product4.jpg',
        filters: {
            new: true,
            'in-stock': true,
            contractual: false,
            exclusive: true, 
            sale: false
        }
    },
]

export default products