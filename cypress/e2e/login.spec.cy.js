//Describe é usado para agrupar testes relacionados.
//Ele cria um bloco de testes que podem ser aninhados conforme necessário.
describe('Orange HRM Tests', () => {
  
  //It é usado para definir um caso de teste individual.
  //Cada it representa um cenário específico que você deseja testar.
  //it.skip quando queremos pular este it.
  //it.only quando queremos executar apenas este it.
  it('Login - Success', () => {
    //cy.visit(url)- é usado para navegar até uma URL específica.
    //Ele carrega a página no navegador e aguarda o carregamento completo antes de continuar com a execução dos testes.
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSucces.username)
    cy.get(selectorsList.passwordField).type(userData.userSucces.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})
