# language: en
Feature: Subtracao
  Como um usuario
  eu quero saber a subtracao de dois numeros
  para evitar erros simples

  Scenario Outline: Subtrair dois numeros
    Given que enrei com o numero <numero1> na calculadora
    And e depois com o numero <numero2> 
    When eu pressionar subtrair
    Then o resultado mostrado sera <saida>

    Examples: 
      | numero1 | numero2 | saida |
      | 5       | 2       | 3     |
      | 10      | 5       | 5     |
      | 10      | 3       | 7     |