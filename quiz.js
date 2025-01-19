// دالة التحقق من الإجابة
function checkAnswer() {
    // الإجابة الصحيحة
    const correctAnswer = "4";

    // الحصول على الإجابة المختارة من المستخدم
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    // العنصر الخاص بعرض التغذية الراجعة
    const feedback = document.getElementById("feedback");

    // التحقق إذا قام المستخدم باختيار إجابة
    if (userAnswer) {
        // مقارنة الإجابة المختارة مع الإجابة الصحيحة
        if (userAnswer.value === correctAnswer) {
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

// إضافة مستمع الحدث إلى زر "Submit Answer"
document.getElementById("submit-answer").addEventListener("click", checkAnswer);