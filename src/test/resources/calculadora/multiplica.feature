# language: en
Feature: Multiplica
  Este usuario
  quer saber a multiplicação de dois numeros
  assim evitando erros simples

  Scenario Outline: multiplicacao dois numeros
    Given que entrou <numero1> na calculadora
    And entrou <numero2> na calculadora
    When apos pressionar mult
    Then o resultado obtido deve ser <saida>

    Examples: 
      | numero1 | numero2 | saida |
      | 10      | 1      | 10    |
      | 3       | 5      | 15    |
      | 2      | 8      | 16    |