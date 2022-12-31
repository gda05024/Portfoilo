const API_KEY = "502714af0ea3d520d737645089c63e23";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("you live in", lat, lng);
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    fetch(url)
}
function onGeoError(){
    alert("can't find you. NO weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); 