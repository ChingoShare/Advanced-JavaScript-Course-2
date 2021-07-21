export default class UserEventsService {
	click(selector, func) {
		document.addEventListener("click", e => {
			if (e.target.classList.contains(selector)) {
				func(e.target)
			}
		})
	}
}