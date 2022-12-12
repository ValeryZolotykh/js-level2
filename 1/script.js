function changeVisibility1() {
    document.getElementById("black_square").style.display = "none";
}

function changeVisibility2(){
    document.getElementById("black_square").remove();
    // document.getElementById("black_square").parentNode.removeChild(document.getElementById("black_square"));
}

function changeVisibility3(){
    document.getElementById("black_square").classList.add("hidden");
}