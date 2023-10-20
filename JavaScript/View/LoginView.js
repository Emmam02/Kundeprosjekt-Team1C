"use strict";

function loginView(){
    app.innerHTML = /*HTML*/`
    <div id="loginView">
        <div id="LoginBox"></div>
        <div id="title">Testify</div>
        <input id="userInputName" placeholder="Username" type="text">
        <input id="userInputPAS" placeholder="Password" type="password" onchange="logIn()">
        <button id="logInButton" type="submit" onclick="logIn()">Login</button>
        ${model.app.failedLogin ? wrongUserNameOrPassword() : "" }
    </div>
    `;
}

function wrongUserNameOrPassword(){
    return `
    <div>Du skrev inn feil brukernavn eller passord</div>
    `
}