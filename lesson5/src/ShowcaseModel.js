import ProductList from "./ProductList.mjs"

export default class ShowcaseModel extends ProductList {
    constructor(apiHandler, eventEmitter, cart) {
        super([])
        this.list = []
        this.api = apiHandler
        this.cart = cart
        this.eventEmitter = eventEmitter
    }

    fetch(onError) {
        this.api.getCatalog(
            (data) => {
                this.list = JSON.parse(data)
                this.eventEmitter.emit('showcaseFetched', this.list)
            },
            onError
        )
    }

    buy(id, onError) {
        const product = this.find(id)
        if (product) this.cart.add(product, onError)
    }

    getHtml(product) {
        return `<li id="list__item" class="list__item"><h2 class="list__item-title">${product.title}</h2><p class="list__item-price">${product.price}</p></li>`
    }

    render() {
        const render_list = document.querySelector(".showcase")
        render_list.textContent = ''
            render_list.insertAdjacentHTML('afterbegin', this.list.map(this.getHtml).join(''))
    }

    filter() {
        const searchLine = document.querySelector("#search-line").value
        const regExp = new RegExp(searchLine, 'i')
        this.list = this.list.filter(({title}) => regExp.test(title))

        this.render()
    }
}