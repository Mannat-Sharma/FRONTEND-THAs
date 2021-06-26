var box = document.querySelector(".center");

for (let i=0; i<400; i++){
    box.innerHTML += '<div class = "red-box" onclick="changeColor(this)"></div>';
}

function changeColor(j){
    j.classList.toggle("white-box");
}
