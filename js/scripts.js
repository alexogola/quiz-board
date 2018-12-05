var answers = ["right","right","right"];
var awardedPoints = 20;


function total(score) {
return "Your score is " + score;
}

$(document).ready(function(){
   $("#javascript-quiz").submit(function (event) {


      $('#display-results').text('');
      var score = 0;
      var answerOne = ($("input[type=radio][name=answerOne]:checked").val());
      var answerTwo = ($("input[type=radio][name=answerTwo]:checked").val());
      var answerThree = ($("input[type=radio][name=answerThree]:checked").val());

      if (answerOne === undefined || answerTwo === undefined || answerThree === undefined) {
  $('#unattemptedQuestions').text('Please attempt all questions.');
  $('#unattemptedQuestions').fadeOut(10000);
} else {
         if (answerOne === answers[0]) {
    score += awardedPoints;
  }
         if (answerTwo === answers[1]) {
    score += awardedPoints;
  }
         if (answerThree === answers[2]) {
    score += awardedPoints;
  }


        $("input[type=radio][name=answerOne]:checked").prop('checked', false);
        $("input[type=radio][name=answerTwo]:checked").prop('checked', false);
        $("input[type=radio][name=answerThree]:checked").prop('checked', false);
        $('#unattemptedQuestions').text('');
        $(".quiz-board").fadeOut();
        $('#display-results').text(total(score));
        document.getElementById("display-results").style.visibility = "visible";
        document.getElementById("retake").style.visibility = "visible";
}
          event.preventDefault();
 });
});
