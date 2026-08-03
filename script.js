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

        <div class="card">
        🎯
        <h3>Shooting</h3>
        </div>


        <div class="card">
        👟
        <h3>Dribbling</h3>
        </div>


        <div class="card">
        ⚽
        <h3>Passing</h3>
        </div>


        <div class="card">
        🏃
        <h3>Speed</h3>
        </div>


        <div class="card">
        💪
        <h3>Fitness</h3>
        </div>


        <div class="card">
        🍎
        <h3>Nutrition</h3>
        </div>


    </div>

    `;
}
