function startTraining(){

    let name = document.getElementById("playerName").value;


    if(name.trim() === ""){
        alert("Please enter your name ⚽");
        return;
    }


    document.querySelector(".profile").style.display="none";


    let dashboard = document.getElementById("dashboard");

    dashboard.classList.remove("hidden");


    dashboard.innerHTML = `

    <h2>Welcome ${name} 👋</h2>

    <p>
    Start your football training journey!
    </p>


    <div class="cards">

        <div class="card" onclick="openPage('shooting')">
        🎯
        <h3>Shooting</h3>
        </div>


        <div class="card" onclick="openPage('dribbling')">
        👟
        <h3>Dribbling</h3>
        </div>


        <div class="card" onclick="openPage('passing')">
        ⚽
        <h3>Passing</h3>
        </div>


        <div class="card" onclick="openPage('speed')">
        🏃
        <h3>Speed</h3>
        </div>


        <div class="card" onclick="openPage('fitness')">
        💪
        <h3>Fitness</h3>
        </div>


        <div class="card" onclick="openPage('nutrition')">
        🍎
        <h3>Nutrition</h3>
        </div>


    </div>

    `;
}



function openPage(page){

    window.location.href = "pages/" + page + ".html";

}
