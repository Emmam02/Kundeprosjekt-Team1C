"use strict";
//Start
const root = document.querySelector(':root');
//const siteSettings = document.getElementById("siteSettings");
//const profileNavImg = document.getElementById("nav-profile-picture");
//const profileNavUser = document.getElementById("nav-profile-text");

//Loading settings

firstThemeLoad();

function firstThemeLoad() {
    model.app.isDarkMode == true ? loadDarkMode() : loadLightMode();
}

function toggleThemeColor(params) {

}

function loadDarkMode(){
    root.style.setProperty('--textColorA', '#ffffff');
    root.style.setProperty('--textColorB', '#ffffff');
    root.style.setProperty('--backgroundA', '#181818');
    root.style.setProperty('--backgroundB', '#181818');
    root.style.setProperty('--containerA', '#1e1d1d');
    root.style.setProperty('--containerB', '#1e1d1d');
}

function loadLightMode() {
    root.style.setProperty('--textColorA', '#202020');
    root.style.setProperty('--textColorB', '#202020');
    root.style.setProperty('--backgroundA', '#e8d6b3');
    root.style.setProperty('--backgroundB', '#f8f8ff');
    root.style.setProperty('--containerA', '#e8d6b3');
    root.style.setProperty('--containerB', '#f8f8ff');
}

function loadSettingsApp() {
    loadColorThemeOLD();
    //loadProfilePic();
    //loadUsername();
}

//--------------------------------------------------------------------------------
//Old code starts here
//--------------------------------------------------------------------------------

//loadColorThemeOLD();

function loadSettingsApp() {
    loadColorThemeOLD();
    //loadProfilePic();
    //loadUsername();
}

function changeColorTheme() {
    if (model.app.isDarkMode == true) {
        for (let i = 0; o < array.length; i++) {}
    } else {
        for (let i = 0; index < array.length; i++) {}
    }
}

function changeColorThemeV2() {
    let bgListLength = backgroundList.length;
    let lightModeArray;
    for (let i = 0; i < bgListLength; i++) {
        if (model.app.isDarkMode == true) {
            document.getElementById(backgroundList[i]).style.color = "";
            document.getElementById(backgroundList[i]).style.backgroundColor =
                "";
        } else {
            document.getElementById(backgroundList[i]).style.color = "";
            document.getElementById(backgroundList[i]).style.backgroundColor =
                "";
        }
    }
    if (model.app.isDarkMode == true) {
    } else {
    }
}

function loadColorTheme() {
    if (model.app.isDarkMode == true) {
        //siteSettings.style.color = model.data.themeMode[1].textColor;
        //siteSettings.style.backgroundColor = model.data.themeMode[1].backgroundColor;
    } else {
        //siteSettings.style.color = model.data.themeMode[0].textColor;
        //siteSettings.style.backgroundColor = model.data.themeMode[0].backgroundColor;
    }
}

function toggleMode() {
    let toggleMode = document.getElementById("toggleMode");
    if (model.app.isDarkMode == false) {
        currentUser().themeMode = false;
        loadLightMode();
        model.app.isDarkMode = true;
        toggleMode.innerText = `Light Mode`;
    } else if (model.app.isDarkMode == true) {
        currentUser().themeMode = true;
        loadDarkMode();
        toggleMode.innerText = `Dark Mode`;
        model.app.isDarkMode = false;
    }
}

function loadColorThemeOLD() {
    if (model.app.isDarkMode == true) {
        siteSettings.style.color = model.data.themeMode[1].textColor;
        siteSettings.style.backgroundColor =
            model.data.themeMode[1].backgroundColor;
    } else {
        siteSettings.style.color = model.data.themeMode[0].textColor;
        siteSettings.style.backgroundColor =
            model.data.themeMode[0].backgroundColor;
    }
}

function loadProfilePic() {
    if (
        (model.app.username == "" && model.app.userID == null) ||
        model.app.userID == null ||
        model.app.username == ""
    ) {
        profileNavImg.style.backgroundImage =
            "url('Images/DefaultProfile.png')";
    } else {
        profileNavImg.style.background = model.app.profilePic;
    }
}

function loadUsername() {
    if (
        (model.app.username == "" && model.app.userID == null) ||
        model.app.userID == null ||
        model.app.username == ""
    ) {
        profileNavImg.innerText = "Anonymous";
    } else {
        profileNavUser.innerText = model.app.username;
    }
}
//--------------------------------------------------------------------------------

//End
