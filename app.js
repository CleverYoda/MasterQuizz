const quizConfig = {
    title: "Votre Examen!",
    numberOfQuestions: 3,
    timeOptions: [10, 23, 48],
    questionPoints: 5
};

let currentQuestion = 0;
let selectedAnswers = {};
let timeLeft;
let timerInterval;
let totalScore = 0;
let selectedQuestions = [];

const domElements = {
    startScreen: document.getElementById('start-screen'),
    quizScreen: document.getElementById('quiz-screen'),
    resultsScreen: document.getElementById('results-screen'),
    startBtn: document.getElementById('start-btn'),
    timeOptionsContainer: document.getElementById('time-options-container'),
    timer: document.getElementById('timer'),
    currentQuestion: document.getElementById('current-question'),
    questionText: document.getElementById('question'),
    answersContainer: document.getElementById('answers'),
    resultsDetails: document.getElementById('questions-results'),
    correctCount: document.getElementById('correct-count'),
    scoreDisplay: document.getElementById('score-display'),
    totalPoints: document.getElementById('total-points'),
    scorePercentage: document.getElementById('score-percentage'),
    retakeBtn: document.getElementById('retake-btn')
};

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('quiz-title').textContent = quizConfig.title;
    
    quizConfig.timeOptions.forEach(minutes => {
        const btn = document.createElement('button');
        btn.className = 'time-option';
        btn.textContent = `${minutes} min`;
        btn.dataset.seconds = minutes * 60;
        btn.addEventListener('click', handleTimeSelect);
        domElements.timeOptionsContainer.appendChild(btn);
    });
});

function handleTimeSelect(e) {
    document.querySelectorAll('.time-option').forEach(btn => btn.classList.remove('selected'));
    e.target.classList.add('selected');
    timeLeft = parseInt(e.target.dataset.seconds);
    domElements.startBtn.disabled = false;
}

domElements.startBtn.addEventListener('click', () => {
    selectedQuestions = [...quizData]
        .sort(() => Math.random() - 0.5)
        .slice(0, quizConfig.numberOfQuestions);
    
    currentQuestion = 0;
    selectedAnswers = {};
    totalScore = 0;
    
    showScreen('quiz-screen');
    startTimer();
    showQuestion(currentQuestion);
});

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function startTimer() {
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if(timeLeft <= 0) {
            clearInterval(timerInterval);
            showResults();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;
    domElements.timer.textContent = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function showQuestion(index) {
    const question = selectedQuestions[index];
    domElements.currentQuestion.textContent = index + 1;
    domElements.questionText.textContent = question.question;
    
    domElements.answersContainer.innerHTML = '';
    
    question.answers.forEach((answer, i) => {
        const answerDiv = document.createElement('div');
        answerDiv.className = `answer-option ${selectedAnswers[index] === i ? 'selected' : ''}`;
        answerDiv.innerHTML = `
            <input type="radio" name="answer" id="answer-${i}" 
                   ${selectedAnswers[index] === i ? 'checked' : ''}>
            <label for="answer-${i}">${answer.text}</label>
        `;
        answerDiv.addEventListener('click', () => selectAnswer(index, i));
        domElements.answersContainer.appendChild(answerDiv);
    });

    // Modification pour le style du bouton "Terminer"
    document.getElementById('prev-btn').disabled = index === 0;
    const nextBtn = document.getElementById('next-btn');
    nextBtn.textContent = index === selectedQuestions.length - 1 ? 'Terminer l’examen' : 'Suivant →';
    nextBtn.dataset.finish = index === selectedQuestions.length - 1; // <-- Ligne ajoutée
}

function selectAnswer(questionIndex, answerIndex) {
    selectedAnswers[questionIndex] = answerIndex;
    showQuestion(currentQuestion);
}

document.getElementById('prev-btn').addEventListener('click', () => {
    if(currentQuestion > 0) currentQuestion--;
    showQuestion(currentQuestion);
});

document.getElementById('next-btn').addEventListener('click', () => {
    if(currentQuestion < selectedQuestions.length - 1) currentQuestion++;
    else showResults();
    showQuestion(currentQuestion);
});

function showResults() {
    clearInterval(timerInterval);
    showScreen('results-screen');
    
    const totalQuestions = selectedQuestions.length;
    const totalPossible = totalQuestions * quizConfig.questionPoints;
    
    totalScore = selectedQuestions.reduce((score, question, index) => {
        const selected = selectedAnswers[index];
        if(selected !== undefined && question.answers[selected].correct) {
            return score + quizConfig.questionPoints;
        }
        return score;
    }, 0);

    const correctCount = selectedQuestions.filter((q, i) => 
        selectedAnswers[i] !== undefined && q.answers[selectedAnswers[i]].correct
    ).length;
    
    const percentage = ((totalScore / totalPossible) * 100).toFixed(2);

    domElements.correctCount.textContent = `${correctCount}/${totalQuestions}`;
    domElements.scoreDisplay.textContent = totalScore;
    domElements.totalPoints.textContent = totalPossible;
    domElements.scorePercentage.textContent = `${percentage}%`;
    
    let percentageColor = '#48bb78';
    if(percentage >= 80) percentageColor = '#48bb78';
    else if(percentage >= 50) percentageColor = '#f6ad55';
    else if(percentage >= 25) percentageColor = '#f687b3';
    else percentageColor = '#8B0000';
    domElements.scorePercentage.style.color = percentageColor;

    domElements.resultsDetails.innerHTML = '';
    
    selectedQuestions.forEach((question, index) => {
        const selected = selectedAnswers[index];
        const isCorrect = selected !== undefined && question.answers[selected].correct;
        const correctAnswer = question.answers.find(a => a.correct);
        totalScore += isCorrect ? quizConfig.questionPoints : 0;
        
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question-result';
        
        questionDiv.innerHTML = `
            <div class="question-header ${isCorrect ? 'correct-header' : 'error-header'}">
                Question ${index + 1}
                <span class="question-points">${isCorrect ? `+${quizConfig.questionPoints}` : '+0'}</span>
            </div>
            <div class="answers-container">
                <div class="question-text">${question.question}</div>
                ${question.answers.map(answer => `
                    <div class="answer-item 
                        ${answer === correctAnswer ? 'correct-answer' : ''}
                        ${selected !== undefined && answer === question.answers[selected] ? 'user-answer' : ''}">
                        ${answer.text}
                        ${(answer === correctAnswer || answer === question.answers[selected]) ? `
                            <div class="answer-description">${answer.explanation}</div>
                        ` : ''}
                    </div>
                `).join('')}
            </div>
        `;
        
        domElements.resultsDetails.appendChild(questionDiv);
    });
}

// Gestion du bouton "Refaire l'examen"
domElements.retakeBtn.addEventListener('click', () => {
    currentQuestion = 0;
    selectedAnswers = {};
    totalScore = 0;
    selectedQuestions = [];
    
    document.querySelectorAll('.time-option').forEach(btn => {
        btn.classList.remove('selected');
    });
    domElements.startBtn.disabled = true;
    
    showScreen('start-screen');
});