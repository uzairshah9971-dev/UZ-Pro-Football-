function startTraining(){


let name = document.getElementById("playerName").value.trim();



if(name === ""){

alert("Please enter your name ⚽");

return;

}



// Save player data

localStorage.setItem("playerName", name);

localStorage.setItem("level", "Beginner");

localStorage.setItem("xp", "250");

localStorage.setItem("streak", "5");



// Hide login

document.querySelector(".profile").style.display="none";



// Show dashboard

showDashboard(name);


}




function showDashboard(name){


let dashboard=document.getElementById("dashboard");


dashboard.classList.remove("hidden");



let level=localStorage.getItem("level");

let xp=localStorage.getItem("xp");

let streak=localStorage.getItem("streak");



dashboard.innerHTML=`


<h2>
Welcome ${name} 👋
</h2>



<div class="profile">


<h2>
⭐ Player Profile
</h2>


<p>
Level: ${level}
</p>


<p>
XP: ${xp}/1000
</p>


<p>
🔥 Training Streak: ${streak} Days
</p>


</div>



<div class="profile">


<h2>
📊 Training Progress
</h2>


<p>🎯 Shooting</p>
<progress value="70" max="100"></progress>


<p>👟 Dribbling</p>
<progress value="60" max="100"></progress>


<p>⚽ Passing</p>
<progress value="80" max="100"></progress>


<p>🏃 Speed</p>
<progress value="65" max="100"></progress>


<p>💪 Fitness</p>
<progress value="75" max="100"></progress>


</div>



<h2>
Choose Training
</h2>



<div class="cards">


<div class="card" onclick="openPage('shooting.html')">
🎯
<h3>Shooting</h3>
</div>


<div class="card" onclick="openPage('dribbling.html')">
👟
<h3>Dribbling</h3>
</div>


<div class="card" onclick="openPage('passing.html')">
⚽
<h3>Passing</h3>
</div>


<div class="card" onclick="openPage('speed.html')">
🏃
<h3>Speed</h3>
</div>


<div class="card" onclick="openPage('fitness.html')">
💪
<h3>Fitness</h3>
</div>


<div class="card" onclick="openPage('nutrition.html')">
🍎
<h3>Nutrition</h3>
</div>


</div>


`;

}





// Open training pages

function openPage(page){

window.location.href="pages/"+page;

}




// Load saved player automatically

window.onload=function(){


let savedName=localStorage.getItem("playerName");


if(savedName){


document.getElementById("playerName").value=savedName;


}

};
