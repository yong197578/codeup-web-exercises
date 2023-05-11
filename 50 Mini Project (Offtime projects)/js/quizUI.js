const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

//variables to keep track of the current quiz question and user's score
let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    //function to de select answers when load page
    deselectAnswers()
    //set variable currentQuizData to get data for current quiz question from quizData
    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    //lops through all the answer elements and unchecked any that are current checked
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    //loop through all answers and check if any of them are selected.
    answerEls.forEach(answerEl => {
        //if checked returns the id of selected answer element
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    //call getSelected() function to get the answer selected by user
    const answer = getSelected()
    //if answer is true
    if(answer) {
        //if selected answer is correct, the score variable is incremented by 1
        if(answer === quizData[currentQuiz].correct) {
            score++
        }
        //increment currentQuiz variable
        currentQuiz++
        //if currentQuiz is less quizData.length(4) then loadQuiz()function is called to load the next question
        if(currentQuiz < quizData.length) {
            loadQuiz()
            //when user completed  questions set innerHTML to display user's score
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})