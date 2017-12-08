/*Global Variables*/
var started = false;
var currentQuestion = 4;



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

function startQuiz(){
    if(started == true){
        var checkedOptions = document.querySelectorAll('input[type="radio"]:checked');
        
        for (var i=0; checkedOptions.length > i; i++){
            console.log(checkedOptions[i])
            
        }
        
        
    }
    
    started = true;
    document.getElementById("Start").setAttribute("disabled","disabled");
    
    /*Add Stuff For Clock*/
    
    
    currentQuestion = 1;
    document.getElementById("next").style.display = "block";
    updateQuizDisplay();
    
}

function nextQuestion(){
    
    currentQuestion++;
    updateQuizDisplay();
    
}

function finishQuiz(){
    /*Reset Buttons*/
    document.getElementById("Start").removeAttribute("disabled");
    document.getElementById("finish").style.display = "none";
    
    document.getElementById("q_" + currentQuestion).style.display = "none";
    
    /*Grade*/
    gradeQuiz();
    
}

function gradeQuiz(){
    
    
}
function optionClicked(){
    /*enable the next button*/
    if (currentQuestion == 4){
        document.getElementById("finish").removeAttribute("disabled");
    }else{   
        document.getElementById("next").removeAttribute("disabled");
    }
}

function updateQuizDisplay(){
    /*disable the next button*/
    if (currentQuestion == 4){
        document.getElementById("finish").setAttribute("disabled","disabled");
    }else{
        document.getElementById("next").setAttribute("disabled","disabled");

    }
    /*Update the display*/
    if(currentQuestion - 1 == 0){
        
        document.getElementById("q_" + currentQuestion).style.display = "block";
    }else{
        /*If its the last question*/
        if (currentQuestion == 4){
            document.getElementById("next").style.display = "none";
            document.getElementById("finish").style.display = "block";
            
        }
        
        /*Hide Old Question*/
        document.getElementById("q_" + (currentQuestion - 1)).style.display = "none";
        
        document.getElementById("q_" + currentQuestion).style.display = "block";
    }
}
