var answers = ["right", "right", "right", "right", "right"];
var awardedPoints = 20;


function total(score) {
  return "Your score is " + score;
}

$(document).ready(function() {
  $("#javascript-quiz").submit(function(event) {


    $('#display-results').text('');
    var score = 0;
    var answerOne = ($("input[type=radio][name=answerOne]:checked").val());
    var answerTwo = ($("input[type=radio][name=answerTwo]:checked").val());
    var answerThree = ($("input[type=radio][name=answerThree]:checked").val());
    var answerFour = ($("input[type=radio][name=answerFour]:checked").val());
    var answerFive = ($("input[type=radio][name=answerFive]:checked").val());

    if (answerOne === undefined || answerTwo === undefined || answerThree === undefined || answerFour === undefined || answerFive === undefined) {
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
      if (answerFour === answers[3]) {
        score += awardedPoints;
      }
      if (answerFive === answers[4]) {
        score += awardedPoints;
      }


      $("input[type=radio][name=answerOne]:checked").prop('checked', false);
      $("input[type=radio][name=answerTwo]:checked").prop('checked', false);
      $("input[type=radio][name=answerThree]:checked").prop('checked', false);
      $("input[type=radio][name=answerFour]:checked").prop('checked', false);
      $("input[type=radio][name=answerFive]:checked").prop('checked', false);
      $('#unattemptedQuestions').text('');
      $(".quiz-board").fadeOut(10);
      $('#display-results').text(total(score));
      document.getElementById("display-results").style.visibility = "visible";
      document.getElementById("retake").style.visibility = "visible";
    }
    event.preventDefault();
  });
});
