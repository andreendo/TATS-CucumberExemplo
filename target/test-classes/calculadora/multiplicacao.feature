# language: en
Feature: Multiplicacao
  Como um usuario
  eu quero saber a multiplicacao de dois numeros
  para evitar erros simples

    Scenario Outline: multiplicar por 0
    Given que eu entrei com 5
    And entrei com 0
    When eu pressionei multiplicar
    Then o resultado da multiplicacao deve ser 0

    Examples: 
      | numero1 | numero2 | saida |
      | 50      | 0       | 0     |
      | 5       | 5       | 25    |
      | -10     | 1       | -10   |
 

