# language: en
Feature: Soma
  Como um usuario
  eu quero saber a subtracao de dois numeros
  para evitar erros simples

  Scenario Outline: Subtrair dois numeros
    Given que eu entrei com <numero1> na calculadora
    And eu entrei com <numero2> na calculadora
    When eu pressionar add a calc
    Then o resultado da subtrair deve ser <saida>

    Examples: 
      | numero1 | numero2 | saida |
      | 50      | 70      | -20   |
      | 10      | 5       | 5     |
      | 100     | 10      | 90    |