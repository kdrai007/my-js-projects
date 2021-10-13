let quizData = [

    {
        Question: 'Who is pm of india?',
        a: 'Rahul Ghandhi',
        b: 'Arvind Kejriwal',
        c: 'Md Sharif',
        d: 'Narendra Modi',
        correct: "d"
    },
    {
        Question: 'My fav actor?',
        a: 'Akshay Kumar',
        b: 'Ranbir Kapoor',
        c: 'Ajay Devgun',
        d: 'Salman Khan',
        correct: "a"
    },
    {
        Question: 'My fav Language?',
        a: 'Python',
        b: 'c Language',
        c: 'JavaScript',
        d: 'c++',
        correct: "c"
    },
    {
        Question: 'My Fav Cricketer?',
        a: 'MS dhoni',
        b: 'Virat Kohli',
        c: 'Rohit Sharma',
        d: 'Suresh Raina',
        correct: "a"
    },
]
const answerEl = document.querySelectorAll('.answer');
const quizQ = document.querySelectorAll('.main-container');

const QuestionE = document.querySelector('#question');
const a_text = document.querySelector('#a-text');
const b_text = document.querySelector('#b-text');
const c_text = document.querySelector('#c-text');
const d_text = document.querySelector('#d-text');
const submitbtn = document.querySelector('#Q-submit')
let currentQuestion = 0;
let score = 0;
loadQuestion();
function loadQuestion() {
    // wrongAns();
    const currentquizData = quizData[currentQuestion];
    QuestionE.textContent = currentquizData.Question;
    a_text.textContent = currentquizData.a;
    b_text.textContent = currentquizData.b;
    c_text.textContent = currentquizData.c;
    d_text.textContent = currentquizData.d;
}
// function correctAns() {
//     let answers = undefined;
//     answerEl.forEach((answerEl) => {
//         if (answerEl.checked) {
//             answers = answerEl.id;
//         }

//     });
//     return answers;
// }
// function wrongAns() {
//     answerEl.forEach((answerEl) => {
//         answerEl.checked = false;
//     })
// }
submitbtn.addEventListener('click', () => {
    loadQuestion();
    if (currentQuestion<quizData.length){
        currentQuestion++
    }else{
        alert('You Finished')
    }

    // currentQuestion++;
    // const answer = correctAns();
    // if (answer) {
    //     if (answer === currentquizData.cor) {
    //         score++;
    //     }
    //     currentQuestion++;
    //     if (currentQuestion < quizData.length) {
    //         loadQuestion()
    //     }
    //     else {
    //         quizQ.innerHTML = '<h2>You answered correctly at ' + score + '/' + quizData.length + ' questions.</h2>'
    //     }}

});

