let localStorage = window.localStorage;
let sessionStorage = window.sessionStorage;

function checkLocalStorage(){  
    let textarea = document.getElementById("textarea1"); 
    if(localStorage){
        textarea.innerHTML = localStorage.getItem('valueOfTextarea');
        localStorage.clear();
    }else{
        alert("LocalStorage не підтримує Ваш браузер");
    }
}
function saveValueForLocal(){
    let textareaValue = document.getElementById("textarea1").value;
    if(localStorage.getItem('valueOfTextarea')==null){
        localStorage.setItem('valueOfTextarea', textareaValue);
    }
}
//_____________________________________________________________________
function setCookie(){
    document.cookie="valueOfTextarea="+document.getElementById("textarea2").value;
}

function checkCookies(){
    document.getElementById("textarea2").innerHTML = getCookie();
}

function getCookie(){
    let value = document.cookie.split("; ").filter(item => item.includes("valueOfTextarea="))[0].split("=");
    return value.length>1 ? value[1] : "";
}
//_____________________________________________________________________

function checkSessionStorage(){
    let textarea = document.getElementById("textarea3"); 
    if(sessionStorage){
        textarea.innerHTML = sessionStorage.getItem('valueOfTextarea');
        sessionStorage.clear();
    }else{
        alert("LocalStorage не підтримує Ваш браузер");
    }
}
function saveValueForSession(){
    let textareaValue = document.getElementById("textarea3").value;
    if(sessionStorage.getItem('valueOfTextarea')==null){
        sessionStorage.setItem('valueOfTextarea', textareaValue);
        alert(textareaValue)
    }
}