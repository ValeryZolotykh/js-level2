function showGraySquare(){
    // document.getElementById("gray_square").classList.toggle("hidden");
    document.getElementById("gray_square").style.visibility = "visible";
    document.body.style.overflow="hidden";
}

function hideGraySquare(){
    document.getElementById("gray_square").style.visibility = "hidden";
    document.body.style.overflow="scroll";
}