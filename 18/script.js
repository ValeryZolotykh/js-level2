let fileUploadArea = document.getElementById('upload-file__label');
let textUploadArea = document.getElementById('upload-file__text');

function addNameOfFile(file){
    textUploadArea.textContent = file.files[0].name;
    fileUploadArea.classList.add('successful_upload');
}

fileUploadArea.ondragover = function () {
    this.classList.add('hover');
    return false;
};

fileUploadArea.ondragleave = function () {
    this.classList.remove('hover');
    return false;
};

fileUploadArea.ondrop = function (e) {
    e.preventDefault();
    this.classList.remove('hover');
    this.classList.add('successful_upload');
    textUploadArea.textContent = e.dataTransfer.files[0].name;
};