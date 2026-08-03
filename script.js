const button=document.getElementById("startBtn");

button.onclick=function(){

let name=document.getElementById("playerName").value.trim();

if(name==""){

alert("Please enter your name.");

return;

}

localStorage.setItem("playerName",name);

window.location.href="pages/home.html";

}
