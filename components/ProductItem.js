export default class ProductItem {
	constructor(item) {
		this._title = item.title;
		this._price = item.price;
		this._description = item.description;
		this._img = item.img;
		this._id = item.id;
	}
	render() {
		return`<div class="goods-item">
		<img class="img-products "src="${this._img || "img/noproduct.png"}" alt="${this._title}">
		<h3>${this._title}</h3>
		<p>${this._price} р</p>
		<p>${this._description}</p>
		<button class="add-element" data-id="${this._id}">Купить</button>
		</div>`;
	}
};