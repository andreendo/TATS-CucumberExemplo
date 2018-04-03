# language: en
Feature: Subtracao
  Como um usuario
  eu quero saber o valor da subtracao de dois numeros
  para evitar erros simples

  Scenario Outline: Adicionar dois numeros
    Given que eu entrei <numero1> na calculadora subtracao
    And eu entrei <numero2> na calculadora subtracao
    When eu pressionar sub subtracao
    Then o resultado da subtracao deve ser <saida>

    Examples: 
      | numero1 | numero2 | saida |
      | 10      |   5     | 5     |
      |  8      |   2     | 6     |
      | 10      |  10     | 0     |