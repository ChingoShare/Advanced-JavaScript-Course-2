import Products from "./components/Products.js";
import ProductItem from "./components/ProductItem.js";
import Cart from "./components/Cart.js";
import CartItem from "./components/CartItem.js";

const catalog = new Products(".goods-list");
const cart = new Cart(".mini-cart")
fetch('products.json')
    .then((response) => {
        return response.json()
    })
    .then((response) => {
        response.forEach(newGood => {
            catalog.add(new ProductItem(newGood));
        });

        catalog.renderProducts();
    })
    .catch((err) => {
        console.log(err)
    })

document.addEventListener("click", e => {
    if (e.target.classList.contains('add-element')) {
        let find = catalog._products.find(el => el._id === e.target.dataset.id);
        cart.addElement(new CartItem(find));
        cart.renderCart();
    } 
    if (e.target.classList.contains('delete-element')) {
        let find = cart._cart.find(el => el._id === e.target.dataset.id);
        cart.deleteElement(find);
        cart.renderCart();
    } 
    if (e.target.classList.contains('cart-button')) {
        const $element = document.querySelector(".mini-cart")
        if(!$element.classList.contains('invisible')) {
            $element.classList.add("invisible")
        } 
        else {
            $element.classList.remove("invisible")
        }
    }
})