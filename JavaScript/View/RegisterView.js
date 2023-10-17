"use strict";
//Start

function registerView(){
    app.innerHTML = /*HTML*/`
    <div id="registerBox">
        <h1>Register</h1>
        <input id="regInputUser" placeholder="Username" type="text">
        <input id="regInputPass" placeholder="Password" type="password">
        <p id="linkLoginP" onclick="changeView('loginPage')">Do you already have an account? Login here!</p>
    </div>
    `;
}

//End