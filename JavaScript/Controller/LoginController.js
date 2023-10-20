let pwInput = document.getElementById("userInputPAS")
let userInput = document.getElementById("userInputName")

//beholde verdier i inputfelter hvis man prøver å logge inn men skriver feil

function checkUser(){
    return model.data.users.find((user) => user.username == userInput.value)
}

function checkPassword(){
    return model.data.users.find((user) => user.password == pwInput.value)
}

function logIn(){
    if(checkUser() && checkPassword()){
        model.app.currentView = "mainView"
    }
   updateView()
    
}