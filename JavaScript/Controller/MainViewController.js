"use strict";
//Start

const navPic = document.getElementById();

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

//End