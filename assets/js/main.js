/*=============== MAIN JS ===============*/

// seleksi elemennya
const inputNameTodo = document.getElementById("nameTodo")
const inputDateTodo = document.getElementById('dateTodo')
const TODOLIST = document.getElementById('containerTODOLIST')

const deleteTodo = document.getElementsByClassName('textDeleteTodo')[0]

const submitTodo = document.getElementById('submitTodo')

// tambah Todo
submitTodo.addEventListener("click", () => {
	let newTodo = `<label class="addTodo" for='centang'><section id='checkboxTodo'><input id="centang" type='checkbox' onclick='toggle(this)'></section><section id='textTodo'><p id='textTitle'> ${inputNameTodo.value}</p><p id='textDate'>${inputDateTodo.value}</p></section><section id='deleteTodo'><p class='textDeleteTodo' onclick='dlt(this)'>DELETE</p></section></label>`

	TODOLIST.insertAdjacentHTML("afterbegin", newTodo)
})

// ambil function
function toggle(el) {
	el.parentElement.parentElement.classList.toggle("coret")
}

// ambil function
function dlt(el) {
	el.parentElement.parentElement.style.display = "none"
}