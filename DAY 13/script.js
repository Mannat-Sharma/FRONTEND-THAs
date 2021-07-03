const api_url = "https://api.quotable.io/random";
var generateBtn = document.querySelector(".generate-btn");
generateBtn.addEventListener('click', async () =>{

    fetch(api_url)
    .then(res => res.json())
    .then(data => {
        console.log(data.content);
        var quote = data.content;
        document.querySelector(".quote").innerHTML = quote;
    })
})
