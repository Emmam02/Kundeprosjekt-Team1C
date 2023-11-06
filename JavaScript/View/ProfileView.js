function profileView(){
    app.innerHTML = /*HTML*/ `
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
            <li>${currentUser().image}</li>
            <br>
            <p></p>
            <li>${currentUser().age}</li>
            <br>
            <p></p>
            <!-- 
            <li>users.answeredQuizes</li> 
            Anbefaler å lage listen på en annen måte. Fjernet også dette midlertidig ettersom den forårsaker feil for øyeblikket.
            -->
            <br>
            <p></p>
            <li>Bosted</li>
            <p></p>
            <br>
            <li>Antall quizer gjennomført:</li>
            <p></p>
            <br>
            <li>Antall quizer laget:</li>
        </div>
    
    
        <div id=profileButtonsContainer>
        <button id="myQuizesButton" onclick="changeView('myQuizView')">My Quizes</button>
        <br>
        <button id="myResultsButton" onclick="changeView('myResultsView')">My results</button>
    </div>
    <br>

    <button id="backToMainButton" onclick="changeView('mainView')">Click here to return to main menu</button>

    </div>
    `;
}

//Den henter ikke ID forresten. Bruker bare indeks som er litt mer dumt. Bruker denne kun for å se noen få brukere på profilen
function forcedLogin(){
    usersLength = model.data.users.length;
    model.app.userID = model.data.users[getRandomNumber(usersLength)].id;
    updateView();
}

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
};