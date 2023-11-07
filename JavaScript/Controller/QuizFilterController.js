"use strict";
//Start

function getQuizByCategories(){
    let currentTheme = model.app.currentTheme;
    let allQuizes = [...model.data.allQuizes];
    let arrayLength = allQuizes.length -1;
    let currentQuizCatArray = model.data.quizbyCategories;

    for (let i = 0; i <= arrayLength; i++) {
        if (allQuizes[i].theme === currentTheme) {
            let themedQuiz = [...allQuizes][i];
            currentQuizCatArray.push(themedQuiz);
        }
        //i++;
    }
}

function getNewQuizes(){

}

function getPopularQuizes(){

}

















function getNewQuizes2(category){

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

function getPopularQuizes2(category){

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