const body = document.querySelector("body");

const ImgCount = 5;
function paintImg(num){
    const img = new Image();
    img.src = `Images/${num+1}.jpg`;
    console.log(img.src);
    body.appendChild(img);
    img.classList.add("bgImg");
}

function genRandom (){
    const number = Math.floor(Math.random() * ImgCount );
    console.log(number);
    return number;

}

function init() {
    const randomNumber= genRandom();
    paintImg(randomNumber);
}

init();