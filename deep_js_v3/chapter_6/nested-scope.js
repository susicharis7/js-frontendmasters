var teacher = "Haris";

function newTeacher() {
    var teacher = "Suzy";

    function ask(question) {
        console.log(teacher, question);
    };

    ask("Why?");
}

newTeacher();
ask("What?"); // ReferenceError 


