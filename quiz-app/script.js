const quizData = [
    {
        question: 'How many ghosts chase Pac-Man at the start of each game?',
        a: '5',
        b: '4',
        c: '3',
        d: '6',
        answer: 'b',
    },
    {
        question: 'Kratos is the main character of what video game?',
        a: "Assassin's Creed",
        b: 'Far Cry',
        c: 'Battlefield',
        d: 'God of War',
        answer: 'd',
    },
    {
        question: 'How many bones do we have in an ear?',
        a: '5',
        b: '4',
        c: '3',
        d: '6',
        answer: 'c',
    },
    {
        question: 'How many hearts does an Octupus have?',
        a: '5',
        b: '4',
        c: '3',
        d: '6',
        answer: 'c',
    },
    {
        question: 'Where is the strongest human muscle located?',
        a: 'Jaw',
        b: 'Thigh',
        c: 'Tongue',
        d: 'Bicep',
        answer: 'a',
    },
]

const submit = document.querySelector("button");
const question = document.querySelector("h1");
const optionList = document.querySelectorAll("label");
const inputList = document.querySelectorAll("input");

let index = 0; // records the question number
let count = 0; // records the score

// loading the question and options
function updateQuestion() {
    question.innerHTML = quizData[index].question;
    optionList.forEach((i) => {
        const id = i.htmlFor;
        i.textContent = quizData[index][id];
    })
    clearOption();
}

// setting values of radio buttons to false
function clearOption() {
    inputList.forEach((i) => {
        i.checked = false;
    })
}

// answer selected by clicking the radio button
let chosenOption = null;
inputList.forEach((i) => {
    i.addEventListener("click", function () {
        chosenOption = i.id;
    })
})

// loading the first question
updateQuestion();

submit.addEventListener("click", function () {
    let ans = quizData[index].answer;
    if (ans === chosenOption) {
        count++;
    }
    index++;

    if (index < quizData.length)
        updateQuestion();
    else {
        alert(`Your score: ${count}`)
    }
})
