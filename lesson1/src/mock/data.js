import {random} from 'lodash'

const PRODUCTS = [
    'Shirt', 
    'Shoes',
    'Hat',
    'Jacket',
    'Socks'
]

const COLORS = [
    'Green',
    'Red',
    'Black',
    'White',
    'Gray'
]

let lastIndex = 0;

function getProductName() {
    const product = PRODUCTS[random(0, PRODUCTS.length-1)]
    const colors = COLORS[random(0, COLORS.length-1)]

    return `${product} ${colors}`;
}

function getProduct() {
    return {
        id: ++lastIndex,
        title: getProductName(),
        price: random(99, 999)
    }
}

function getProductList(count) {
    let products = [];

    for (let i=0; i<count; i++){
        products.push(getProduct());
    }
    return products
}

export default getProductList;