const question = [
    {
        question: "Qual o tamanho da si",
        answer:[
            {text: "jdnijrv", correct: "false"},
            {text: "tyntntntnuyik", correct: "false"},
            {text: "dsdvsd", correct: "true"},
            {text: "sdvsdv", correct: "false"}
        ]
    },
    {
        question:"O que é um cachorro?",
        answer:[
            {text: "<NAME>",correct : false},
            {text :"Cão-de-guarda",  correct: true},
            {text: "Rato de estimação",   correct: false},
            {text: "berbeb",    correct: "false"}
        ]
    }
];

const questionElement = document.getElementById("question");
const nextButton = document.getElementById("next-btn");
const answerButton = document.getElementById("answer-buttons");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();

}

function showQuestion(){
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestion = 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML= answer.text ;
        button.classList.add("btn");
        answerButton.appendChild(button); 
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

    function resetState(){
        nextButton.style.display = "none";
        while(answerButton.firstChild){
            answerButton.removeChild (answerButton.firstChild);
        }
    }

    function selectAnswer(){
        const selectedBtn = e.target;
        const isCorrect =selectedBtn.dataset.correct === "true";
        if(isCorrect){
            selectedBtn.classList.add("correct");
        } else{
            selectedBtn.classList.add("incorret");
        }
        Array.from(answerButton.children).forEach(button =>{
            if(button.dataset.correct === "true"){
                button.classList.add("correct");
            }
            button.disabled = true;
        });
        nextButton.style.display = "block";
    }

startQuiz();