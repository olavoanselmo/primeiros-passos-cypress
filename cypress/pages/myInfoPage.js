//criação da classe
class MyInfoPage {

    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: ".oxd-calendar-date",
            dateCloseButton: ".--close",
            submitButton: "[type='submit']"
        }
        cy.get(':nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input')
        //
        return selectors
    }
    //criar a função que preencherá o formulário da página.
    //função com parâmetros facilitando a reutilização da função.
    fillPersonalDetails(firstName, lastName, nickName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        //cy.get(this.selectorsList().genericField).eq(3).clear().type(nickName)
    }
    fillEmployeeDetails(employeeId, otherId, driversLicenseNumber, expiryDate, ssnNumber, siNumber) {
        cy.get(this.selectorsList().genericField).eq(4).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(driversLicenseNumber)
        cy.get(this.selectorsList().genericField).eq(7).clear().type(expiryDate)
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().genericField).eq(8).clear().type(ssnNumber)
        cy.get(this.selectorsList().genericField).eq(9).clear().type(siNumber)
    }
    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(0).click({ force: true })
        //cy.get('body').should('contain', 'Successfully Updated')
        //cy.get('.oxd-toast-close')
    }
    fillStatus() {
        //cy.get(this.selectorsList.generi)
    }
    //criando uma função para login fail
    checkAccessInvalid() {
        cy.get(this.selectorsList.wrongCredentialAlert)
    }

}
//exportar a classe, ser vista fora da classe.
export default MyInfoPage


