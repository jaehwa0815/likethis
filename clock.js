const clockContainer = document.querySelector(".js-clock"),
clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minitues = date.getMinutes();
    const sec = date.getSeconds(); 
    clockTitle.innerText = 
    `${hours < 10 ? `0${hours}`: hours}:${
       minitues < 10 ? `0${minitues}` : minitues}:${
       sec < 10 ? `0${sec}` : sec}`;
} 


function init() {
    getTime();
    setInterval(getTime,1000);
}

init();