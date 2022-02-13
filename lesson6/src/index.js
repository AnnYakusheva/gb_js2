import ApiHandler from "./ApiHandler";
import CartModel from "./CartModel.mjs";
import ShowcaseModel from "./ShowcaseModel";
import EventEmitter from "./EventEmitter.mjs";
import './styles/main.scss';

const API_URL = '/api/v1'

const api = new ApiHandler(API_URL)
const eventEmitter = new EventEmitter()

const cart = new CartModel(api, eventEmitter)
const showcase = new ShowcaseModel(api, eventEmitter, cart)

eventEmitter.subscribe('showcaseFetched', (data) => {
    showcase.render()
    document.querySelector('#search-button').addEventListener('click', () => {
        showcase.filter()
        console.log('button was clicked')})
    console.log(data)
})

eventEmitter.subscribe('cartFetched', (data) => {
    console.log(data)
})

showcase.fetch()
cart.fetch()

// setTimeout(() => {
//     showcase.buy(2)
// }, 1000)

// setTimeout(() => {
//     showcase.buy(4)
// }, 2000)

// setTimeout(() => {
//     cart.remove(4)
// }, 3000)