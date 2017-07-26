function Question(question, choices, answer) {
    this.question = question || "";
    this.choices  = choices || [];
    this.answer   = answer || "";
}

Question.prototype.isCorrect = function (guess) {
    return this.answer === guess;  
}; 

// The Quiz questions per category
var DB = {
    JavaScript: [
        {
            question: "What is JavaScript?",
            choices: ["Language","Library","Framework","Pattern"],
            answer: "Language",
        },
        {
            question: "JavaScript is ___ side scripting language?",
            choices: ["Client","Server","Both","Api"],
            answer: "Client",
        },
        {
            question: "Operator == is used for?",
            choices: ["Equality","Identity","Incremental","Assignment"],
            answer: "Equality",
        },
        {
            question: "Operator === is used for?",
            choices: ["Equality","Assignment","Identity","All"],
            answer: "Identity",
        },
        {
            question: "How to create an objec?",
            choices: ["Obj Literal","Fn Construct","Class","All"],
            answer: "All",
        },
        {
            question: "How can you add JavaScript to your page?",
            choices: ["Embedded","Inline","External","All"],
            answer: "All",
        },
        {
            question: "Which type of error is hard to crack? ",
            choices: ["Load Time","Run Time","Logical","None"],
            answer: "Logical",
        },
        {
            question: "What is typeof arguments?",
            choices: ["Array","Object","String","Don't know"],
            answer: "Object",
        },
        {
            question: "What is 'this' in JavaScript?",
            choices: ["Current object","Any object","Global value","Number"],
            answer: "Current object",
        },
        {
            question: "What is Vannila JS?",
            choices: ["Library","Framework","Plain JS","API"],
            answer: "Plain JS",
        }
    ],
    PHP: [
        {
            question: "How can a file be included to PHP page?",
            choices: ["include()","require()","include_once()","All"],
            answer: "All",
        },
        {
            question: "How to start a session?",
            choices: ["session_start()","start_session()","sess_begin()","sessionStart()"],
            answer: "session_start()",
        },
        {
            question: "How can you find the length of a string in PHP?",
            choices: ["str_len()","len()","strlen()","length()"],
            answer: "strlen()",
        },
        {
            question: "How can you find the length of an array in PHP?",
            choices: ["len()","count()","arr_len()","length()"],
            answer: "count()",
        },
        {
            question: "How to define a constant in PHP?",
            choices: ["define('CONSTANT')","start_constant()","constant()","None"],
            answer: "define('CONSTANT')",
        }
    ],
    OOP: [
        {
            question: "",
            choices: ["","","",""],
            answer: "",
        }
    ],
    CSS: [
        {
            question: "",
            choices: ["","","",""],
            answer: "",
        }
    ],
    MVC: [
        {
            question: "",
            choices: ["","","",""],
            answer: "",
        }
    ],
    SQL: [
        {
            question: "",
            choices: ["","","",""],
            answer: "",
        }
    ],
    "C#": [
        {
            question: "",
            choices: ["","","",""],
            answer: "",
        }
    ],
    JQuery: [
        {
            question: "",
            choices: ["","","",""],
            answer: "",
        }
    ],
    HTML: [
        {
            question: "",
            choices: ["","","",""],
            answer: "",
        }
    ]
}; 