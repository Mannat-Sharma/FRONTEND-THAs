let numbers = ["A","O","K","M","N","L","S","R"];
numbers = [...numbers, ...numbers];

var memory_values = [];
var memory_cards_ids = [];
var cards_flipped = 0;

Array.prototype.memory_card_shuffle = function(){
    var i = this.length, j, temp;

    while (--i > 0){
        j = Math.floor(Math.random()*(i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}

function newGame(){
    cards_flipped = 0;
    var output = '';
    numbers.memory_card_shuffle();
    for(var i =0; i< numbers.length; i++){
        output += '<div class = "card" id="card_'+i+'"onClick="memoryFlipCard(this,\''+numbers[i]+'\')"></div>';
    }
    document.querySelector(".game").innerHTML = output;
}


function memoryFlipCard(card, val){
   
if (card.innerHTML == "" && memory_values.length<2){
    card.style.background = "gray";
    card.innerHTML = val;

    if (memory_values.length == 0){
        memory_values.push(val);
        memory_cards_ids.push(card.id);

    }
    else if (memory_values.length == 1){
        memory_values.push(val);
        memory_cards_ids.push(card.id);
        if (memory_values[0] == memory_values[1]){
            cards_flipped += 2;
            

            memory_values =[];
            memory_cards_ids = [];

            if (cards_flipped == numbers.length){
                alert("🎉CONGRATS! YOU WON THE GAME");

                document.querySelector(".game").innerHTML = '';
                
                newGame();
            }
        }
            else{
                function flipBack(){
                    var card_1 = document.getElementById(memory_cards_ids[0]);
                    console.log(card_1);
                    var card_2 = document.getElementById(memory_cards_ids[1]);

                    card_1.style.background = "white";
                    card_1.innerHTML = "";

                    card_2.style.background = "white";
                    card_2.innerHTML = "";

                    memory_values = [];
                    memory_cards_ids=[];

                    movesCount--;

                }
            setTimeout(flipBack,500);
            }
        }
    }
}

newGame();
