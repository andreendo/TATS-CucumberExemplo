# language: en
Feature: Multiplicacao
  Como um usuario
  eu quero saber a multiplicacao de dois numeros
  para evitar erros simples

  Scenario Outline: Adicionar dois numeros
    Given que eu entrei <numero1> na calculadora multiplicacao
    And eu entrei <numero2> na calculadora multiplicacao
    When eu pressionar mult multiplicacao
    Then o resultado da multiplicacao deve ser <saida>

    Examples: 
      | numero1 | numero2 | saida |
      | 5       | 10      | 50    |
      | 2       | 8       | 16    |
      | 10      | 10      | 100   |