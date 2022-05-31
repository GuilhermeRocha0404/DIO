let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');
const SUBTRAIR = document.getElementById("subtrair");
const ADICIONAR = document.getElementById("adicionar");

ADICIONAR.addEventListener("click", increment);
ADICIONAR.addEventListener("click", verificarNegativo)
SUBTRAIR.addEventListener("click",decrement);
SUBTRAIR.addEventListener("click", verificarNegativo)

function increment() {
	count++;
	CURRENT_NUMBER.innerHTML = count;
	if(CURRENT_NUMBER.innerText === "5"){
		ADICIONAR.disabled = true
	}
	else{
		SUBTRAIR.disabled = false
	}
}

function decrement() {
	count--;
	CURRENT_NUMBER.innerHTML = count;
	if(CURRENT_NUMBER.innerText === "-5"){
		SUBTRAIR.disabled = true
	}
	else{
		ADICIONAR.disabled = false
	}
}

function verificarNegativo(){
	if(CURRENT_NUMBER.innerText < "0"){
		CURRENT_NUMBER.style.color = "red"
	}
	else if(CURRENT_NUMBER.innerText > "0"){
		CURRENT_NUMBER.style.color = "yellow"
	}
	else{
		CURRENT_NUMBER.style.color = "black"
	}
}