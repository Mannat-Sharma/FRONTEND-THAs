var container = document.querySelector(".container");
var bookedText = document.getElementById("booked-text");
var remainingText = document.getElementById("remaining-text")

for (let i=0;i<90;i++){
    container.innerHTML += '<div class="box""></div>';
}

var boxes = document.querySelectorAll(".box");
var bookedSeats = document.querySelectorAll(".booked-box").length;
var totalSeats = boxes.length;

boxes.forEach((item)=>{
    item.addEventListener('click', () =>{
        if (item.classList.contains("booked-box")){
            item.classList.remove("booked-box");
            bookedSeats--;
            totalSeats++;
            bookedText.innerHTML = bookedSeats;
            remainingText.innerHTML = totalSeats;
            console.log(bookedSeats, totalSeats)
        }
        else{
            item.classList.add("booked-box");
            bookedSeats++;
            totalSeats--;
            bookedText.innerHTML = bookedSeats;
            remainingText.innerHTML = totalSeats;
            console.log(bookedSeats, totalSeats)
        }
    })
})

    
