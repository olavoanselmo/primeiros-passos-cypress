class LoginPage {
    //função selectorsList
    selectorsList() {
        //constante
        const selectors = {
            usernameField: "[name= 'username']",
            passwordField: "[name='password']",
            loginButton: "[type='submit']",
            wrongCredentialAlert: "[role='alert']"
        }
        return selectors
    }

    accessLoginPage() {
        //acessando a página de login
        cy.visit('/auth/login')
    }
    loginWithAnyUser(username, password) {
        //chamaremos a função presente na mesma classe com o this.
        //essa função vai preencher a página de login.
        //vai colocar username, password e clicar no login.
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }
}
export default LoginPage