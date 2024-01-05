var quizContainer = document.getElementById("quizContainer");
var questionContainer = document.getElementById("question-container");
var nextButton = document.getElementById("next-btn");
var timerDisplay = document.getElementById("timer-display");
var submitButton = document.getElementById("submit-btn")

var questions = [
    {
        question: "Commonly used data types DO Not include?",
        options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        correctAnswer: "3. alerts"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: ["1. javascript", "2. terminal", "3. for loops", "4. console.log"],
        correctAnswer: "4. console.log"
    },
    {
        question: "The condition in an if / else statement is enclosed with _______.",
        options: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
        correctAnswer: "2. curly brackets"
    },
    {
        question: "String values must be enclosed within ___ when being assigned to variables.",
        options: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthesis"],
        correctAnswer: "3. quotes"
    }
         
];

var currentQuestionIndex = 0;
var timerSeconds = 75;
var timerInterval;

function startQuiz() {
    showQuestion();
    startTimer();

}

function startTimer() {
    timerInterval = setInterval(function () {
        timerDisplay.textContent = `Time remaining: ${timerSeconds} seconds`;

        if (timerSeconds <= 0) {
            clearInterval(timerInterval);
            quizContainer.innerHTML = '<h1>Time is up! Quiz Completed</h1>';
        } else {
            timerSeconds--;
        }
    }, 1000);
}


function showQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    questionContainer.innerHTML = `<h2>${currentQuestion.question}</h2>`;

    currentQuestion.options.forEach(option => {
        questionContainer.innerHTML += `<label><input type="radio" name="answer" value="${option}"> ${option}</label><br>`;
    });
}


function nextQuestion() {
   
    var selectedOption = document.querySelector('input[name="answer"]:checked');

    
    if (selectedOption) {
       
        if (selectedOption.value === questions[currentQuestionIndex].correctAnswer) {

            console.log('right!');
        } else {

            console.log('wrong!');
        }

        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
          
            showQuestion();
        } else {
           
            clearInterval(timerInterval);
            quizContainer.innerHTML = '<h1>Quiz is Completed!</h1>';
        }
    } else {
       
        alert('you must select an option to proceed forward!');
    }
}

startQuiz();

nextButton.addEventListener('click', nextQuestion);
submitButton.addEventListener("click", submitQuiz);