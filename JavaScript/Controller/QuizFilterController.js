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
        } else {
            console.log('lmao skipping');
        }
        i++;
        console.log('Running loop: ' + i);
    }
    console.log('Loop done!');
}

//End