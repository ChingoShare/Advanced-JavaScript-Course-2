import ValidateForm from "./ValidateForm.js"
import TextService from "./TextService.js"
// Сменить одиночные ковычки на двойные
const textService = new TextService("text.json");

textService.getText().then(responce => {
	let a = responce.replace(/'\s\b/gm, "'<br>");
	document.querySelector(".change-text").insertAdjacentHTML("beforeend", a);
	let boolChange = true;
	let a2 = a.replace(/\B'|'\B/g, '"')
	document.querySelector(".change-btn").addEventListener("click", e => {
		if (boolChange) {
			document.querySelector(".change-text").innerHTML = a2;
			boolChange = false;
		} else {
			document.querySelector(".change-text").innerHTML = a;
			boolChange = true;
		}
	})
})

// Валидация форм
const validateForm = new ValidateForm();
validateForm.validate(".name", new RegExp("^[a-zA-Zа-яА-ЯёЁ]+$", "gi"));
validateForm.validate(".tel", new RegExp("^\\+7\\(\\d{3}\\)\\d{3}\\-\\d{4}$", "g"));
validateForm.validate(".email", new RegExp("^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]+$", "g"));