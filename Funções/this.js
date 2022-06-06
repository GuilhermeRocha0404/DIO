function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'João',
	idade: 23,
};

const pessoa2 = {
	nome: 'Márcia',
	idade: 20,
};

console.log(calculaIdade.call(pessoa1, 10));
console.log(calculaIdade.apply(pessoa2, [10]));