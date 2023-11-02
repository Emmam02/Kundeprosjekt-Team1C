"use strict";

function loginView(){
    app.innerHTML = /*HTML*/`
    <div id="loginView">
        <div id="LoginBox"></div>
        <div id="title">Testify</div>
        <input id="userInputName" placeholder="Brukernavn" type="text" onchange="model.input.loggingInView.username = this.value">
        <input id="userInputPAS" placeholder="Passord" type="password" onchange="model.input.loggingInView.password = this.value, logIn()">
        <input type="checkbox" onclick="togglePasVis()"><div>Vis Passord</div>
        <button id="logInButton" onclick="logIn()">Logg in</button>
        <p class="link-view" onclick="changeView('registerView')">Registrer deg her!</p>
        ${model.app.failedLogin ? wrongUserNameOrPassword() : "" }
    </div>
    `;
}

function wrongUserNameOrPassword(){
    return /*HTML*/`
    <div>Du skrev inn feil brukernavn eller passord</div>
    `
}