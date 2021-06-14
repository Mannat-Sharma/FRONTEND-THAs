let myColor = ["Red", "Green", "White", "Black"];

function joinElements(arr){
    let joinedByComma = arr.join(",");
    console.log(joinedByComma);
    let joinedByPlus = arr.join("+");
    console.log(joinedByPlus);
}

joinElements(myColor);
