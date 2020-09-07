// burger function

var burger = document.querySelector(".burger");
var container = document.querySelector(".container");


burger.onclick = function(){

    if(container.style.display == "none")
        container.style.display = "block";
    else
        container.style.display = "none";

}
