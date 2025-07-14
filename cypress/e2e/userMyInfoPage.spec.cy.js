import userData from '/Workspace_QA/primeiros-passos-cypress/cypress/fixtures/userData.json'
import LoginPage from '/Workspace_QA/primeiros-passos-cypress/cypress/pages/loginPage.js'
import DashboardPage from '/Workspace_QA/primeiros-passos-cypress/cypress/pages/dashBoardPage.js'

//criando as constantes.
const loginPage = new LoginPage()
const dashBoardPage = new DashboardPage()

describe('Orange HRM Tests', () => {
    const selectorsList = {

    }
    it.only('User Info Updata - Success', () => {
        //chamando a primeira função cy.visit na loginPage.js
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.userSucces.username, userData.userSucces.password)

        //chamando a primeira função cy.visit na loginPage.js
        dashBoardPage.checkDashboardPage()

        cy.visit('/auth/login')

        //cy.get(selectorsList.loginButton).click()
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        //cy.get(selectorsList.dashboardGrid)

        //cy.get(selectorsList.firstNameField).clear().type('FirstName_Test')
        //cy.get(selectorsList.lastNameField).clear().type('LastName_Test')
        //cy.get(selectorsList.genericField).eq(3).clear().type('NickNameTest')
        //cy.get(selectorsList.genericField).eq(3).clear().type('EmployTest')
        //cy.get(selectorsList.genericField).eq(4).clear().type('Other_Test')
        //cy.get(selectorsList.genericField).eq(5).clear().type('222234_Test')
        //cy.get(selectorsList.genericField).eq(0).clear().type('2025-03-10')
        //cy.get(selectorsList.dateCloseButton).click()
        //cy.get(selectorsList.genericField).eq(8).clear().type('ssnNumber_Test')
        //cy.get(selectorsList.genericField).eq(9).clear().type('ssiNumber_Test')
        //cy.get(selectorsList.submitButton).eq(0).click()
        //cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        //cy.get('.oxd-select-dropdow > :nth-child(2)').click()
        //cy.get('body').should('contain', 'Successfully Updated')
        //cy.get('.oxd-toast-close')
    }


    )
    it('Login - Fail', () => {
        cy.visit('/auth/login')
        cy.get(selectorsList.usernameField).type(userData.userFail.username)
        cy.get(selectorsList.passwordField).type(userData.userFail.password)
        cy.get(selectorsList.loginButton).click()
        cy.get(selectorsList.wrongCredentialAlert)
    })
})
