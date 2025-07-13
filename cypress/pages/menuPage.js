//criação da classe
class MenuPage {
    selectorsList() {
        const selectors = {
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
            performanceButton:
        }
        //
        return selectors
    }
    //criar a função 
    accessMyInfo () {
        cy.get(this.selectorsList().myInfoButton).click()
    }
    //criar função

}
//exportar a classe, ser vista fora da classe.
export default MenuPage