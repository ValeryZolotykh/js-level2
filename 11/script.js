function showCoordinates(e){
    let currCoordinates = document.querySelector('#current_coordinates');
    let currLanguage = document.querySelector('#user_language');
    currCoordinates.innerHTML = "Coordinates: X: " + e.clientX + " Y: " + e.clientY;
    currLanguage.innerHTML = "Language: " + navigator.language;
}
