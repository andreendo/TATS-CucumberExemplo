# language: en
Feature: Multiplicacao
  Como um usuario
  eu quero saber o produto de dois numeros
  para evitar erros simples

  Scenario Outline: Multiplicar dois numeros
    Given eu forneci o numero <numero1>
    And forneci o segundo numero <numero2>
    When eu selecionar multiplicar
    Then o produto deve ser <saida>

    Examples: 
      | numero1 | numero2 | saida |
      | 5       | 7       |  35   |
      | -10     | -15     | 150   |
      | 10      | -15     | -150  |