var accor = document.getElementById("accord");
var btn = document.getElementById("icon");

function openAcc(){
    if(accor.style.height === "50px"){
        accor.style.height = "0px";
        btn.innerHTML = "+"
    }
    else{
        accor.style.height = "50px";
        btn.innerHTML = "-"
    }
}
