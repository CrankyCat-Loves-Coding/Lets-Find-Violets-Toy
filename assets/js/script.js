// add quiz questions
const questionBank = [
    {
        question: 'One day I was playing, I left for a snack, My ball was missing when I came back! I feel ... ...',
        a: 'assets/images/q1/sad.png',
        b: 'assets/images/q1/scared.png',
        c: 'assets/images/q1/sleeping.png',
        d: 'assets/images/q1/smile.png',
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
const questionEl = document.getElementById('show-quiz');
const letsgo = document.getElementById ('letsgo');
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
    letsgo.classList.add ('hide');
    questionEl.classList.remove ('hide');
    loadQuiz();
}; 

let currentquestion = 0;
loadQuiz()
let score = 0;

function loadQuiz() {
    console.log(currentquestion)

    deselectAnswers() 
    const quizData = questionBank[currentquestion]
    questionEl.innerText = quizData.question
    a.src = quizData.a
    b.src = quizData.b
    c.src = quizData.c
    d.src = quizData.d
};



function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function nextQuestion (){
    for (let i = 0; i < questionBank.length; i++){
        if (i < questionBank.length){

            nextButton.classList.remove ('hide');
            console.log('answered!');
        } else {
            nextButton.classList.add ('hide');
        }
    }
};

function selected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

nextButton.addEventListener ('click', ()=>{
    const answer = selected()
    if (answer){
        if(answer === questionBank[currentquestion].correct){
            score++
        }
        currentquestion++
        if(currentquestion < questionBank.length) {
            loadQuiz()
        } else {
            currentquestion = 0;
            startButton.innerText = 'Restart';
            startButton.classList.remove ('hide');
            nextButton.classList.add ('hide');
            showAnswers.classList.add ('hide');
        }
    }
});