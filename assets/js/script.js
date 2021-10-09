// add quiz questions
const questionBank = [
    {
        question: 'q1?',
        a: 'assets/images/beach-ball.png',
        b: 'assets/images/beach-ball.png',
        c: 'assets/images/beach-ball.png',
        d: 'assets/images/beach-ball.png',
        correct:'a',
    },
    {
        question: 'q2?',
        a: 'assets/images/rejection.png',
        b: 'assets/images/rejection.png',
        c: 'assets/images/rejection.png',
        d: 'assets/images/rejection.png',
        correct: 'b',
    }
];

const startButton = document.getElementById ('start-btn');
const showAnswers = document.getElementById ('answer-container');
const questionEl = document.getElementById('question-container');
const answerEls = document.querySelectorAll('.answer');
const a = document.getElementById('a-answer-image');
const b = document.getElementById('b-answer-image');
const c = document.getElementById('c-answer-image');
const d = document.getElementById('d-answer-image');
const nextButton = document.getElementById ('next-btn');


startButton.addEventListener ('click', startGame);
showAnswers.addEventListener ('click', nextQuestion);

function startGame () {
    console.log ('started')
    startButton.classList.add ('hide');
    showAnswers.classList.remove ('hide');
    loadQuiz();
}; 

let question = 0;
loadQuiz()

function loadQuiz() {
    const quizData = questionBank[question]

    questionEl.innerText = quizData.question
    a.src = quizData.a
    b.src = quizData.b
    c.src = quizData.c
    d.src = quizData.d
}

function nextQuestion (){
    for (let i = 0; i < questionBank.length; i++){
        if (i < questionBank.length){
            nextButton.classList.remove ('hide');
            console.log('answered!');
        } else {
            nextButton.classList.add ('hide');
            startButton.innerText = 'Restart';
            startButton.classList.remove ('hide');
        }
    }
};