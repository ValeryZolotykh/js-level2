function showMessage(){
    alert("Привет");
    let square = document.getElementById("yellow_square");
    square.setAttribute("onclick", "changeVisibility()");
}

function changeVisibility(){
    document.getElementById("yellow_square").style.display = "none"; 
    let square = document.getElementById("yellow_square");
    square.setAttribute("onclick", "showMessage()");
}