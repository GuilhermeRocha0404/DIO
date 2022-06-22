function soma(num1, num2) {
    const valores = function inserir_valores(num1, num2) { };
    let resultado = num1 + num2;
    if (num1 == num2) {
        if (resultado > 10 && resultado < 20) {
            return `Os números ${num1} e ${num2} são iguais. Sua soma é ${resultado}, que é maior que 10 e menor que 20.`;
        } else if (resultado < 10 && resultado < 20) {
            return `Os números ${num1} e ${num2} são iguais. Sua soma é ${resultado}, que é menor que 10 e menor que 20.`;
        } else if (resultado > 10 && resultado > 20) {
            return `Os números ${num1} e ${num2} são iguais. Sua soma é ${resultado}, que é maior que 10 e maior que 20.`;
        } else if (resultado == 10 && resultado > 20) {
            return `Os números ${num1} e ${num2} são iguais. Sua soma é ${resultado}, que é igual a 10 e maior que 20.`;
        } else if (resultado == 10 && resultado < 20) {
            return `Os números ${num1} e ${num2} são iguais. Sua soma é ${resultado}, que é igual a 10 e menor que 20.`;
        } else if (resultado > 10 && resultado == 20) {
            return `Os números ${num1} e ${num2} são iguais. Sua soma é ${resultado}, que é maior que 10 e igual a 20.`;
        } else if (resultado < 10 && resultado == 20) {
            return `Os números ${num1} e ${num2} são iguais. Sua soma é ${resultado}, que é menor que 10 e igual a 20.`;
        } else {
            return "Valores inválidos";
        }
    } else {
        if (resultado > 10 && resultado < 20) {
            return `Os números ${num1} e ${num2} não são iguais. Sua soma é ${resultado}, que é maior que 10 e menor que 20.`;
        } else if (resultado < 10 && resultado < 20) {
            return `Os números ${num1} e ${num2} não são iguais. Sua soma é ${resultado}, que é menor que 10 e menor que 20.`;
        } else if (resultado > 10 && resultado > 20) {
            return `Os números ${num1} e ${num2} não são iguais. Sua soma é ${resultado}, que é maior que 10 e maior que 20.`;
        } else if (resultado == 10 && resultado > 20) {
            return `Os números ${num1} e ${num2} não são iguais. Sua soma é ${resultado}, que é igual a 10 e maior que 20.`;
        } else if (resultado == 10 && resultado < 20) {
            return `Os números ${num1} e ${num2} não são iguais. Sua soma é ${resultado}, que é igual a 10 e menor que 20.`;
        } else if (resultado > 10 && resultado == 20) {
            return `Os números ${num1} e ${num2} não são iguais. Sua soma é ${resultado}, que é maior que 10 e igual a 20.`;
        } else if (resultado < 10 && resultado == 20) {
            return `Os números ${num1} e ${num2} não são iguais. Sua soma é ${resultado}, que é menor que 10 e igual a 20.`;
        } else {
            return "Valores inválidos";
        }
    }
}
console.log(soma(7, 7));