function showCoordinates(e){
    let currCoordinates = document.querySelector('#current_coordinates');
    currCoordinates.innerHTML = "Coordinates: X: " + e.clientX + " Y: " + e.clientY;
}
