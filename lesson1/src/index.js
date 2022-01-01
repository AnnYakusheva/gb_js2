import getProductList from "./mock/data";
import renderGoodsList from "./showcase";


const productList = getProductList(20);


renderGoodsList(productList);

console.log(productList);