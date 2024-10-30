Feature: Fluxo de checkout

Background: Login
Given que o usuário acessa a página de login
    When o usuário faz login com "standard_user" e "secret_sauce"
    Then o usuário deve ser redirecionado para a página de vendas

  Scenario: Adicionar produto ao carrinho e finalizar compra
    When o usuário adiciona um produto ao carrinho
    And navega até o carrinho
    And preenche as informações de pagamento
    Then a compra é finalizada com sucesso
