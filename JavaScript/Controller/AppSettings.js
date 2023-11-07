"use strict";
//Start

const siteSettings = document.getElementById("siteSettings");
const profileNavImg = document.getElementById("nav-profile-picture");
const profileNavUser = document.getElementById("nav-profile-text")
const backgroundList = ['nav-bar','mainContainer','createYourOwnQuizContainer'];

//Loading settings

function loadSettingsApp(){
    loadColorThemeOLD();
    //loadProfilePic();
    //loadUsername();
}

loadColorThemeOLD();

function changeColorTheme(){
    if (model.app.isDarkMode == true) {
        for (let i = 0; o < array.length; i++) {
            
        }
    }else{
        for (let i = 0; index < array.length; i++) {
            
        }
    }
}

function changeColorThemeV2(){
    let bgListLength = backgroundList.length;
    let lightModeArray
    for (let i = 0; i < bgListLength; i++) {
        if (model.app.isDarkMode == true) {
            document.getElementById(backgroundList[i]).style.color = '';
            document.getElementById(backgroundList[i]).style.backgroundColor = '';
        } else {
            document.getElementById(backgroundList[i]).style.color = '';
            document.getElementById(backgroundList[i]).style.backgroundColor = '';
        }
    }
    if (model.app.isDarkMode == true) {

    } else {
        
    }
}


function loadColorTheme(){
    if(model.app.isDarkMode == true){

        //siteSettings.style.color = model.data.themeMode[1].textColor;
        //siteSettings.style.backgroundColor = model.data.themeMode[1].backgroundColor;
    }else{
        //siteSettings.style.color = model.data.themeMode[0].textColor;
        //siteSettings.style.backgroundColor = model.data.themeMode[0].backgroundColor;
    }
}



//--------------------------------------------------------------------------------
//Old code starts here
//--------------------------------------------------------------------------------

function loadColorThemeOLD(){
    if(model.app.isDarkMode == true){
        siteSettings.style.color = model.data.themeMode[1].textColor;
        siteSettings.style.backgroundColor = model.data.themeMode[1].backgroundColor;
    }else{
        siteSettings.style.color = model.data.themeMode[0].textColor;
        siteSettings.style.backgroundColor = model.data.themeMode[0].backgroundColor;
    }
}

function loadProfilePic(){
    if(model.app.username == "" && model.app.userID == null || model.app.userID == null || model.app.username == ""){
        profileNavImg.style.backgroundImage = "url('Images/DefaultProfile.png')";
    }else{
        profileNavImg.style.background = model.app.profilePic;
    }
}

function loadUsername(){
    if((model.app.username == "" && model.app.userID == null) || model.app.userID == null || model.app.username == ""){
        profileNavImg.innerText = "Anonymous";
    }else{
        profileNavUser.innerText = model.app.username;
    }
}
//--------------------------------------------------------------------------------

//End