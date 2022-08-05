var questions = [
    {
        question: "HTML stand with?",
        option:["Html","Hyper Text Markup Lenguage","Css","javascript"],
        answer:"hyper text markup language",
    },
    {
        question: "CSS stand with?",
        option:["html","casacoding style sheet","css"],
        answer:"hyper text markup language",
    },
    {
        question: "JS Is?",
        option:["js","javascript","css"],
        answer:"javascript"
    },
];

var question=document.getElementById('question');
var currentquestion=document.getElementById('currentquestion');
var totalquestions=document.getElementById('totalquestions');
var answerparent=document.getElementById('answerparent');
var indexnumber=0;
var score=0;

function startquiz(){
    question.innerhtml=questions[indexnumber].question;
    answerparent.html="";
    for (var i=0 ;i<question[indexnumber].option.lenght;i++){
        answerparent.innerHTML +=`
        <div class="col-md-6 py-2">
<button onclick="checkquiz(this,"${questions[indexnumber].correct})" class="btn w-100 btn-info"></button>
</div>
`
    }
totalquestions.innerHTML=questions.length;
currentquestion.innerHTML=indexnumber+1;
}

startquiz();



function nextquestion(){
    if(indexnumber ==questions.length-1){
        alert("quiz completed")
    }else{
        indexnumber=indexnumber+1;
        startquiz();
    }

}

function checkquiz(elem,correctoption){
var useroption=elem.innerHTML;
if (useroption == correctoption){
    score=score+1;
}
console.log(score);
var alloptionsbtns=answerparent.getElementsByTagName('button');
for(var i=0 ;i<alloptionsbtns.length;i++){
    alloptionsbtns[i].disabled=true;
    if (alloptionsbtns[i].innerHTML == correctoption){
        alloptionsbtns[i].className +="bg-success";

    }else{
        alloptionsbtns[i].className +="bg-danger";
    }
}
}