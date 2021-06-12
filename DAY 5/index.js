"use strict";
let firstnum = document.getElementById("num1");

let secondnum = document.getElementById("num2");

let output = document.getElementById("output");

document.getElementById("add-btn").addEventListener("click", add);
document.getElementById("subtract-btn").addEventListener("click", subtract);
document.getElementById("multiply-btn").addEventListener("click", multiply);
document.getElementById("divide-btn").addEventListener("click", divide);

function add() {
    let sum = parseFloat(firstnum.value) + parseFloat(secondnum.value);
    console.log(isNaN(sum));
    if (isNaN(sum)){
        output.innerText = "⚠️Invalid Input. Try putting number as input.";
        return output;
    }
    output.innerText = "Result: " + sum;
}
function subtract() {
    let diff = parseFloat(firstnum.value) - parseFloat(secondnum.value);
    if (diff === NaN){
        output.innerText = "⚠️Invalid Input. Try putting number as input.";
        return output;
    }
    output.innerText = "Result: " + diff;
}
function multiply(){
    let product = parseFloat(firstnum.value) * parseFloat(secondnum.value);
    if (product == NaN){
        output.innerText = "⚠️Invalid Input. Try putting number as input.";
        return output;
    }
    output.innerText = "Result: " + product;
}
function divide() {
    let div = parseFloat(firstnum.value) / parseFloat(secondnum.value);
    if (div == NaN){
        output.innerText = "⚠️Invalid Input. Try putting number as input.";
        return output;
    }
    output.innerText = "Result: " +  div;
}

