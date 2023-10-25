"use strict";

function loginView(){
    app.innerHTML = /*HTML*/`
    <div id="loginView">
        <div id="LoginBox"></div>
        <div id="title">Testify</div>
        <input id="userInputName" placeholder="Username" type="text" onchange="model.input.loggingInView.username = this.value">
        <input id="userInputPAS" placeholder="Password" type="password" onchange="model.input.loggingInView.password = this.value, logIn()">
        <input type="checkbox" onclick="togglePasVis()">Show Password
        <button id="logInButton" onclick="logIn()">Login</button>
        <p class="link-view" onclick="changeView('registerView')">Registrer deg her!</p>
        ${model.app.failedLogin ? wrongUserNameOrPassword() : "" }
    </div>
    `;
}

function wrongUserNameOrPassword(){
    return `
    <div>Du skrev inn feil brukernavn eller passord</div>
    `
}