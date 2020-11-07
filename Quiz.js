 function check(){
    var c=0;
    var q1=document.quiz.ques1.value;
    var q2=document.quiz.ques2.value;
    var q3=document.quiz.ques3.value;
    var q4=document.quiz.ques4.value;
    var q5=document.quiz.ques5.value;
    var result=document.getElementById('result');
    var quiz=document.getElementById('quiz');
    if(q1=="C++") {c++}
    if(q2=="py") {c++}
    if(q3=="int") {c++}
    if(q4=="in") {c++}
if(q5=="1") {c++}
    quiz.style.display="none";
    result.innerHTML=`RESULT: <br /><br /> You scored ${c}/2 <br /><br /> Congratulations! <br /><br />`;
    result.innerHTML+=`<input type="button" name="" value="Try Again!" id="button1" onclick="window.location.reload()">`;
}
