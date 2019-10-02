window.onload = function(){
    this.setWindowName();
}

window.onhashchange = function(e){
    console.log(`Data returned from external app`);
    document.querySelector("#parameter").textContent = location.hash.substr(1)
}

function setWindowName(){
    window.name = document.querySelector("#tab_name").value;
    console.log(`window.name = ${ window.name }`);
}

function openExternalApp(){
    window.open("b.html", "ExtenalApp");
}