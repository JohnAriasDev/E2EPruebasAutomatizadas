class LoginSelector {

    getEmailLogin(){
        return cy.get('input[name="identification"]', { timeout: 5000 })
    }
    getPasswordLogin(){
        return cy.get('input[name="password"]', { timeout: 5000 })
    }
    getButtonLogin(){
        return cy.get('button.login', { timeout: 5000 })
    }

}

export default LoginSelector