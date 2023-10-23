"use strict";
//Start

const siteSettings = document.getElementById("siteSettings");
const profileNavImg = document.getElementById("nav-profile-picture");

loadSettingsApp();
loadProfilePic();

function loadSettingsApp(){
    loadColorTheme();
}

function loadColorTheme(){
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

//End