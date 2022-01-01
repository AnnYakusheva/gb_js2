import getProductList from "./mock/data";
import renderGoodsList from "./showcase";
import './styles/main.scss'

const productList = getProductList(10);


renderGoodsList(productList);

console.log(productList);