"use strict";
//Start

const navUser = document.getElementById("nav-profile-text")
const navPic = document.getElementById("nav-profile-picture");

function getProfilePic(){
    return model.app.profilePic;
}

function setProfilePic(){
    if (getProfilePic() == "") {
        navPic.style.background = "url('Images/DefaultProfile.png')";
    }else{
        navPic.style.backgroundImage = `url('${getProfilePic().toString()}')`;
    }
}

function getUsernameNav(){
    if(model.app.username.toString() == (null || "")){
        model.app.username = "Anonymous";
    }else{
        return model.app.username.toString();
    }
}

function setUsernameNav(){
    navUser.innerText = getUsernameNav();
}

//End