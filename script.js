const categories = {



    "MATH": [

],





  "ESAS": [


],





  "EE": [


],





};



let questionPool = [];
let currentQuestionIndex = 0;

const menuContainer = document.getElementById("menu-container");
const quizContainer = document.getElementById("quiz-container");
const categoryTitle = document.getElementById("category-title");
const questionElement = document.getElementById("question");
const choicesContainer = document.getElementById("choices-container");
const nextButton = document.getElementById("next-button");
const restartButton = document.getElementById("restart-button");

document.querySelectorAll(".category").forEach(button => {
    button.addEventListener("click", () => {
        const selectedCategory = button.getAttribute("data-category");
        startQuiz(selectedCategory);
    });
});

function startQuiz(category) {
    questionPool = [...categories[category]];
    questionPool = shuffleArray(questionPool);
    currentQuestionIndex = 0;

    categoryTitle.textContent = category;
    menuContainer.style.display = "none";
    quizContainer.style.display = "block";

    /* ✅ **Added Fade-in Effect for the Quiz Section** ✅ */
    quizContainer.style.opacity = "0";
    setTimeout(() => { quizContainer.style.opacity = "1"; }, 100);

    loadQuestion();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

function loadQuestion() {
    if (questionPool.length === 0) {
        questionElement.textContent = "🎉 REFRESH MO LANG PARA MAULIT MAY BUG KASI YUNG RESTART BUTTON HAHA 🎉";
        choicesContainer.innerHTML = "";
        nextButton.style.display = "none";
        restartButton.style.display = "inline-block";

     
        quizContainer.classList.add("celebrate");
        setTimeout(() => quizContainer.classList.remove("celebrate"), 2000);

        return;
    }

    const currentQuestion = questionPool[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    choicesContainer.innerHTML = "";

    currentQuestion.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.classList.add("choice");
        button.addEventListener("click", () => handleChoice(button, choice, currentQuestion.answer));

        /* ✅ **Smooth Button Click Effect** ✅ */
        button.style.transition = "transform 0.2s ease";
        button.addEventListener("mousedown", () => button.style.transform = "scale(0.95)");
        button.addEventListener("mouseup", () => button.style.transform = "scale(1)");

        choicesContainer.appendChild(button);
    });

    nextButton.disabled = true;
}

const wrongSound = new Audio('wrong1.mp3'); // Ensure "wrong.mp3" is in your project folder

function handleChoice(button, selected, correct) {
    const buttons = document.querySelectorAll(".choice");
    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === correct) {
            btn.classList.add("correct");
		btn.style.boxShadow = "0 0 10px #28a745";
        } else if (btn.textContent === selected) {
            btn.classList.add("incorrect");
		btn.style.animation = "shake 0.3s ease-in-out";
            wrongSound.play(); // Play sound when answer is incorrect
        }
    });

    if (selected === correct) {
        questionPool.splice(currentQuestionIndex, 1); // Remove question if answered correctly
    } else {
        questionPool.push(questionPool[currentQuestionIndex]); // Add question back to the pool if answered incorrectly
        questionPool.splice(currentQuestionIndex, 1); // Remove current question from this round
    }

    nextButton.disabled = false;
}

nextButton.addEventListener("click", () => {
    /* ✅ **Added Smooth Transition Between Questions** ✅ */
    quizContainer.style.opacity = "0";
    setTimeout(() => {
        loadQuestion();
        quizContainer.style.opacity = "1";
    }, 300);
});

restartButton.addEventListener("click", () => {
    // ✅ Reset Everything Like a Fresh App Start
    menuContainer.style.display = "block"; // Show menu again
    quizContainer.style.display = "none"; // Hide quiz
    quizContainer.classList.remove("celebrate");

    // ✅ Reset Buttons and UI
    nextButton.style.display = "none";  // Hide Next button initially
    restartButton.style.display = "none";  // Hide Restart button

    // ✅ Reload Question Pool to Start Fresh
    questionPool = []; // Clear old questions
    currentQuestionIndex = 0; // Reset index

    // ✅ Reload Category Selection to Restart Properly
    document.querySelectorAll(".category").forEach(button => {
        button.addEventListener("click", () => {
            const selectedCategory = button.getAttribute("data-category");
            startQuiz(selectedCategory);
        });
    });
});