export default class ProductService {
	constructor(url) {
		this._url = url;
	}
	getProducts() {
		return fetch(this._url)
			.then((response) => {
				return response.json()
			})
			.catch((err) => {
				console.log(err)
			})
	}
}