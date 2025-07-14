//criação da classe
class MenuPage {
    selectorsList() {
        const selectors = {
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
            performanceButton: "[href='/web/index.php/performance/viewPerformanceModule']"
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
//exportar a classe, para ser vista fora da classe.
export default MenuPage