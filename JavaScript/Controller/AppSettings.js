"use strict";
//Start

let siteSettings = document.getElementById("siteSettings");

function loadSettingsApp(){
    if(model.app.isDarkMode == true){
        siteSettings.style.color = "#ffffff";
        siteSettings.style.backgroundColor = "#181818";
        //updateView();
    }else{
        siteSettings.style.color = "#000000";
        siteSettings.style.backgroundColor = "#ffffff";
        //updateView();
    }
}

//End