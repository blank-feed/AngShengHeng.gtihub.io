//quiz
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const restartButton = document.getElementById('asd')

const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let questionsAnswered = 0;

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
restartButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  console.log('grs')
  questionsAnswered = 0
  startButton.classList.add('hide')
  restartButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
  
}

function showQuestion(question) {
  if (questionsAnswered == 4)
  {
    questionElement.innerText = 'end of quiz!'
    restartButton.classList.remove('hide')
  }

  else
  {
    questionsAnswered++
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
        button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
   }
}


function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  nextButton.classList.remove('hide')
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What is 10-pin bowling derrived from?',
    answers: [
      { text: 'Kegeling', correct: true },
      { text: 'Candlepin bowling', correct: false }
    ]
  },
  {
    question: 'When was the professional Bowlers Associate founded on?',
    answers: [
      { text: '1946', correct: false },
      { text: '1957', correct: false },
      { text: '1958', correct: true },
      { text: '1959', correct: false }
    ]
  },
  {
    question: 'Professional bowling was sponsored by beer comapines, CoCa-CoLa and ?',
    answers: [
      { text: 'Honda', correct: false },
      { text: 'Ford', correct: true },
      { text: 'Lamborghini', correct: false },
      { text: 'Porsche', correct: false }
    ]
  },
  {
    question: 'True or False? Ten-Pin bowling became an exhibition sport',
    answers: [
      { text: 'False', correct: false },
      { text: 'True', correct: true }
    ]
  }
]