console.log("that is so cool");

const what = "scrub";
console.log(what);
const array =[true,false];
console.log(array);

const object1 = {
    name : "jaehwa",
    age: 30,
    gender:"male",
    ishansome:true
};

console.log(object1.name);


const doc = document.querySelector("#do");

console.log(doc);
/*
doc.innerHTML = "lobe";
doc.style.color = "red";
console.dir(doc);
const BASE_COLOR = "red";
const CHANGE ="yellow";
function clickhandler(){
    const current = doc.style.color;
    if(current === CHANGE){
        doc.style.color = BASE_COLOR;
    }else{
        doc.style.color = CHANGE;
    }
}
function init(){
    doc.style.color = BASE_COLOR;
    doc.addEventListener("click", clickhandler);
}

init();


const CLASSNAME = "clicked";
function clickHandler(){
    const CURRENT_CLASS = doc.classList.contains(CLASSNAME);
    if(!CURRENT_CLASS){
        doc.className = CLASSNAME;
    }else{
        doc.className = "btn";
    }
}

function init(){
    doc.addEventListener("click",clickHandler);
}

init();
*/

const CLASSNAME = "clicked"
function handle(){
    const hasCLASS = doc.classList.contains(CLASSNAME);
    if(!hasCLASS){
        doc.classList.add(CLASSNAME);
    }else{
        doc.classList.remove(CLASSNAME);
    }
}
function init(){
    doc.addEventListener("click",handle);
}
init();