export default class CartItem {
	constructor(item) {
		this._title = item._title;
		this._price = item._price;
		this._description = item._description;
		this._img = item._img;
		this._id = item._id;
	}
	render() {
		return`<div class="cart-item">
				<img class="img-cart" src="${this._img || "img/noproduct.png"}" alt="${this._title}">
				<div class="cart-info">
					<h3>${this._title}</h3>
					<p>${this._price} р</p>
					<p>${this._description}</p>
				</div>
				<button class="delete-element" data-id="${this._id}">Удалить</button>
			</div>`;
	}
};