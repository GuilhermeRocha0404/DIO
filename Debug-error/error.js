function recebaArray(arr, num) {
  try {
    if (!arr || !num) {
      throw new ReferenceError("Envie os parâmetros");
    } else if (typeof arr !== "object") {
      throw new TypeError("O array precisa ser do tipo object");
    } else if (typeof num !== "number") {
      throw new TypeError("Num precisa ser do tipo number");
    } else if (arr.length !== num) {
      throw new RangeError("Tamanho inválido");
    }
    return arr;
  }
  catch (e) {
    if (e instanceof ReferenceError) {
      console.log("Este é um ReferenceError")
      console.log(e.message)
    } else if(e instanceof TypeError) {
      console.log("Este é um TypeError")
      console.log(e.message)
    } else if(e instanceof RangeError) {
      console.log("Este é um RangeError")
      console.log(e.message)
    }
  }
}
console.log(recebaArray());