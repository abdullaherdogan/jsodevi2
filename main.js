let todoListDom = document.querySelector(".todoList")
let btnAddDom = document.querySelector('.btnAdd')
btnAddDom.addEventListener('click',addTodo)
var xBtn =document.querySelector(".close")
let todoListArray = []

function addTodo(){
    let inputDom = document.querySelector('#inputText')
    if (inputDom.value) {
        var addTodoLi = document.createElement('li')
        addTodoLi.innerHTML=`<span id="spanText">${inputDom.value}</span><span id="close" class="close">X</span>`
        addTodoLi.className="todo"
        todoListDom.appendChild(addTodoLi)
    }
    xBtn = document.querySelector(".close")
    for (let y = 0; y < xBtn?.length; y++) {
    xBtn[y].addEventListener("click",()=>{
        console.log("tiklandiu");
        var div = this.parentElement;
        div.style.display = "none";
    })
}

}

let todoLi = document.querySelector("ul")
todoLi.addEventListener('click',checked)
function checked(e){
    e.target.classList.toggle("checked")
}

for (let y = 0; y < xBtn.length; y++) {
    xBtn[y].addEventListener("click",()=>{
        console.log("tiklandiu");
        var div = this.parentElement;
        div.style.display = "none";
    })
}


