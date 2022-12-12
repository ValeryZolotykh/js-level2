function getPicture(){
    let valueInput = document.getElementById("textarea").value;
    const allValueInput = valueInput.split("\n");
    for (let i=0; i<allValueInput.length; i++){
        const newImg = document.createElement("img");
        newImg.src = allValueInput[i];
        document.body.appendChild(newImg);
    } 
}
