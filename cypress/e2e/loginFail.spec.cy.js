import userData from '/Workspace_QA/primeiros-passos-cypress/cypress/fixtures/userData.json'
import LoginPage from '/Workspace_QA/primeiros-passos-cypress/cypress/pages/loginPage.js'
import DashboardPage from '/Workspace_QA/primeiros-passos-cypress/cypress/pages/dashBoardPage.js'

//criando as constantes.
const loginPage = new LoginPage()
const dashBoardPage = new DashboardPage()

describe('Login Orange HRM Tests', () => {

    it('Login - Fail', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
        loginPage.checkAccessInvalid()
    })

    it('Login - Success', () => {
        //chamando a primeira função cy.visit na loginPage.js
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.userSucces.username, userData.userSucces.password)
        //utilizaremos a pagina dashboard para verificar que passamos o login com sucesso.
        //utilizando a função
        dashBoardPage.checkDashboardPage()
        

    })

    
})