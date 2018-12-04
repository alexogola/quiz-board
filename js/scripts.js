function myQuiz() {
    var questionOne = document.javascriptQuiz.questionOne.value;
    var questionTwo = document.javascriptQuiz.questionTwo.value;
    var questionThree = document.javascriptQuiz.questionThree.value;
    var right = 0;


    if (questionOne == "right") {
        right = right + 20;
    };
    if (questionTwo == "right") {
        right = right + 20;
    };
    if (questionThree == "right") {
        right = right + 20;
    };

    alert(right);

};
