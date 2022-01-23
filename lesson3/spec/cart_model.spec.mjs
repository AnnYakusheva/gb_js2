import CartModel from "../src/CartModel.mjs";
import EventEmitter from "../src/EventEmitter.mjs";
import MockApi from "../src/MockApi.mjs";
import ProductList from "../src/ProductList.mjs";

const model = new CartModel(new MockApi, new EventEmitter)
console.log(model)

describe('CartModel.fetch', () => {
    it('получение данных', () => {
        model.fetch()
        expect(model.list.length).toBeGreaterThan(0)
    })

    it('добавление товара в корзину', () => {
        model.add({"id":1,"title":"Jacket Gray","price":100})
        expect(model.list).toContain({"id":1,"title":"Jacket Gray","price":100})
    })

    it('удаление товара из корзины', () => {
        model.remove()
        expect(model.list).toEqual([])
    })
})
