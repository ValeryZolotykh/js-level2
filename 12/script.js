function getCoordiantes(e){
    let currCoordinates = document.querySelector('#current_coordinates');
    currCoordinates.innerHTML = "Coordinates: X: " + e.clientX + " Y: " + e.clientY;
}   

function getLanguage(){
    let currLanguage = document.querySelector('#user_language');
    currLanguage.innerHTML = "Language: " + navigator.language;
}

function getGeolocation(){
    if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showGeolocation);
    }else{
         alert("Geolocation is not supported by this browser.");
    }
}

function showGeolocation(position){
    let currGeolocation = document.querySelector('#user_geolocation');
    currGeolocation.innerHTML = "Geolocation: Ш: "+ position.coords.latitude + " Д: " +  position.coords.longitude;
}

getLanguage();
getGeolocation();