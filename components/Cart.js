export default class Cart {
	constructor(container) {
		this._cart = [];
		this._container = container;
	}
	addElement(item) {
		this._cart.unshift(item);
	}
	deleteElement(item) {
		this._cart.splice( this._cart.indexOf(item), 1 );
	}
	priceSum() {
		return this._cart.reduce((sum, n) => sum += n._price, 0);
	}
	renderCart() {
		let cartList = this._cart.map(
				item => item.render()
			).join(' ');
		let priceSum = `<p>Общая стоимость: ${this.priceSum()} р</p> `;
		if (this._cart.length) {
			document.querySelector(this._container).innerHTML = priceSum + cartList;
		}
		else {
			document.querySelector(this._container).innerHTML = cartList;
		}
		//document.querySelector(this._container).insertAdjacentHTML ('beforeend', cartList/* + priceSum*/);
	}
};