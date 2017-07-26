//
var view = {
    home: function () {
        
    },
    heading: function (heading) {
        $('.heading').html(heading + ' Quiz');
    },
    question: function (obj) {
        $('.title-question').html(obj.question);
        var btnsContainer = $('.quiz-set-btns');
        var choiceButttons = "";
        for (var i = 0; i < 4; i++){
            choiceButttons += '<button class="choice-btns">' + obj.choices[i] + '</button>';
        }
        $('hr').show();
        btnsContainer.html(choiceButttons);
    },
    results: function (numQuestions,corrects,incorrects) {
        var text = "";
        text += '<h3>Thanks for taking the quiz!</h3>';
        text += '<h4 class="left-align">Your results:</h4>';
        text += '<p class="left-align">Total questions   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp; <strong>'+numQuestions+'</strong></p>';
        text += '<p class="left-align">Num of Corrects   &nbsp;&nbsp;&nbsp;=&nbsp; <strong>'+corrects+'</strong></p>';
        text += '<p class="left-align">Num of Incorrects &nbsp;=&nbsp; <strong>' + incorrects + '</strong></p>';
        text += '<a class="right-align" href="index.html"><strong>Go Home</strong></a>';
        $('section').html(text);
    },
    progress: function (current,total) {
        $('#progress').html('Question ' + current + ' of ' + total);
    },
    noQuestionsError: function () {
        $('#no-quiz').show();
    },
    hideErrorMessages: function () {
        $('#no-quiz').hide();
    },
};