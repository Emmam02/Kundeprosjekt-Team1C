function registerNewAccount(){
    model.data.users.push(model.input.createAccount)
}

function registerAccount() {
    model.input.createAccount.id = generateUniqueId(),
    model.data.users.push(model.input.createAccount);
}