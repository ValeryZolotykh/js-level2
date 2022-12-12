function changeVisibility(){
    const blackSquares = document.getElementsByClassName("black_square");
    for (let i = 0; i < blackSquares.length; i++){
        blackSquares[i].classList.toggle("hidden");
    }
}