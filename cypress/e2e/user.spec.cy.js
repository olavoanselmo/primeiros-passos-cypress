import userData from '/Workspace_QA/primeiros-passos-cypress/cypress/fixtures/userData.json'

describe('Orange HRM Tests', () => {
    const selectorsList = {
        usernameField: "[name= 'username']",
        passwordField: "[name='password']",
        loginButton: "[type='submit']",
        sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
        dashboardGrid: ".orangehrm-dashboard-grid",
        wrongCredentialAlert: "[role='alert']",
        myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
        firstNameField: "[name='firstName']",
        lastNameField: "[name='lastName']",
        genericField: ".oxd-input--active",
        dateField: ".oxd-calendar-date",
        dateCloseButton: ".--close",
        submitButton: "[type='submit']"

    }
    it.only('User Info Updata - Success', () => {
        cy.visit('/auth/login')
        cy.get(selectorsList.usernameField).type(userData.userSucces.username)
        cy.get(selectorsList.passwordField).type(userData.userSucces.password)
        cy.get(selectorsList.loginButton).click()
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(selectorsList.dashboardGrid)
        cy.get(selectorsList.myInfoButton).click()
        cy.get(selectorsList.firstNameField).clear().type('FirstName_Test')
        cy.get(selectorsList.lastNameField).clear().type('LastName_Test')
        cy.get(selectorsList.genericField).eq(3).clear().type('NickNameTest')
        cy.get(selectorsList.genericField).eq(3).clear().type('EmployTest')
        cy.get(selectorsList.genericField).eq(4).clear().type('Other_Test')
        cy.get(selectorsList.genericField).eq(5).clear().type('222234_Test')
        cy.get(selectorsList.genericField).eq(0).clear().type('2025-03-10')
        cy.get(selectorsList.dateCloseButton).click()
        cy.get(selectorsList.genericField).eq(8).clear().type('ssnNumber_Test')
        cy.get(selectorsList.genericField).eq(9).clear().type('ssiNumber_Test')
        cy.get(selectorsList.submitButton).eq(0).click()
        cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
        cy.get('.oxd-select-dropdow > :nth-child(2)').click()
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')


    })
    it('Login - Fail', () => {
        cy.visit('/auth/login')
        cy.get(selectorsList.usernameField).type(userData.userFail.username)
        cy.get(selectorsList.passwordField).type(userData.userFail.password)
        cy.get(selectorsList.loginButton).click()
        cy.get(selectorsList.wrongCredentialAlert)
    })
})
