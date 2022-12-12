function changeVisibility(){
    let valueInput = document.getElementById("input").value;
    const elements = document.querySelectorAll(valueInput);
    for (let i = 0; i < elements.length; i++){
        elements[i].classList.toggle("hidden");
    }
}