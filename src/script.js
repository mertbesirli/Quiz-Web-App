const questions = [
    {
        question: 'What is the most used programming language in 2022',
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "c",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was YouTube launched?",
        a: "2006",
        b: "2005",
        c: "2010",
        d: "2007",
        correct: "b",
    },
]

const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitButton = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = questions[currentQuiz]

    questionEl.innerText = currentQuizData.question

    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}

function getSelected() {
    let answer = undefined

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    })

    return answer
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false
    })
}

submitButton.addEventListener("click", () => {

    const answer = getSelected()

    if (answer) {
        if (answer === questions[currentQuiz].correct) {
            score++
        }

        currentQuiz++;
        if (currentQuiz < questions.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${questions.length} questions.</h2>
                
                <button onclick="location.reload()">Refresh</button>`
        }
    }
})