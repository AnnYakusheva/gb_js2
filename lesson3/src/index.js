import ApiHandler from "./ApiHandler";
import CartModel from "./CartModel.mjs";
import ShowcaseModel from "./ShowcaseModel";
import EventEmitter from "./EventEmitter.mjs";

const API_URL = '/api/v1'

const api = new ApiHandler(API_URL)
const eventEmitter = new EventEmitter()

const cart = new CartModel(api, eventEmitter)
const showcase = new ShowcaseModel(api, eventEmitter, cart)

eventEmitter.subscribe('showcaseFetched', (data) => {
    console.log(data)
})

eventEmitter.subscribe('cartFetched', (data) => {
    console.log(data)
})

showcase.fetch()
cart.fetch()

// eventEmitter.subscribe('showcaseFetched', () => {
//     showcase.buy(5)
// })

eventEmitter.subscribe('cartFetched', () => {
    cart.remove(2)
})