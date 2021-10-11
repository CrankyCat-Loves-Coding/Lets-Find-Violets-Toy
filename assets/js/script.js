// add quiz questions
const questionBank = [
    {
        question: 'One day I was playing, I left for a snack, My ball was missing when I came back! I felt ... ...',
        a: 'assets/images/q1/sad.png',
        atext:'Sad',
        b: 'assets/images/q1/scared.png',
        btext:'Scared',
        c: 'assets/images/q1/sleeping.png',
        ctext:'Sleepy',
        d: 'assets/images/q1/smile.png',
        dtext:'Happy',
        correct:'a',
    },
    {
        question: 'It was not by the carrots, not by the peas ... ...Can you find the carrots?',
        a: 'assets/images/q2/broccoli.png',
        atext:'Broccoli',
        b: 'assets/images/q2/carrot.png',
        btext:'Carrot',
        c: 'assets/images/q2/mushroom.png',
        ctext:'Mushroom',
        d: 'assets/images/q2/peas.png',
        dtext:'Peas',
        correct: 'b',
    },
    {
        question: 'It was not by the pear or the apple trees ... ...Can you find the apple?',
        a: 'assets/images/q3/strawberry.png',
        atext:'Strawberry',
        b: 'assets/images/q3/pear.png',
        btext:'Pear',
        c: 'assets/images/q3/banana.png',
        ctext:'Banana',
        d: 'assets/images/q3/apple.png',
        dtext:'Apple',
        correct: 'd',
    },
    {
        question: 'It was not in the grass not by the hose, to find it I needed to follow my nose ... ... Can you find the hose?',
        a: 'assets/images/q4/lawnmower.png',
        atext:'Lawnmower',
        b: 'assets/images/q4/mop.png',
        btext:'Mop',
        c: 'assets/images/q4/hose.png',
        ctext:'Hose',
        d: 'assets/images/q4/watering-can.png',
        dtext:'Watering can',
        correct: 'c',
    },
    {
        question: 'I went in the house, it was not by the books ... ... can you find books?',
        a: 'assets/images/q5/book.png',
        atext:'Books',
        b: 'assets/images/q5/pen.png',
        btext:'Pen',
        c: 'assets/images/q5/picture-frame.png',
        ctext:'Picture Frame',
        d: 'assets/images/q5/vase.png',
        dtext:'Vase',
        correct: 'a',
    },
    {
        question: 'It was not by the sink or the clothes on the hooks ... ... Can you find the sink?',
        a: 'assets/images/q6/toilet-paper.png',
        atext:'Toilet paper',
        b: 'assets/images/q6/toothbrush.png',
        btext:'Toothbrush',
        c: 'assets/images/q6/sink.png',
        ctext:'Sink',
        d: 'assets/images/q6/towel.png',
        dtext:'Towel',
        correct: 'c',
    },
    {
        question: 'So much searching, I took a break for a snack, There it was on the rug, I was happy to have my ball back ... ...Can you find the rug?',
        a: 'assets/images/q7/floor-lamp.png',
        atext:'Lamp',
        b: 'assets/images/q7/rug.png',
        btext:'Rug',
        c: 'assets/images/q7/sofa.png',
        ctext:'Sofa',
        d: 'assets/images/q7/window.png',
        dtext:'Window',
        correct: 'b',
    }
];

/**
 * define DOM elements
 */
const startButton = document.getElementById ('start-btn');
const showAnswers = document.getElementById ('answer-container');
const questionEl = document.getElementById('show-quiz');
const letsgo = document.getElementById ('letsgo');
const answerEls = document.querySelectorAll('.answer');
const a = document.getElementById('a-answer-image');
const b = document.getElementById('b-answer-image');
const c = document.getElementById('c-answer-image');
const d = document.getElementById('d-answer-image');
const atext = document.getElementById('a-image-text');
const btext = document.getElementById('b-image-text');
const ctext = document.getElementById('c-image-text');
const dtext = document.getElementById('d-image-text');
const nextButton = document.getElementById ('next-btn');
const correct = document.querySelector('.corret');
const wrong = document.querySelector('.wrong');
const ball = document.querySelector('.ball');
const violet = document.querySelector('.violet');

/**
 * event listeners
 */
startButton.addEventListener ('click', startGame);
showAnswers.addEventListener ('click', nextQuestion);

/**
 * start game when click start or restart game
 */
function startGame () {
    console.log ('started')
    startButton.classList.add ('hide');
    showAnswers.classList.remove ('hide');
    letsgo.classList.add ('hide');
    questionEl.classList.remove ('hide');
    ball.classList.add ('hide');
    violet.classList.add ('hide');
    loadQuiz();
}; 

/**
 * to load quiz
 */
let currentquestion = 0;
loadQuiz()

function loadQuiz() {
    console.log(currentquestion)
    
    deselectAnswers() 
    const quizData = questionBank[currentquestion]
    questionEl.innerText = quizData.question
    a.src = quizData.a
    b.src = quizData.b
    c.src = quizData.c
    d.src = quizData.d

    atext.innerText = quizData.atext
    btext.innerText = quizData.btext
    ctext.innerText = quizData.ctext
    dtext.innerText = quizData.dtext

};


/**
 * deselect answer when start a new question
 */
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

/**
 * move to next question
 */
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


/**
 * check answer and diplay correct/wrong message after answer selected 
 */

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
            correct.classList.remove ('hide');
            wrong.classList.add ('hide');
            ball.classList.add ('hide');
            violet.classList.remove ('hide');
            violet.style.animation = 'violet 3s linear infinite';
            

        }else {
            correct.classList.add ('hide');
            wrong.classList.remove ('hide');
            ball.classList.remove ('hide');
            violet.classList.add ('hide');
            ball.style.animation = 'ball 3s linear infinite';
            
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
            wrong.classList.add ('hide');
            correct.classList.add ('hide');
            questionEl.innerText = 'Well done! You have helped me find the ball. Thank you!';
            ball.classList.remove ('hide');
            violet.classList.remove ('hide');
            ball.style.animation = 'ball 3s linear infinite';
            violet.style.animation = 'violet 3s linear infinite';
        }
    }
});