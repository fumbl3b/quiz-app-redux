'use strict';

function main() {
  renderPage();
  buttonHandler();
}

function renderPage() {
  const quizContent = generateQuizCont();
  $('.quiz-container').html(quizContent);
}

function buttonHandler() {

  let selectedAnswer = '';

  $('.quiz-container').on('click', '.btn-start', (e) => {
    e.preventDefault();
    renderPage();
  });

  $('.quiz-container').change('input', (e) => {
    e.preventDefault();
    selectedAnswer = store.questions[store.questionNumber].answers[e.target.id];
  });

  $('.quiz-container').on('click','.submit-ans', event => {
    let correctIdx = store.questions[store.questionNumber].correctAnswerIdx;
    let correctAns = store.questions[store.questionNumber].answers[correctIdx];
    event.preventDefault();
    if (selectedAnswer === '') {
      alert('You must make a selection')
      renderPage();
    }
    if (selectedAnswer === correctAns) {
      alert(`${selectedAnswer} is correct!`);
      store.score ++;
      store.questionNumber ++;
    } if(selectedAnswer !== correctAns && selectedAnswer !== '') {
      alert(`${selectedAnswer} is incorrect.  We were looking for ${correctAns}.`);
      store.questionNumber ++;
    }
    selectedAnswer = '';
    renderPage();
  });

  $('.quiz-container').on('click', '.restart', (event) => {
    event.preventDefault();
    store.score = 0;
    store.questionNumber = 0;
    renderPage();
  });
}

function generateQuizCont() {
  if (store.quizStarted === false) {
    store.quizStarted = true;
    return generateWelcome();
  } else if (store.questionNumber < store.questions.length) {
    return generateQuestion(store.questions[store.questionNumber]);
  } else {
    return generateEndPage();
  }
}

function generateEndPage() {
  return `<div class="end-container">
  <h2>END PAGE<h2>
  <p>Congratulations! You've completed the quiz<p>
  <p>Your score was ${store.score} out of ${store.questions.length}</p>
  </div>
  <div class="btn-container">
    <button class="restart">
      <span>Try Again!</span>
    </button>
  </div>`;
}

function generateQuestion(question) {
  const answersHtmlString = question.answers.map((answer, idx) => {
    return `<div class="radio-container">
            <input type="radio" name="question" id="${idx}">
              <label for="${idx}">${answer}</label>
            </input>
            </div>`;
  }).join('');
  
  return `<div class="text-container">
          <h2>${question.questionString}</h2>
          </div>
          <div>
            <form>
              <fieldset>
                <legend>Question ${store.questionNumber + 1} out of ${store.questions.length}</legend>
                ${answersHtmlString}
                <button class="submit-ans">Submit</button>
              </fieldset>
            </form>
          </div>
          <div class="score">
            <span>Your score is ${store.score} correct, out of a possible ${store.questions.length}</span>
          </div>`;
}

function generateWelcome() {
  return `<div class="text-container">
            <h2>Are You Ready To Test Your Knowledge?</h2>
          </div>
          <div class="text-container">
            <p>To navigate quiz via keyboard, press TAB to scroll between answers and ENTER to make your selection.</p>
          </div>
          <div class="btn-container">
            <button class="btn-start">
              <span>Begin</span>
            </button>
          </div>`;
}

$(main);