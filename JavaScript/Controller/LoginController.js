let pwInput = model.input.loggingInView.password
let userInput = model.input.loggingInView.username
let user;
let canLogIn;

//beholde verdier i inputfelter hvis man prøver å logge inn men skriver feil

function findUser(){
    user = model.data.users.find((user) => user.username == model.input.loggingInView.username)
}

function checkPassword(){
    if (user.password == model.input.loggingInView.password){
        canLogIn = true;
    }
    else canLogIn = false;
}

function logIn(){
    findUser()
    checkPassword()
    if(canLogIn){
        model.app.currentView = "mainView"
        console.log("logget inn")
    }
    else {
        console.log("logget ikke inn")
    }
   updateView()
    
}