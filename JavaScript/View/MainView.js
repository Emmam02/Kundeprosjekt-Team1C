"use strict";
//Start

function getLoggedInUser(){
    return model.data.users.find((user) => user.id === model.app.userID)
}



function currentUser(){
    let theUser;
    let fakeUser = model.data.fakeUser;
    if (model.app.userID == null) {
        theUser = fakeUser;
    }else{
        theUser = getLoggedInUser();
    }
    return theUser;
}


function mainView(){
    app.innerHTML = /*HTML*/`
    <div id="mainView">
        <nav id="nav-bar">
            <div id="nav-title-content">
                <div id="nav-title">Testify</div>
            </div>
            <div id="nav-profile-content">
                <div id="nav-profile-text">${currentUser().username}</div>
                <img id="nav-profile-picture" src="${currentUser().image}">

                <div style="margin-right:5px">${model.app.isDarkMode ? "Light mode" : "Dark mode"}</div>
            <label id="mainViewsclass="class="switch">
            <input id="darkModeCheckBox" onclick="toggleDarkMode()" type="checkbox" value="${model.app.isDarkMode}">
            <span class="slider round"></span>
            </label>
            </div>
        </nav>

        <div id="search-bar">
            <input id="search-bar-text" placeholder="Søk..." type="search">
        </div>

        <span>
        <div id="themeContainer">
            <div class="themeDisplay link-view" onclick="changeViewByCategory(model.data.allCategories[0].name)">${model.data.allCategories[0].name}</div>
            <div class="themeDisplay link-view" onclick="changeViewByCategory(model.data.allCategories[1].name)">${model.data.allCategories[1].name}</div>
            <div class="themeDisplay link-view" onclick="changeViewByCategory(model.data.allCategories[2].name)">${model.data.allCategories[2].name}</div>
            <div class="themeDisplay link-view" onclick="changeViewByCategory(model.data.allCategories[3].name)">${model.data.allCategories[3].name}</div>
            <div class="themeDisplay link-view" onclick="changeViewByCategory(model.data.allCategories[4].name)">${model.data.allCategories[4].name}</div>
            <div class="themeDisplay link-view" onclick="changeViewByCategory(model.data.allCategories[5].name)">${model.data.allCategories[5].name}</div>
        </div>

        <div id="quiz-box-position">
            <div id="quiz-by-date" class="">Tom<div>
            <div id="quiz-by-popularity" class="">Tom<div>
        </div>

        <div id="temp-container">
            <h1>Nettstedet er under oppbygging</h1>
            <p style="color: #ca4848;">Vennligst bruk linkene under.</p>
            <p class="link-view" onclick="changeView('loginView')">LoginView</p>
            <p class="link-view" onclick="changeView('registerView')">RegisterView</p>
            <p class="link-view" onclick="changeView('createQuizView')">CreateQuizView</p>
            <p class="link-view" onclick="changeView('myProfileView')">ProfileView</p>
            <p class="link-view" onclick="changeView('quizView')">QuizView</p>
            <p class="link-view" onclick="changeView('quizFilterView')">QuizFilterView</p>
            <p class="link-view" onclick="changeView('errorView')">ErrorView</p>
        </div>
    </div>
    `;
}

//End
