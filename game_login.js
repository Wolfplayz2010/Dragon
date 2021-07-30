function adduser(){
p1name=document.getElementById("player1_name_input").value;
p2name=document.getElementById("player2_name_input").value;
localStorage.setItem("Player1",p1name);
localStorage.setItem("Player2",p2name);
window.location="game_page.html";
}