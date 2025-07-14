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
        //
        return selectors
    }
    //criar a função 
    accessMyInfo() {
        cy.get(this.selectorsList().myInfoButton).click()
    }
    //criar função
    accessorPerformance() {
        cy.get(this.selectorsList().performanceButton).click()
    }

}
//exportar a classe, ser vista fora da classe.
export default MyInfoPage


