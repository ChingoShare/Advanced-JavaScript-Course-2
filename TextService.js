export default class TextService {
	constructor(url) {
		this._url = url;
	}
	getText() {
		return fetch(this._url)
			.then((response) => {
				return response.text()
			})
			.catch((err) => {
				console.log(err)
			})
	}
}