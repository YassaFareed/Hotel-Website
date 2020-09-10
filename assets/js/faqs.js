var questions = document.querySelector(".question");
var answer = document.querySelector(".answer");
var ques = document.querySelector(".ques");


questions.onclick = function(){

    if(answer.style.display === "none")
    {
        answer.style.display = "block";
        ques.innerHTML="   \\/";
    }else
    {
        answer.style.display = "none";
        ques.innerHTML=">";
    }

} 