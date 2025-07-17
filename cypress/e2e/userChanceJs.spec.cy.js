import userData from '/Workspace_QA/primeiros-passos-cypress/cypress/fixtures/userData.json'
import LoginPage from '/Workspace_QA/primeiros-passos-cypress/cypress/pages/loginPage.js'
import DashboardPage from '/Workspace_QA/primeiros-passos-cypress/cypress/pages/dashBoardPage.js'
import MenuPage from '/Workspace_QA/primeiros-passos-cypress/cypress/pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage'

//Chamando o ChanceJS
const Chance = require('chance')
//instanciando.
const chance = new Chance()


//criando as constantes.
const loginPage = new LoginPage()
const dashBoardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

    it.only('User Info Updata - Success', () => {
        //chamando a primeira função cy.visit na loginPage.js
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.userSucces.username, userData.userSucces.password)

        //chamando a primeira função cy.visit na loginPage.js
        dashBoardPage.checkDashboardPage()

        menuPage.accessMyInfo()
        //chmando as funções e seus atributos.
        myInfoPage.fillPersonalDetails(chance.first(), chance.last(), chance.string())

        //myInfoPage.fillEmployeeDetails('EmployId', 'otherId', 'Drivers Number', '2025-07-29', '1234', '0987')
        myInfoPage.fillStatus()
        myInfoPage.saveForm()
    })

    it('Login - Fail', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
        loginPage.checkAccessInvalid()

    })
})