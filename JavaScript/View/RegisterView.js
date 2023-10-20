"use strict";
//Start

function registerView(){
    app.innerHTML = /*HTML*/`
    <div id="registerBox">
        <h1>Testify - Register</h1>
        <input id="regInputUser" class="commonSize" placeholder="Username" type="text" required>
        <input id="regInputPass" class="commonSize" placeholder="Password" type="password" required>
        <button id="regButton" class="commonSize" type="submit">Register</button>
        <p id="linkLoginP" onclick="changeView('loginView')">Do you already have an account? Login here!</p>
        <p class="temp-class" onclick="changeView('mainView')">Tilbake</p>
    </div>
    `;
}

//End