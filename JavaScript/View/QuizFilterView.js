"use strict";
//Start

function quizFilterView() {
    app.innerHTML = /*HTML*/ `
    <nav id="nav-bar">
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

        <div style="margin-right:5px">${
            model.app.isDarkMode ? "Light mode" : "Dark mode"
        }</div>
    <label id="mainViewsclass="class="switch">
    <input id="darkModeCheckBox" onclick="toggleDarkMode()" type="checkbox" value="${
        model.app.isDarkMode
    }">
    <span class="slider round"></span>
    </label>
    </div>
</nav>
    <div id="quizFilterSite">
        <div>Hei, denne siden er tom. :></div>
        <button class="link-view" onclick="changeView('mainView')">Tilbake</button>

        <h1>${model.app.currentTheme}-quizer</h1>

        <div id="extra-container">
            <div id="theQuiz-container">
                <div id="newest-Quiz-container">
                    <h3>Nyeste quizer</h3>
                    <div id="newest-Quiz">${getNewQuizes()}</div>
                </div>
                <div id="popular-Quiz-container">
                    <h3>Mest populære quizer</h3>
                    <div id="popular-Quiz">${getPopularQuizes()}</div>
                </div>
            </div>
            <div id="">
                <img id="" src="">
                <input id="" placeholder="Søk i ${
                    model.app.currentTheme
                }-quizer...">
            </div>
        </div>
    </div>
    `;
}

//${getNewQuizes(model.app.currentTheme)}
//${getPopularQuizes(model.app.currentTheme)}

//End
