var P1name=localStorage.getItem("Player1");
var P2name=localStorage.getItem("Player2");
var P1score=0;
var P2score=0;
document.getElementById("player1name").innerHTML=P1name+" : ";
document.getElementById("player2name").innerHTML=P2name+" : ";
document.getElementById("player1score").innerHTML=P1score;
document.getElementById("player2score").innerHTML=P2score;
document.getElementById("PlayerQ").innerHTML="Question Turn : "+P1name;
document.getElementById("PlayerA").innerHTML="Answer Turn : "+P2name;
function send(){
var word=document.getElementById("word").value;
newword=word.toLowerCase();
C1=newword.charAt(1);
var L2=Math.floor(newword.length/2);
C2=newword.charAt(L2);
C3=newword.charAt(newword.length-1);
R1=newword.replace(C1,"_");
R2=R1.replace(C2,"_");
R3=R2.replace(C3,"_");
question_word = "<h4 id='word_display'> Q. "+R3+"</h4>";
input_box = "<br>Answer : <input type='text' id='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row =  question_word + input_box + check_button ; 
document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
}
var questionturn="P1";
var answerturn="P2";
function check(){
var answer=document.getElementById("input_check_box").value;
var myanswer=answer.toLowerCase();
if (myanswer==newword){
if(answerturn=="P1"){
P1score=P1score+1;
document.getElementById("player1score").innerHTML=P1score;
}
else{
P2score=P2score+1;
document.getElementById("player2score").innerHTML=P2score;
}
}
if(questionturn=="P1"){
questionturn="P2";
answerturn="P1";
document.getElementById("PlayerQ").innerHTML = "Question Turn - " + P2name ;
document.getElementById("PlayerA").innerHTML = "Answer Turn - " + P1name ;
}
else{
questionturn="P1";
answerturn="P2";
document.getElementById("PlayerQ").innerHTML = "Question Turn - " + P1name ;
document.getElementById("PlayerA").innerHTML = "Answer Turn - " + P2name ;
}
document.getElementById("output").innerHTML="";








































































































}
