function checkAnswer() {
    const correctAnswer = "4";
    const anyAnswer = document.querySelector('input[name="quiz"]:checked');
    const feedback = document.getElementById("feedback");
    if (anyAnswer) {
        let userAnswer = anyAnswer.value;
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
            feedback.style.color = "red";
        }
    } else {
        feedback.textContent = "Please select an answer before submitting!";
        feedback.style.color = "orange";
    }
}
document.getElementById("submit-answer").addEventListener("click", checkAnswer);