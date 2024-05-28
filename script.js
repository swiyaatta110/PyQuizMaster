document.addEventListener("DOMContentLoaded", function () {
    // Step 1: Define quiz data

    const quizData = [
        {
            question: "Which type of Programming does Python support?",
            options: [
                "object-oriented programming",
                "structured programming",
                "functional programming",
                "all of the mentioned"
            ],
            correct: 3,
        },
        {
            question: "Which of the following is used to define a block of code in Python language?",
            options: [
                "Indentation",
                "Brackets",
                "Key",
                "All of the mentioned"
            ],
            correct: 0,
        },
        {
            question: "Which of the following is a Python tuple?",
            options: [
                "{1, 2, 3}",
                "{}",
                "[1, 2, 3]",
                "(1, 2, 3)"
            ],
            correct: 3,
        },
        {
            question: "Which one of the following is the use of function in python?",
            options: [
                "Functions don’t provide better modularity for your application",
                "you can’t also create your own functions",
                "Functions are reusable pieces of programs",
                "All of the mentioned"
            ],
            correct: 2,
        },
        {
            question: "What arithmetic operators cannot be used with strings in Python?",
            options: [
                "*",
                "-",
                "+",
                "All of the mentioned"
            ],
            correct: 1,
        },
    ];

    // Step 2: Javascript Initialization

    const quiz = document.querySelector('#q');
    // console.log(quiz);
    const answerElm = document.querySelectorAll(".answer");
    const [questionElm, option1, option2, option3, option4] =
        document.querySelectorAll(
            "#question, #option1, #option2, #option3, #option4"
        );
    const submit = document.querySelector("#submit");

    let currentQuiz = 0;
    let score = 0;

    // step 3: Load quiz func.

    const loadQuiz = () => {
        const { question, options } = quizData[currentQuiz];
        console.log(question);

        questionElm.innerText = `${currentQuiz + 1}:${question}`;
        // options.forEach((curOpt, index) => option1.innerText = curOpt );
        options.forEach(
            (curOpt, index) => (window[`option${index + 1}`].innerText = curOpt)
        );
    };

    loadQuiz();

    // Step 4: Get Selected Answer Function on Button click

    const getSelectedOption = () => {
        // let ans_index;
        // answerElm.forEach((curOpt, index) => {
        //     if(curOpt.checked) {
        //         ans_index = index;
        //     }
        // });
        // return ans_index;
        let answerElement = Array.from(answerElm);
        return answerElement.findIndex((curElm) => curElm.checked);
    };

    //  deselectedAnswers
    const deselectedAnswers = () => {
        return answerElm.forEach((curElm) => (curElm.checked = false));
    };

    submit.addEventListener("click", () => {
        const selectedOptionIndex = getSelectedOption();
        console.log(selectedOptionIndex);

        if (selectedOptionIndex === quizData[currentQuiz].correct) {
            score += 1;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            deselectedAnswers();
            loadQuiz();
        }
        else {
            quiz.innerHTML = `
            <div class="result">
                <h2>🏆 Your Score: ${score}/${quizData.length} Correct Answers</h2>
                <p>Congratulations on completing the quit 🎉</p>
                <button class="reload-button" onclick="location.reload()">Play Again 🔃</button>
            </div>
        `;
        }
    });
});