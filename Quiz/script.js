let quizData = [
  {
    Question: "Who is pm of india?",
    a: "Rahul Ghandhi",
    b: "Arvind Kejriwal",
    c: "Md Sharif",
    d: "Narendra Modi",
    correct: "d",
  },
  {
    Question: "My fav actor?",
    a: "Akshay Kumar",
    b: "Ranbir Kapoor",
    c: "Ajay Devgun",
    d: "Salman Khan",
    correct: "a",
  },
  {
    Question: "My fav Language?",
    a: "Python",
    b: "c Language",
    c: "JavaScript",
    d: "c++",
    correct: "c",
  },
  {
    Question: "My Fav Cricketer?",
    a: "MS dhoni",
    b: "Virat Kohli",
    c: "Rohit Sharma",
    d: "Suresh Raina",
    correct: "a",
  },
  {
    Question: "What's my name?",
    a: "Kundan Rai",
    b: "Kd Rai",
    c: "Kunjdhari Rai",
    d: "Kumal Khemu",
    correct: "c",
  },
];
const answerEl = document.querySelectorAll(".answer");
const quizQ = document.querySelectorAll(".main-container");

const QuestionE = document.querySelector("#question");
const a_text = document.querySelector("#a-text");
const b_text = document.querySelector("#b-text");
const c_text = document.querySelector("#c-text");
const d_text = document.querySelector("#d-text");
const submitbtn = document.querySelector("#Q-submit");
let currentQuestion = 0;
let score = 0;
loadQuestion();
function loadQuestion() {
  // wrongAns();
  if (currentQuestion === quizData.length) {
    console.log("you are finished");
    document.querySelector(".quiz-container").innerHTML = `
    <h1 class="last-h1">You have scored ${score} out of ${quizData.length}</h1>
    `;
    submitbtn.id = "black";

    if (score < Math.round(quizData.length / 2)) {
      document.querySelector(".last-h1").style.color = "red";
      submitbtn.textContent = "You are a Failure dude";
    } else {
      document.querySelector(".last-h1").style.color = "green";
      submitbtn.textContent = "Congratulations! your future is bright";
    }
  } else {
    const currentquizData = quizData[currentQuestion];
    QuestionE.textContent = currentquizData.Question;
    a_text.textContent = currentquizData.a;
    b_text.textContent = currentquizData.b;
    c_text.textContent = currentquizData.c;
    d_text.textContent = currentquizData.d;
  }
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

function unCheck() {
  answerEl.forEach((e) => {
    if (e.checked) {
      e.checked = false;
    }
  });
}

submitbtn.addEventListener("click", () => {
  if (currentQuestion < quizData.length) {
    let slectedAnswer = "";
    answerEl.forEach((e) => {
      if (e.checked == true) {
        slectedAnswer = e.id;
      }
    });
    if (slectedAnswer == "") {
      console.log("Plese select your answer");
      return;
    }
    if (slectedAnswer === quizData[currentQuestion].correct) {
      console.log("you are correct");
      score++;
    } else {
      console.log("you are incorrect");
    }

    unCheck();
    currentQuestion++;
    loadQuestion();
  } else {
    console.log("yo you are finished");
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
