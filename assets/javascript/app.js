var panel = $("#quiz-area");

// Question set
var questions = [{
  question: " Who did Count Dooku train?",
  answers: ["Qui-Gon Jinn", "Ben Kenobi", "Darth Maul", "Darth Tyranus"],
  correctAnswer: "Qui-Gon Jinn"
}, {
  question: "At which level of Jedi can you serve on the Jedi Council?",
  answers: ["Padawan", "Jedi Knight", "Jedi Master", "Jedi Consular"],
  correctAnswer: "Jedi Master"
}, {
  question: "What is Luke Skywalkers wife name?",
  answers: ["Leia Skywalker", "Jane Skywalker", "Mara Jade Skywalker", "Githany Skywalker"],
  correctAnswer: "Mara Jade Skywalker"
}, {
  question: "What color is the Jedi solders lightsaber?",
  answers: ["Purple", "Green", "Blue", "Yellow"],
  correctAnswer: "Blue"
}, {
  question: "Who was Lukes Best friend from Tatooine?",
  answers: ["Wedge Antilles", "Biggs Darklighter", "Jek Tono Porkins", "A Jawa named boon"],
  correctAnswer: "Biggs Darklighter"
}, {
  question: "What age was Queen Amidala elected to serve on Naboo?",
  answers: ["16", "21", "14", "18"],
  correctAnswer: "14"
}, {
  question: "What limb did Anakin Skywalker loos in his first fight with Count Dooku",
  answers: ["Right Arm", "Left Arm", "Right Leg", "Left Leg"],
  correctAnswer: "Right Arm"
}, {
  question: "How many times does Obi-one loose his lightsaber?",
  answers: ["1", "5", "2", "3"],
  correctAnswer: "3"
}];

// Variable that will hold the setInterval
var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    panel.append("<button id='done'>Done</button>");
  },

  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();

  },

  result: function() {

    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    panel.html("<h2>All Done!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

// CLICK EVENTS

$(document).on("click", "#start", function() {
  game.start();
});


$(document).on("click", "#done", function() {
  game.done();
});
