export default class Products {
	constructor(container) {
		this._products = [];
		this._container = container;
	}
	add(item) {
		this._products.push(item);
	}
	priceSum() {
		return this._products.reduce((sum, n) => sum += n._price, 0);
	}
	renderProducts() {
		let productList = this._products.map(
				item => item.render()
			).join(' ');
		//let priceSum = `<h2>Общая стоимость: ${this.priceSum()} р</h2> `;
		document.querySelector(this._container).insertAdjacentHTML ('beforeend', productList/* + priceSum*/);
	}
};