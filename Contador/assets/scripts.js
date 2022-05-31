let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');
const SUBTRAI = document.getElementById("subtrair");
const ADICIONA = document.getElementById("adicionar");

ADICIONA.addEventListener("click", increment)
SUBTRAI.addEventListener("click", decrement)

function increment() {
	count++;
	CURRENT_NUMBER.innerHTML = count;
}

function decrement() {
	count--;
	CURRENT_NUMBER.innerHTML = count;
}
