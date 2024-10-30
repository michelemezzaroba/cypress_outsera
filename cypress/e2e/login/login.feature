Feature: Login e navegação

  Scenario: Login e navegação até a página de vendas
    Given que o usuário acessa a página de login
    When o usuário faz login com "standard_user" e "secret_sauce"
    Then o usuário deve ser redirecionado para a página de vendas
