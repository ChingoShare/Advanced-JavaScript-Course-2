import Products from "./components/Products.js";
import ProductItem from "./components/ProductItem.js";
import Cart from "./components/Cart.js";
import CartItem from "./components/CartItem.js";
import ProductService from "./services/ProductService.js";
import UserEventsService from "./services/UserEventsService.js";

const catalog = new Products(".goods-list");
const cart = new Cart(".mini-cart");
const productService = new ProductService("../products.json");
const userEventsService = new UserEventsService();

productService.getProducts().then((response) => {
        response.forEach(newGood => {
            catalog.add(new ProductItem(newGood));
        });
        catalog.renderProducts();
    })


userEventsService.click("add-element", function($element) {
    let find = catalog._products.find(el => el._id === $element.dataset.id);
    cart.addElement(new CartItem(find));
    cart.renderCart();
})
userEventsService.click("delete-element", function($element) {
    let find = cart._cart.find(el => el._id === $element.dataset.id);
    cart.deleteElement(new CartItem(find));
    cart.renderCart();
})
userEventsService.click("cart-button", function($element) {
    const $cart = document.querySelector(".mini-cart")
    if(!$cart.classList.contains('invisible')) {
        $cart.classList.add("invisible")
    } 
    else {
        $cart.classList.remove("invisible")
    }
})