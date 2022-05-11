export const productData = [
    {
        id: 1,
        productName: 'Chrysanthemum ',
        productImg: 'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg',
        price: 25,
        model: 5515118151,
        status: false
    },
    {
        id: 2,
        productName: 'Chrysanthemum ',
        productImg: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/close-up-of-blossoming-rose-flower-royalty-free-image-1580853844.jpg?crop=0.668xw:1.00xh;0.248xw,0&resize=480:*',
        price: 450,
        model: 5515118151,
        status: true
    },
    {
        id: 3,
        productName: 'Chrysanthemum ',
        productImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyQJJ5WTBisE3ZNxjVhGZdbm1Qh9uLCnUn1g&usqp=CAU',
        price: 234,
        model: 5515118151,
        status: false
    },
]

export const usersData = [
    {
        id: 1,
        date: '01 Jun 2022',
        name: 'Maggie Potts',
        status: 'Completed',
        total: 104.83,
        online: true,
        email: 'sss@gmail.com',
        location: 'Use',
        phone: '+37455833838'
    },
    {
        id: 2,
        date: '25 Jun 2022',
        name: 'Kevin Adkins',
        status: 'Pending',
        total: 230.83,
        online: false,
        email: 'sss@gmail.com',
        location: 'Use',
        phone: '+37455833838'
    },
    {
        id: 3,
        date: '15 Jun 2022',
        name: 'Max Lynn',
        status: 'Cancelled',
        total: 150.83,
        online: true,
        email: 'sss@gmail.com',
        location: 'Use',
        phone: '+37455833838'
    },
    {
        id: 4,
        date: '15 Jun 2022',
        name: 'Max Lynn',
        status: 'Pending',
        total: 150.83,
        online: false,
        email: 'sss@gmail.com',
        location: 'Use',
        phone: '+37455833838'
    },
]


export const orders = [
    {
        users: {
            name: 'Maggie Potts'
        },
        delivery_date: '21.03.2022',
        delivery_time: '12:00',
        status: false,
        products: [
            {
                product: {productName: 'Chrysanthemum', model: 5515118151, price: 1500, productImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyQJJ5WTBisE3ZNxjVhGZdbm1Qh9uLCnUn1g&usqp=CAU',},
                quantity: 3
            },
            {
                product: {productName: 'Chrysanthemum', model: 555118151, price: 1500, productImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyQJJ5WTBisE3ZNxjVhGZdbm1Qh9uLCnUn1g&usqp=CAU',},
                quantity: 5
            },
            {
                product: {productName: 'Chrysanthemum', model: 55151875818151, price: 1500, productImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyQJJ5WTBisE3ZNxjVhGZdbm1Qh9uLCnUn1g&usqp=CAU',},
                quantity: 8
            },
        ]
    },
    {
        users: {
            name: 'Maggie Potts'
        },
        delivery_date: '21.03.2022',
        delivery_time: '12:00',
        status: false,
        products: [
            {
                product: {productName: 'Chrysanthemum', price: 1500},
                quantity: 3
            },
            {
                product: {productName: 'Chrysanthemum', price: 2000},
                quantity: 5
            },
            {
                product: {productName: 'Chrysanthemum', price: 800},
                quantity: 2
            }
        ]
    },
    {
        users: {
            name: 'Maggie Potts'
        },
        delivery_date: '12.23.2022',
        delivery_time: '23:00',
        status: false,
        products: [
            {
                product: {productName: 'Chrysanthemum', price: 1333},
                quantity: 1
            },
            {
                product: {productName: 'Chrysanthemum', price: 3222},
                quantity: 2
            },
            {
                product: {productName: 'Chrysanthemum', price: 3333},
                quantity: 3
            }
        ]
    }
]