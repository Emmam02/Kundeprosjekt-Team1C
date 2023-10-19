"use strict";
//Start

function mainView(){
    app.innerHTML = /*HTML*/`
    <header>
        <nav id="nav-bar">
            <div id="nav-title-content">
                <div id="nav-title">Testify - Main Menu</div>
            </div>
            <div id="nav-profile-content">
                <div id="nav-profile-text">Test</div>
                <div id="nav-profile-picture">Img</div>
            <div>
        </nav>
    </header>

    <div id="search-bar">
        <input id="search-bar-text" placeholder="Search..." type="search">
    </div>

    <div id="temp-container">
        <h1>Site under construction</h1>
        <p style="color: #ca4848;">Please utilize these links below.</p>
        <p class="link-view" onclick="changeView('loginView')">LoginView</p>
        <p class="link-view" onclick="changeView('registerView')">RegisterView</p>
        <p class="link-view" onclick="changeView('createQuizView')">CreateQuizView</p>
        <p class="link-view" onclick="changeView('')">Temp</p>
        <p class="link-view" onclick="changeView('')">Temp</p>
        <p class="link-view" onclick="changeView('')">Temp</p>
        <p class="link-view" onclick="changeView('')">Temp</p>
    </div>
    `;
}

//End