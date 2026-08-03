function startTraining() {

    let name = document.getElementById("playerName").value.trim();


    if (name === "") {
        alert("Please enter your name ⚽");
        return;
    }


    // Hide login box
    document.querySelector(".profile").style.display = "none";


    // Show dashboard
    let dashboard = document.getElementById("dashboard");

    dashboard.classList.remove("hidden");


    dashboard.innerHTML = `

        <h2>Welcome ${name} 👋</h2>

        <p>
        Start your football training journey!
        </p>


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



function openPage(page) {

    window.location.href = "pages/" + page;

}
