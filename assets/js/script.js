// add quiz questions
const questionBank = [
    {
        question: 'q1?',
        a: 'assets/images/beach-ball.png',
        b: 'assets/images/beach-ball.png',
        c: 'assets/images/beach-ball.png',
        d: 'assets/images/beach-ball.png',
    },
    {
        question: 'q2?',
        a: 'assets/images/rejection.png',
        b: 'assets/images/rejection.png',
        c: 'assets/images/rejection.png',
        d: 'assets/images/rejection.png',
    }
];

const questionEl = document.getElementById('question-container');
const a = document.getElementById('a-answer-image')
const b = document.getElementById('b-answer-image')
const c = document.getElementById('c-answer-image')
const d = document.getElementById('d-answer-image')

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