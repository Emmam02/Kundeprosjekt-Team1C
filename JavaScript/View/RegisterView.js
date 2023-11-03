"use strict";
//Start

function registerView(){
    app.innerHTML = /*HTML*/`
    <div id="registerBox">
        <h1>Testify - Registrer</h1>
        
        <div class="inputContainer"> 
            <div>Brukernavn: </div>
            <input id="regInputUser" placeholder="Brukernavn" type="text" oninput="model.input.createAccount.username = this.value" required>
        </div>

        <div class="inputContainer">
            <div>Passord: </div>         
            <input id="regInputPass" placeholder="Passord" type="password" oninput="model.input.createAccount.password = this.value" required>
        </div>

        <div class="inputContainer">
            <div>Navn: </div> 
            <input id="regInputName" placeholder="Navn" type="text" oninput="model.input.createAccount.name = this.value" required>
        </div>

        <div class="inputContainer">
            <div>Alder: </div> 
            <input id="regInputAge"  placeholder="Alder" type="number" oninput="model.input.createAccount.age = this.value" required>
        </div>

        <div class="inputContainer">
            <div>Mail: </div> 
            <input id="regInputMail" placeholder="Mail" type="text" oninput="model.input.createAccount.mail = this.value" required>
        </div>

        <div class="inputContainer">
            <div>Bildeadresse: </div> 
            <input id="regInputAvatar" placeholder="Bildeadresse" oninput="model.input.createAccount.image = this.value">
        </div>

        <button id="regButton" type="submit" onclick="registerAccount();changeView('loginView')">Registrer</button>
        <p id="linkLoginP" onclick="changeView('loginView')">Har du allerede en bruker? Logg inn her!</p>
        <p class="temp-class" onclick="changeView('mainView')">Tilbake</p>
    </div>
    `;
}

//End