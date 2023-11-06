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
                    <div id="newest-Quiz"></div>
                </div>
                <div id="popular-Quiz-container">
                    <h3>Mest populære quizer</h3>
                    <div id="popular-Quiz"></div>
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

function getNewQuizes(category){

    if (model.app.currentTheme == (null || "")) {
        document.getElementById('newest-Quiz').innerHTML = /*HTML*/`
            <p>No quizes to show. Did you access this in a different way?</p>
        `;
    }else if(model.app.currentTheme !== model.data.allCategories.name){
        document.getElementById('newest-Quiz').innerHTML = /*HTML*/`
            <p>Error, the current theme does not match any existing themes.</p>
        `;
    }else{
        for (let index = 0; index < array.length; index++) {
            //const element = array[index];
            document.getElementById('newest-Quiz').innerHTML += /*HTML*/`
                <div></div>
            `;
        }
    }
}

function getPopularQuizes(category){

    if (model.app.currentTheme == (null || "")) {
        document.getElementById('popular-Quiz').innerHTML = /*HTML*/`
        <div></div>
        `;
    }else{


        for (let index = 0; index < array.length; index++) {
            //const element = array[index];
        }
    }
}



//End