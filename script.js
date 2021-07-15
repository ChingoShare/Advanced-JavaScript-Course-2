const goods = [
    { title: 'Shirt', price: 150, description: 'The best shirt in the world!', img: 'img/Shirt.jpg' },
    { title: 'Socks', price: 50, description: 'The best socks in the world!', img: 'img/Socks.jpg' },
    { title: 'Jacket', price: 350, description: 'The best jacket in the world!', img: 'img/Jacket.jpg' },
    { title: 'Shoes', price: 250, description: 'The best shoes in the world!', img: 'img/Shoes.jpg' },
];

class Products {
	products = goods;
	constructor(selector) {
		this.pageAdd(selector, ProductItem);
	}
	pageAdd(selector, item) {
		const product = new item();
		const productsList = this.products.reduce((pList, p) => pList += product.render(p), "");
		document.querySelector(selector).innerHTML = `<h2>Общая стоимость: ${this.priceSum()} р</h2>` + productsList;
	}
	//Метод для сложения цен
	priceSum() {
		return this.products.reduce((sum, n) => sum += n.price, 0);
	}
};
class ProductItem {
	constructor() {
	}
	render(p) {
		return`<div class="goods-item">
        <img src="${p.img || "img/noproduct.png"}" alt="${p.title}">
        <h3>${p.title}</h3>
        <p>${p.price} р</p>
        <p>${p.description}</p>
        <button>Купить</button>
        </div>`;
	}
	
};

class Cart {
	constructor(selector) {
	}
	deleteElement() {}
	addElement() {}
};
class CartItem {
	constructor() {
	}
	render(p) {
		return`<div class="cart-item">
				<img src="${p.img || "img/noproduct.png"}" alt="img">
				<h3>${p.title}</h3>
				<p>${p.price} р</p>
				<button class="btn-cart-item">Удалить</button>
			</div>`;
	}
};
const catalog = new Products(".goods-list");




//Задание про гамбургеры
class Hamburger {
	price = 0;
	calory = 0;
	constructor(size = "маленький", stuffing = "с сыром"){

		if (size === "маленький") {
			this.price += 50;
			this.calory += 20;
		}
		if (size === "большой") {
			this.price += 100;
			this.calory += 40;
		}
		if (stuffing === "с сыром") {
			this.price += 10;
			this.calory += 20;
		}
		if (stuffing === "с салатом") {
			this.price += 20;
			this.calory += 5;
		}
		if (stuffing === "с кортофелем") {
			this.price += 15;
			this.calory += 10;
		}
	}

	addSpice() {
		this.price += 15;
		this.calory += 0;
	}

	addSouse() {
		this.price += 20;
		this.calory += 5;
	}

}
const burger = new Hamburger("большой", "с салатом");
burger.addSouse();
burger.addSpice();
console.log(burger.price); // 155
console.log(burger.calory); // 50




