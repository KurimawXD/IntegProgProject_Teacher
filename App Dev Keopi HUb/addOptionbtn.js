document.addEventListener('DOMContentLoaded', function() {
    const questionsContainer = document.getElementById('questionOptions');
    const addQuestionBtn = document.getElementById('add-question-btn');

    addQuestionBtn.addEventListener('click', function() {
        const questionTemplate = `
        <div class="choices">
            <input type="radio" name="rdMultipleChoice" id="rdMultipleChoice">
            <input type="text" name="txtOption1" id="txtOption1" placeholder="Option 1">
            <i class="fa-solid fa-xmark" style="margin-left: 40px;"></i>
        </div>
        `;
        questionsContainer.insertAdjacentHTML('beforeend', questionTemplate);
    });

    // // Submit form logic
    // const submitFormBtn = document.getElementById('submit-form-btn');           
    // submitFormBtn.addEventListener('click', function() {
    //     const questions = document.querySelectorAll('.question input[name="question"]');
    //     const questionData = [];
    //     questions.forEach(question => {
    //         questionData.push(question.value);
    //     });
    //     console.log('Questions:', questionData);
    //     // Here you can submit the form data to a server or process it further
    //     // For now, let's just log it to the console
    // });
});


