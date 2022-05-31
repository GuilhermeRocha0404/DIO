var contador = 0

const LIST = document.getElementById("listatxt")
const BUTTON = document.getElementById("submit")

BUTTON.addEventListener("click", add_in_list)
BUTTON.addEventListener("click", add_in_list)

function add_in_list(){
    let tarefa = document.getElementById("tarefatxt").value
    contador++
    LIST.innerHTML += `<p class="parágrafo${contador}"> ${tarefa}<input class="checkbox${contador}" type="checkbox" name="checkbox"> </p>`
}