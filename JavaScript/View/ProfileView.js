function profileView(){
    app.innerHTML = /*HTML*/ `
    <div id="mainContainer">
    <div id="headerContainer">
    <h1>Profile page</h1></div>


    <div id="userName"><h1>Per Poll</h1></div>
    <div id="profilePic"><img src="img/Køllaferdig.jpg"></div>
    <form action="upload.php" method="post" enctype="multipart/form-data">
    <label for="file">Klikk her for å velge et profilbilde:</label>
    <input type="file" name="file" id="file" accept="image/*">
    <br>
    <div>Klikk her for å laste opp<input type="submit" value="Upload" onclick="changeProfilePic()"></div>
    </form>

   
   
    <div id="generalInfoContainer">
    <li>$[{users.username}]</li>
    <br>
    <p>
    <li>$[{users.age}]</li>
    <br>
    <p>
    <li>$[{users.answeredQuizes}]</li>
    <br>
    <p>
    <li>Bosted</li>
    <p>
    <br>
    <li>Antall quizer gjennomført:</li>
    <p>
    <br>
    <li>Antall quizer laget:</li>
    </div>
    
    
    <div id=profileButtonsContainer>
    <button id="myQuizesButton" onclick="myQuizView()">My Quizes</button>
    <br>
    <button id="myResultsButton" onclick="myResultsView()">My results</button>
    </div>
<br>

<button id="backToMainButton" onclick="mainView()">Click here to return to main menu</button>

</div>
    `;
}