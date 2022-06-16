const h1 = document.querySelector("#page-title");
const button = document.querySelector("#mode-selector");
const footer = document.getElementsByTagName("footer")[0];
const body = document.getElementsByTagName("body")[0];
const darkModeClass = "dark-mode";

button.addEventListener("click",modeChange)

function modeChange() {
	changeClasses();
	changeText()
}

function changeClasses() {
	h1.classList.toggle(darkModeClass);
	button.classList.toggle(darkModeClass);
	body.classList.toggle(darkModeClass);
	footer.classList.toggle(darkModeClass);
}

function changeText() {
	const darkMode = "Dark Mode";

	if (button.classList.contains(darkModeClass)) {
		button.innerHTML = darkMode;
		h1.innerHTML = darkMode + " ON"
	} else{
		button.innerHTML = darkMode
		h1.innerHTML = darkMode + " OFF"
	}
}