"use strict";
//Start

function getLoggedInUser(){
    return model.data.users.find((user) => user.id === model.app.userID)
}

function mainView(){
    app.innerHTML = /*HTML*/`
    <div id="mainView">
        <nav id="nav-bar">
            <div id="nav-title-content">
                <div id="nav-title">Testify - Main Menu</div>
            </div>
            <div id="nav-profile-content">
                <div id="nav-profile-text">${getLoggedInUser().username}</div>
                <img id="nav-profile-picture" src="${getLoggedInUser().image}">
            <div>
        </nav>

        <div id="search-bar">
            <input id="search-bar-text" placeholder="Search..." type="search">
        </div>

        <div id="themeContainer">
            <div class="themeDisplay link-view" onclick="changeView('matQuizView')">${model.data.allCategories[0].name}</div>
            <div class="themeDisplay link-view" onclick="changeView('dyrQuizView')">${model.data.allCategories[1].name}</div>
            <div class="themeDisplay link-view" onclick="changeView('sportQuizView')">${model.data.allCategories[2].name}</div>
            <div class="themeDisplay link-view" onclick="changeView('bilQuizView')">${model.data.allCategories[3].name}</div>
            <div class="themeDisplay link-view" onclick="changeView('spillQuizView')">${model.data.allCategories[4].name}</div>
            <div class="themeDisplay link-view" onclick="changeView('annetQuizView')">${model.data.allCategories[5].name}</div>
        </div>

        <div id="temp-container">
            <h1>Site under construction</h1>
            <p style="color: #ca4848;">Please utilize these links below.</p>
            <p class="link-view" onclick="changeView('loginView')">LoginView</p>
            <p class="link-view" onclick="changeView('registerView')">RegisterView</p>
            <p class="link-view" onclick="changeView('createQuizView')">CreateQuizView</p>
            <p class="link-view" onclick="changeView('myProfileView')">profileView</p>
            <p class="link-view" onclick="changeView('quizView')">QuizView</p>
            <p class="link-view" onclick="changeView('')">Temp</p>
            <p class="link-view" onclick="changeView('')">Temp</p>
        </div>
    </div>
    `;
}

//End
