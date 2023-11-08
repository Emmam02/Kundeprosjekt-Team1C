function profileView() {
    app.innerHTML = /*HTML*/ `
    <nav id="nav-bar">
    <div id="nav-title-content">
        <div id="nav-title"onclick="changeView('mainView')">Testify</div>
    </div>
    <div id="nav-profile-content">
        <div id="nav-profile-text"onclick="changeView('myProfileView')">${
            currentUser().username
        }</div>
        <img id="nav-profile-picture" onclick="changeView('myProfileView')" src="${
            currentUser().image
        }">

        <div style="margin-right:5px"id="toggleMode">Dark/Light Mode
        </div>
        <label class="switch">
        <input id="toggleMode" onclick="toggleMode()" type="checkbox">
        <span class="slider round"></span>
        </label>
    </div>
    </nav>
    <div id="mainContainer">
        <div id="headerContainer">
            <h1>Profile page</h1>
        </div>

        <button onclick="forcedLogin()">Midlertidig bruker</button>

        <div id="userName"><h1>${currentUser().username}</h1></div>
        <div id="profilePic"><img src="${currentUser().image}"></div>

        <form action="upload.php" method="post" enctype="multipart/form-data">
            <label for="file">Klikk her for å velge et profilbilde:</label>
            <input type="file" name="file" id="file" accept="image/*">
            <br>
            <div>Klikk her for å laste opp<input type="submit" value="Upload" onclick="changeProfilePic()"></div>
        </form>

        <!-- 
        Om jeg husket rett, fikk vi beskjed om å kun bruke url.
        Derimot, hvis vi hadde en database og et nettsted, skulle dette ha fungert godt
        - By: A certain snake
        -->
   
        <div id="generalInfoContainer">
            
            <p></p>
            <!-- 
            <li>users.answeredQuizes</li> 
            Anbefaler å lage listen på en annen måte. Fjernet også dette midlertidig ettersom den forårsaker feil for øyeblikket.
            -->
            <li>Alder: ${currentUser().age}
            <br>
            <p>
            <li>Bosted: Larvik</li>
            <br>
        
            <li>${currentUser().mail}
            <br>
            <p>
            <li>Antall fullførte quizer: 3</li>
            <p></p>
            <br>
            <li>Antall quizer laget: 1</li>
        </div>
    
        <div id="recentQuizesContainer"><h2>Nylige fullførte quizer:</h2>
        <li>"Hvilken hund er jeg?"</li>
        <br>
        <li>"Hvilken wienerbakst er jeg??"</li>
        <br>
        <li>"Hvor i verden smaker gress best?"</li>
        <br>
        <li>"Hvordan burde jeg bruke et trekkspill?"</li>
        <br>
        <li>"Hvilken garntype er jeg?"</li>
        </div>
    
        <div id=profileButtonsContainer>
        <button id="myQuizesButton" onclick="changeView('myQuizView')">Mine quizer</button>
        <br>
        <button id="myResultsButton" onclick="changeView('myResultsView')">Mine resultater</button>
        </div>
    </div>
    <br>

    <button id="backToMainButton" onclick="changeView('mainView')">Klikk her for å gå tilbake til hovedmenyen</button>

    </div>
    `;
}

//Den henter ikke ID forresten. Bruker bare indeks som er litt mer dumt. Bruker denne kun for å se noen få brukere på profilen
function forcedLogin() {
    usersLength = model.data.users.length;
    model.app.userID = model.data.users[getRandomNumber(usersLength)].id;
    updateView();
}

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}
