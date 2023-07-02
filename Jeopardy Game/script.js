const ScoreDisplay = document.querySelector('#Score');
const questionDisplay = document.querySelector('#Questions-display');

const questions = [
  {
    quiz: ['value', 'estimate', 'evaluate'],
    options: ['valuable', 'assess'],
    correct: 1,
  },
  {
    quiz: ['close', 'near', 'next'],
    options: ['trace', 'adjcent'],
    correct: 1,
  },
  {
    quiz: ['foreign', 'national', 'ethnic'],
    options: ['exotic', 'mad'],
    correct: 0,
  },
  {
    quiz: ['assume', 'insight', 'weather '],
    options: ['forecast', 'sustainable'],
    correct: 1,
  },
];

let score = 0;
ScoreDisplay.textContent = score;
let clicked = [];

function populateQuestions() {
  questions.forEach((ques) => {
    const questionBox = document.createElement('div');
    questionBox.classList.add('question-box');
    const Logo = document.createElement('h1');
    Logo.textContent = '🖊️';
    questionBox.append(Logo);
    ques.quiz.forEach((tip) => {
      const tipText = document.createElement('p');
      tipText.textContent = tip;
      questionBox.append(tipText);
    });

    const questionButton = document.createElement('div');
    questionButton.classList.add('question-button');
    questionBox.append(questionButton);

    ques.options.forEach((opt, optindex) => {
      const questionBtn = document.createElement('button');
      questionBtn.classList.add('question-btn');
      questionBtn.textContent = opt;
      questionButton.append(questionBtn);
      questionBtn.addEventListener('click', () =>
        checkAnswer(questionBox, questionBtn, opt, optindex, ques.correct)
      );
    });

    const questionAnswer = document.createElement('div');
    questionAnswer.classList.add('question-answer');
    questionBox.append(questionAnswer);
    questionDisplay.append(questionBox);
  });
}
populateQuestions();

function checkAnswer(questionBox, button, option, index, ans) {
  if (index === ans) {
    score++;
    ScoreDisplay.textContent = score;
    getResult(questionBox, 'Correct!');
  } else {
    score--;
    ScoreDisplay.textContent = score;
    questionBox.querySelector('.question-answer').style.color = 'red';
    getResult(questionBox, 'Incorrect!');
  }
  clicked.push(option);
  button.disabled = clicked.includes(option);
}

function getResult(mainDiv, answer) {
  mainDiv.querySelector('.question-answer').textContent = '';
  mainDiv.querySelector('.question-answer').textContent = answer;
}
