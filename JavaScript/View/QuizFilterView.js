"use strict";
//Start

function quizFilterView(){
    app.innerHTML = /*HTML*/`
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
                <input id="" placeholder="Søk i ${model.app.currentTheme}-quizer...">
            </div>
        </div>
    </div>
    `;
}

//${getNewQuizes(model.app.currentTheme)}
//${getPopularQuizes(model.app.currentTheme)}

//End