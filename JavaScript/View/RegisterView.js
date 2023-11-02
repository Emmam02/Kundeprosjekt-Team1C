"use strict";
//Start

function registerView(){
    app.innerHTML = /*HTML*/`
    <div id="registerBox">
        <h1>Testify - Register</h1>
        
        <div class="inputContainer"> 
            <div>Username: </div>
            <input id="regInputUser" placeholder="Username" type="text" oninput="model.input.createAccount.username = this.value" required>
        </div>

        <div class="inputContainer">
            <div>Password: </div>         
            <input id="regInputPass" placeholder="Password" type="password" oninput="model.input.createAccount.password = this.value" required>
        </div>

        <div class="inputContainer">
            <div>Name: </div> 
            <input id="regInputName" placeholder="Name" type="text" oninput="model.input.createAccount.name = this.value" required>
        </div>

        <div class="inputContainer">
            <div>Age: </div> 
            <input id="regInputAge"  placeholder="Age" type="number" oninput="model.input.createAccount.age = this.value" required>
        </div>

        <div class="inputContainer">
            <div>Mail: </div> 
            <input id="regInputMail" placeholder="Mail" type="text" oninput="model.input.createAccount.mail = this.value" required>
        </div>

        <div class="inputContainer">
            <div>Image: </div> 
            <input id="regInputAvatar" placeholder="Image" oninput="model.input.createAccount.image = this.value">
        </div>

        <button id="regButton" type="submit" onclick="registerAccount()">Register</button>
        <p id="linkLoginP" onclick="changeView('loginView')">Do you already have an account? Login here!</p>
        <p class="temp-class" onclick="changeView('mainView')">Tilbake</p>
    </div>
    `;
}

//End