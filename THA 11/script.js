questionBank = [
    {
        "question": "What is Wi-Fi?",
        "option1": "A type of wireless network",
        "option2": "A type of software that scans for viruses",
        "option3": "An extra-wide computer case used by servers",
        "option4": "A type of sound card",
        "answer": "A type of wireless network",
    },
    {
        "question": "What is software?",
        "option1": "Instructions that tell the hardware what to do",
        "option2": "Flexible parts of a computer case",
        "option3":  "Clothing designed to be worn by computer users",
        "option4": "Any part of the computer that has a physical structure",
        "answer": "Instructions that tell the hardware what to do",
    },
    {
        "question": "The computer’s main circuit board is called a ________.",
        "option1": "monitor",
        "option2": "Bluetooth card",
        "option3": "hard drive",
        "option4": "motherboard",
        "answer": "motherboard",
    },
    {
        "question": "RAM is like a computer’s ________, while a hard drive is like a computer’s ________.",
        "option1": "brain/nervous system",
        "option2": "short-term memory/long-term memory",
        "option3": "nervous system/brain",
        "option4": "long-term memory/short-term memory",
        "answer": "short-term memory/long-term memory",
    },
    {
        "question": "What is an Ethernet port used for?",
        "option1": "Connecting to the Internet",
        "option2": "Providing power to the computer",
        "option3": "Connecting smartphones and other peripherals",
        "option4": "Creating new user accounts",
        "answer": "Connecting to the Internet",
    },
]

var ques = document.querySelector(".question");
var option1 = document.querySelector(".option1");
var option2 = document.querySelector(".option2");
var option3 = document.querySelector(".option3");
var option4 = document.querySelector(".option4");
var nextButton = document.querySelector(".next");
var scoreBoard = document.querySelector(".score-board");
var questionCount = document.querySelector(".question-count");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

const totalQuestions = 5;

function game(){
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questionBank];
    getQuestion();
}

function getQuestion(){
    questionCounter++;
    if (questionCounter>=6){
        alert("You reached the end pf the quiz");
    }
    questionCount.innerHTML = questionCounter+"/"+totalQuestions;
    let number = Math.floor(Math.random()*availableQuestions.length);
    currentQuestion = availableQuestions[number];
    ques.innerHTML = currentQuestion.question;
    option1.innerHTML = currentQuestion.option1; 
    option2.innerHTML = currentQuestion.option2;
    option3.innerHTML = currentQuestion.option3;
    option4.innerHTML = currentQuestion.option4;
    availableQuestions.splice(number, 1);

    acceptingAnswers = true;
}



let choices = [option1, option2, option3, option4];

choices.forEach(choice =>{
    choice.addEventListener('click', e =>{
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedOption = e.target;
        console.log(selectedOption);
        const correctAnswer = currentQuestion.answer;
        console.log(correctAnswer);
        if (selectedOption.innerHTML === correctAnswer){
            score++;
            scoreBoard.innerHTML = "Score: "+score +"/"+totalQuestions;
            choice.classList.add("correct");
        }
        else{
            choice.classList.add("wrong");
        }
    })
})

nextButton.addEventListener('click', () =>{
    getQuestion();
    choices.forEach(choice => {
        if (choice.classList.contains("correct")){
            choice.classList.remove("correct");
        }

        else if (choice.classList.contains("wrong")){
            choice.classList.remove("wrong");
        }
    })
})


game();
