export default class ValidateForm {
	constructor() {
		this._error = document.querySelector(".error")
	}
	validate(selector, regexp) {
		document.querySelector(".submit").addEventListener("click", () => {
			const $element = document.querySelector(selector);
			if (!regexp.test($element.value)) {
				$element.classList.add("error-form");
				this._error.classList.remove("invisible")
				this.errorHide($element);
			}
		})
	}
	errorHide($form) {
		setTimeout(() => {
			$form.classList.remove("error-form");
			this._error.classList.add("invisible");
		}, 3e3)
	}
}