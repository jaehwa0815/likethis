const form = document.querySelector(".js-form"),
input = form.querySelector("input"),
greeting= document.querySelector(".js-greetings");

const localName = "currentUser" 
const SHOW_ON ="showing";

function paintGreeting(text){
    form.classList.remove(SHOW_ON);
    greeting.innerText = `hello ${text}`
}
function save(text){
    localStorage.setItem(localName,text);
}
function handleSubmit(event){
    event.preventDefault();
    const inputValue = input.value;
    paintGreeting(inputValue);
    save(inputValue);
}
function askForName(){
    form.classList.add(SHOW_ON);
    form.addEventListener("submit",handleSubmit)

}
function loadName(){
    form.classList.remove(SHOW_ON);
    greeting.classList.add(SHOW_ON);
    const currentUser = localStorage.getItem(localName);
    if(currentUser === null){
        //askForName
        console.log(currentUser);
        askForName();
    }
    else{
        //painttext
        paintGreeting(currentUser);
    }

}

function init() {
    loadName();
}
init();

