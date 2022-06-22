function verificarArray(array) {
    if (!array) return -1;
    if (!array.length) return -1;
    else {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === 0) {
                console.log(`O valor desse elemento ja é zero!`);
            } else if (array[i] % 2 === 0) {
                console.log(`O ${array[i]} foi atualizado para 0`);
                array[i] = 0;
            } else if (typeof array[i] !== "number"){
                console.log(`O ${array[i]} não é do tipo number`);
            }
        }
    }
    return array;
}
let teste = [1, "3", 4, 6, 80, 33, 23, 90]
console.log(verificarArray(teste));