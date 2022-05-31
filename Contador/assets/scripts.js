let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');
const SUBTRAIR = document.getElementById("subtrair");
const ADICIONAR = document.getElementById("adicionar");

ADICIONAR.addEventListener("click", increment);
SUBTRAIR.addEventListener("click", decrement);

function increment() {
	count++;
	CURRENT_NUMBER.innerHTML = count;
	if(CURRENT_NUMBER.innerText > 4){
		ADICIONAR.disabled = true
	}
	else{
		SUBTRAIR.disabled = false
	}
}

function decrement() {
	count--;
	CURRENT_NUMBER.innerHTML = count;
	if(CURRENT_NUMBER.innerText < -4){
		SUBTRAIR.disabled = true
	}
	else{
		ADICIONAR.disabled = false
	}
}
