const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");
    
    
const TODOS_LS = "toDos";
let toDos =[];

function save(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintText(currentValue);
    save();
    toDoInput.value = "";
}

function deleteToDos (event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(todo){
        return todo.id !== parseInt(li.id);
    })
    toDos = cleanToDos;
    save();
    
}
function paintText(text){
    const deleteBtn = document.createElement("button");
    const span = document.createElement("span");
    const li = document.createElement("li");
    const newId = toDos.length +1;
    deleteBtn.innerText = "x";
    deleteBtn.addEventListener("click",deleteToDos);
    span.innerText = text;
    li.appendChild(deleteBtn);
    li.appendChild(span);
    li.id= newId;
    toDoList.appendChild(li);
    const toDosObject ={
        text : text,
        id : newId
    }
    toDos.push(toDosObject);
    

}

function loadToDos(){
    const localTodos = localStorage.getItem(TODOS_LS);
    if(localTodos !== null){
        const parsedToDos = JSON.parse(localTodos);
        parsedToDos.forEach(function(toDO){
            paintText(toDO.text);
        })
    }
}
function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}

init();

/*const toDoForm = document.querySelector(".js-toDoForm"),
      toDoInput = toDoForm.querySelector("input"),
      toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
let toDos = [];

function loadToDos () {
    const localtoDos = localStorage.getItem(TODOS_LS);
    if(localtoDos !== null){
        const parsedToDos = JSON.parse(localtoDos);
        parsedToDos.forEach(function(toDo){
            paintText(toDo.text);     
        });

    }
}

function deleteToDos(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(todo){
        return todo.id !== parseInt(li.id);
    })
    toDos = cleanToDos;
    save();
    
}

function save(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintText(text){
    const li = document.createElement("li");
    const delButton = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length +1;
    delButton.innerText = "x";
    delButton.addEventListener("click",deleteToDos);
    li.appendChild(delButton);
    span.innerText = text;
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDosObject ={
        text: text,
        id: newId
    }
    toDos.push(toDosObject);
    save();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintText(currentValue);
    toDoInput.value = "";
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}

init();*/