"use strict";
//Start

function getLoggedInUser() {
    return model.data.users.find((user) => user.id === model.app.userID);
}

function currentUser() {
    let theUser;
    let fakeUser = model.data.fakeUser;
    if (model.app.userID == null) {
        theUser = fakeUser;
    } else {
        theUser = getLoggedInUser();
    }
    return theUser;
}

function mainView() {
    app.innerHTML = /*HTML*/ `
    <div id="mainView">
        <nav id="nav-bar">

            <div id="loginNavButton" onclick="changeView('loginView')">Logg inn</div>

            <div id="nav-title-content">
                <div id="nav-title"onclick="changeView('mainView')">Testify</div>
            </div>
            <div id="nav-profile-content">
                <div id="nav-profile-text"onclick="changeView('myProfileView')">${
                    currentUser().username
                }</div>
                <img id="nav-profile-picture" onclick="changeView('myProfileView')" src="${
                    currentUser().image
                }">

                <div style="margin-right:5px"id="toggleMode">Dark/Light Mode
                </div>
                <label class="switch">
                <input id="toggleMode" onclick="toggleMode()" type="checkbox">
                <span class="slider round"></span>
                </label>
            </div>
        </nav>

        <div id="search-bar">
            <input id="search-bar-text" placeholder="Søk..." type="search">
        </div>

        <span>
        <div id="themeContainer">
            <div class="themeDisplay link-view" onclick="changeViewByCategory(model.data.allCategories[0].name)">${
                model.data.allCategories[0].name
            }</div>
            <div class="themeDisplay link-view" onclick="changeViewByCategory(model.data.allCategories[1].name)">${
                model.data.allCategories[1].name
            }</div>
            <div class="themeDisplay link-view" onclick="changeViewByCategory(model.data.allCategories[2].name)">${
                model.data.allCategories[2].name
            }</div>
            <div class="themeDisplay link-view" onclick="changeViewByCategory(model.data.allCategories[3].name)">${
                model.data.allCategories[3].name
            }</div>
            <div class="themeDisplay link-view" onclick="changeViewByCategory(model.data.allCategories[4].name)">${
                model.data.allCategories[4].name
            }</div>
            <div class="themeDisplay link-view" onclick="changeViewByCategory(model.data.allCategories[5].name)"><span class="innerCatText">${
                model.data.allCategories[5].name
            }</span></div>
        </div>
        
        <div id="gotoCreateYourOwnQuiz">
        <button onclick="changeView('createQuizView')">
        Lag din egen quiz her!</button>
        </div>

        <div id="quiz-box-position">
            <div id="quiz-by-date" class="">
            <h2>Nyeste Quizer</h2>
            <div id="quizByDateContainer">
            <ol>
            <li>Hvor mange tær har jeg?</li>
            <li>Hvilken superhelt er pappa?</li>
            <li>Hvilken farge ku er jeg?</li>
            <li>Hvilket land passer meg?</li>
            <li>Kan jeg bli bilmekaniker?</li>
            </ol>
            </div>
            </div>
            <div>
            <div id="quiz-by-popularity" class="">
            <h2>Populære quizer</h2>
            <div id="quizByPopularityContainer">
            <ol>
            <li onclick="changeView('quizView')">Hvilken hund er du?</li>
            <li>Hvilken jobb passer meg?</li>
            <li>Hvilken wienerbakst er jeg?</li>
            <li>Hvem er jeg i flåklypa?</li>
            <li>Hvor gammel er sjela mi?</li>
            </ol>
            </div>
            </div>
            
        <!--<div id="temp-container">
            <h1>Nettstedet er under oppbygging</h1>
            <p style="color: #ca4848;">Vennligst bruk linkene under.</p>
            <p class="link-view" onclick="changeView('loginView')">LoginView</p>
            <p class="link-view" onclick="changeView('registerView')">RegisterView</p>
            <p class="link-view" onclick="changeView('createQuizView')">CreateQuizView</p>
            <p class="link-view" onclick="changeView('myProfileView')">ProfileView</p>
            <p class="link-view" onclick="changeView('quizView')">QuizView</p>
            <p class="link-view" onclick="changeView('quizFilterView')">QuizFilterView</p>
            <p class="link-view" onclick="changeView('errorView')">ErrorView</p>
        </div>-->
        
        
        
    </div>
    
    `;
}

//End
