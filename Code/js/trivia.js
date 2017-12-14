/*Global Variables*/
var started = false;
var currentQuestion = 4;

var timer = 0;

var TimerID;


/*On Load*/

window.addEventListener("load", function(){
    
    document.getElementById("Start").onclick = startQuiz;
    document.getElementById("next").onclick = nextQuestion;
    document.getElementById("finish").onclick = finishQuiz;
    
    var answers = document.querySelectorAll('input[name="Answers"]');
    
    for (var i=0; answers.length > i; i++){
        answers[i].onclick = optionClicked;
        
    }
});

//TIMER

function startTimer(){
    TimerID = setInterval("updateTimer()",1000);
}
function updateTimer(){
    timer++;
    //Update
    document.getElementById("timer").innerHTML = timer + " Seconds.";
    
    
}
function stopTimer(){
    clearInterval(TimerID);
}

//QUIZ

function startQuiz(){
    if(started == true){
        timer = 0;
        document.getElementById("timer").innerHTML = "0 Seconds.";
        ResetQuiz(); 
    }
    
    startTimer();
    
    started = true;
    document.getElementById("Start").setAttribute("disabled","disabled");
    
    /*Add Stuff For Clock*/
    
    
    currentQuestion = 1;
    document.getElementById("next").style.display = "block";
    updateQuizDisplay();
    
}

function ResetQuiz(){
    
    
    //Hide everything
    document.getElementById("msgPerfect").style.display = "none";
    document.getElementById("msgNotPerfect").style.display = "none";
    
    document.getElementById("TriviaGrade").style.display = "none";
    document.getElementById("q_1").style.display = "none";    
    document.getElementById("q_2").style.display = "none";    
    document.getElementById("q_3").style.display = "none";    
    document.getElementById("q_4").style.display = "none";
    document.getElementById("q_5").style.display = "none";
    document.getElementById("q_6").style.display = "none";
    document.getElementById("q_7").style.display = "none";
    document.getElementById("q_8").style.display = "none";
    document.getElementById("q_9").style.display = "none";
    document.getElementById("q_10").style.display = "none";
    
    
    //Uncheck Options
    var checkedOptions = document.querySelectorAll('input[type="radio"]:checked');
    for (var i=0; checkedOptions.length > i; i++){
        checkedOptions[i].checked = false;

    }
    document.getElementById("TriviaGrade").style.display = "none";
    
    //UnHighlight
    for (x=0; x < 10; x++){
        document.getElementById("c_" + (x+1)).parentElement.classList.remove("correctAnswer");   
    }
    
    //Allow Read
    var AllOptions = document.querySelectorAll('input[type="radio"]');
    for (y=0; y < AllOptions.length; y++){
        AllOptions[y].removeAttribute("disabled");
    }
    

}

function nextQuestion(){
    
    currentQuestion++;
    updateQuizDisplay();
    
}

function finishQuiz(){
    /*Stop Timer*/
    stopTimer();
    
    /*Reset Buttons*/
    document.getElementById("Start").removeAttribute("disabled");
    document.getElementById("finish").style.display = "none";
    
    document.getElementById("q_" + currentQuestion).style.display = "none";
    
    /*Grade*/
    gradeQuiz();
    
}

function gradeQuiz(){
    
    
    //Vars
    var qRight = 0;
    
    //Set Questions to Read Only
    var AllOptions = document.querySelectorAll('input[type="radio"]');
    for (y=0; y < AllOptions.length; y++){
            AllOptions[y].setAttribute("disabled","disabled");

    }
    
    //Count Correct Answers
    var checkedOptions = document.querySelectorAll('input[type="radio"]:checked');
    for (i=0; i < checkedOptions.length; i++){
        if (checkedOptions[i].id == "c_1" || checkedOptions[i].id == "c_2" || checkedOptions[i].id == "c_3" || checkedOptions[i].id == "c_4" || checkedOptions[i].id == "c_5" || checkedOptions[i].id == "c_6" || checkedOptions[i].id == "c_7" || checkedOptions[i].id == "c_8" || checkedOptions[i].id == "c_9" || checkedOptions[i].id == "c_10"){
            qRight++;
        }
    }
    
    //Highlight  Answers
    for (x=0; x < 10; x++){
        
        document.getElementById("c_" + (x+1)).parentElement.classList.add("correctAnswer");   
    }
    
    // Number msg
    document.getElementById("numCorrect").innerHTML = "You got " + qRight + " out of the 10 correct, in " + timer + " seconds!";
    
    
    //consalation msg
    if(qRight == 10){
        document.getElementById("msgPerfect").style.display = "block";
    }else{
        document.getElementById("msgNotPerfect").style.display = "block";
    }
    
    document.getElementById("TriviaGrade").style.display = "block";
    document.getElementById("q_1").style.display = "block";    
    document.getElementById("q_2").style.display = "block";    
    document.getElementById("q_3").style.display = "block";    
    document.getElementById("q_4").style.display = "block";
    document.getElementById("q_5").style.display = "block";
    document.getElementById("q_6").style.display = "block";
    document.getElementById("q_7").style.display = "block";
    document.getElementById("q_8").style.display = "block";
    document.getElementById("q_9").style.display = "block";
    document.getElementById("q_10").style.display = "block";
    
}

function optionClicked(){
    /*enable the next button*/
    if (currentQuestion == 10){
        document.getElementById("finish").removeAttribute("disabled");
    }else{   
        document.getElementById("next").removeAttribute("disabled");
    }
}

function updateQuizDisplay(){
    /*disable the next button*/
    if (currentQuestion == 10){
        document.getElementById("finish").setAttribute("disabled","disabled");
    }else{
        document.getElementById("next").setAttribute("disabled","disabled");

    }
    /*Update the display*/
    if(currentQuestion - 1 == 0){
        
        document.getElementById("q_" + currentQuestion).style.display = "block";
    }else{
        /*If its the last question*/
        if (currentQuestion == 10){
            document.getElementById("next").style.display = "none";
            document.getElementById("finish").style.display = "block";
            
        }
        
        /*Hide Old Question*/
        document.getElementById("q_" + (currentQuestion - 1)).style.display = "none";
        
        document.getElementById("q_" + currentQuestion).style.display = "block";
    }
}
