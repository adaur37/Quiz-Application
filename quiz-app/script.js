const quizData = [
    {
        question: 'Question 1: How old is Andrew?',
        a: '19',
        b: '20',
        c: '21',
        d: '22',
        correct: 'c'
    }, {
        question: 'Question 2: What was the most used programming language in 2007?',
        a: 'JavaScript',
        b: 'C',
        c: 'Java',
        d: 'C#',
        correct: 'c'
    } , {
        question: 'Question 3: Who was the President of the United State of America in 1946?',
        a: 'Herbert Hoover',
        b: 'Harry S. Truman',
        c: 'Franklin D. Roosevelt',
        d: 'Lyndon B. Johnson',
        correct: 'b'
    } , {
        question: 'Question 4: What does PHP mean?',
        a: 'Hypertext Markup Language',
        b: 'Casscading Stylesheet',
        c: 'Hypertext Preprocessor',
        d: 'No meaning',
        correct: 'c'
    } , {
        question: 'Question 5: What year was JavaScript Launched',
        a: '1998',
        b: '1993',
        c: '2001',
        d: 'None of the above',
        correct: 'd'
    }
];

const quiz = document.getElementById("quiz");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const submitBtn = document.getElementById("submit");
const reloadBtn = document.getElementById("reload");

let currentQuiz = 0;
let score = 0;

//Loading the questions, and answers. 
loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}

//Selecting an answer and allowing the user to continue if an answer is selected
function getSelected() {
    let answer = undefined;

    //const answerEls = document.querySelectorAll("answer");

    answerEls.forEach((answerEl) => {
        if (answerEl.checked){
            answer = answerEl.id;
            //console.log(answer.value);
        }   
    });

    return answer;
}

//Deselecting an answer. 
function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}


submitBtn.addEventListener("click", () => {
    //Checking to see the answer. 
    const answer = getSelected();
    
    if(answer)
    {
        if (answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        } else{
            //alert("This is the end of the quiz.");
            //Show results
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                <button id="submit" class="btn btn1" onClick="location.reload()">Reload</button>
            `;
        }
        loadQuiz();
    }
});
