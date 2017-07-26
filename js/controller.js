var quiz = {
    numberOfQuestions : 5,
    currentQuestionNum: 1,
    correctChoices    : 0,
    incorrectChoices  : 0,
    questions         : [],
    // Methods
    start : function (category) {
        var isData = this.getQuestions(category);
        if (!isData) {
            view.noQuestionsError();
        } else {
            view.hideErrorMessages();
            view.heading(category);        
            view.question(this.questions[this.currentQuestionNum - 1]);
            view.progress(this.currentQuestionNum, this.numberOfQuestions);
        }
    },
    end : function () {
        view.results(this.numberOfQuestions, this.correctChoices, this.incorrectChoices);
    },
    guess: function (choice) {
        this.checkAnswer(this.questions[this.currentQuestionNum - 1].isCorrect(choice));
        if (this.currentQuestionNum === this.numberOfQuestions) {
            this.end();
            return;
        }
        this.currentQuestionNum++;
        view.question(this.questions[this.currentQuestionNum - 1]);
        view.progress(this.currentQuestionNum, this.numberOfQuestions);
        //
        $(".choice-btns").click(function () {
            quiz.guess($(this).html());
        });
    },
    checkAnswer: function (answer) {
        answer ? this.correctChoices++ : this.incorrectChoices++;
    },
    randomise : function () {
     
    },
    getQuestions: function (category) {
        for (var prop in DB) {
            if (prop === category) {
                if (DB[prop][0].question === "") return false;
                for (var i = 0; i < this.numberOfQuestions; i++) {
                    this.questions.push(new Question(DB[prop][i].question, DB[prop][i].choices, DB[prop][i].answer));
                }
            }
        }
        return true;
    }
};

function setup() {
    $(".quiz-set").click(function () {
        var text = $(this).html();
        quiz.start(text);
        $(".choice-btns").click(function () {
            quiz.guess($(this).html());
        });
    });
} 

setup();
