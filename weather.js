const API_KEY = "ac953b866d2d1ba1362162ea48a0b2d6";
const weather = document.querySelector(".js-weather");
const CORDNAME = "cordName";

function getWeather(lat,lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
    .then(function(response){
        console.log(response);
        return response.json();
    })
    .then(function(json){
        console.log(json);
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerHTML = `${temperature} @ ${place}`;
    });
}
function saveCoords(coordsObj){
    localStorage.setItem(CORDNAME,JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj={
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}
function handleGeoError(){
    console.log("we can not get geo location");
}
function getGeoInfo(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);

}

function loadCordName(){
    const localName = localStorage.getItem(CORDNAME);
    if(localName !== null){
        const parsed = JSON.parse(localName);
        getWeather(parsed.latitude,parsed.longitude);
    }else{
        getGeoInfo();
    }

}

function init(){
    loadCordName();
}
init();

