
var input = document.querySelector("input");
var addButton = document.querySelector(".add-btn");
var todolist = document.querySelector(".todolist");

addButton.addEventListener('click', () =>{
    if(input.value){
    todolist.innerHTML += '<li>'+input.value+'<span><i class="fas fa-check"></i><i class="fas fa-trash"></i></span></li>';
    input.value ="";
    }
    else{
        alert("⚠️ Add something as a TODO")
    }
})

document.querySelector("ul").addEventListener('click', function(event){
    if (event.target.className === "fas fa-trash"){
        if (event.target.tagName === "I"){
            event.target.parentElement.parentElement.remove();
        }
        if (event.target.tagName === "LI"){
            event.target.parentElement.remove();
        }
    }
    if (event.target.className === "fas fa-check"){
        event.target.parentElement.parentElement.classList.toggle('completed');
    }
})
