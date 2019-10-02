window.onload = function(){
    document.querySelector("#tab_name").value = window.name;
    console.log(`window.name = ${ window.name }`);
}

function confirmAndReturn(){
    var sParameter = document.querySelector("#parameter").value;
    window.open("a.html#" + sParameter, "app");
}