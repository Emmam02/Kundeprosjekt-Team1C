"use strict";

function loginView(){
    app.innerHTML = /*HTML*/`
    <div id="loginView">
        <div id="LoginBox">
        <div id="title">Testify</div>
        <input id="userInputName" placeholder="Username" type="text" required>
        <input id= "userInputPAS" placeholder="Password" type="text" required>
        <button type="submit">Login</button>
    </div>
    `;

}