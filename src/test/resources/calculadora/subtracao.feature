# language: en
Feature: subtracao
  Como um usuario
  eu quero saber a subratração de dois numeros
  para evitar erros simples

  Scenario: Subtrair dois numeros
    Given que entrei com o numero 50 
    And entrei com o numero 18
    When pressionar o botão de subtrair
    Then o resultado deve exatamente ser 32 