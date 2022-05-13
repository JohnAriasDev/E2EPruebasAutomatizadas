class LoginSelector {

    getEmailLogin(){
        return cy.get('#ember7', { timeout: 5000 })
    }
    getPasswordLogin(){
        return cy.get('#ember9', { timeout: 5000 })
    }
    getButtonLogin(){
        return cy.get('#ember11', { timeout: 5000 })
    }

}

export default LoginSelector