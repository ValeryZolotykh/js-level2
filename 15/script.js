function showMessage1(){
    alert("Нажали на первый большой блок");
}
function showMessage2(event){
    alert("Нажали на первый маленький блок");
    event.stopPropagation();
}