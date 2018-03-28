# language: en
Feature: Subtracao
  Como um usuario
  eu quero saber a subtracao de dois numeros
  para evitar erros simples

  Scenario Outline: Subtrair dois numeros
    Given eu forneci o valor <numero1>
    And forneci o segundo valor <numero2>
    When eu selecionar subtracao
    Then o resultado da subtracao deve ser <saida>

    Examples: 
      | numero1 | numero2 | saida |
      | 50      | 70      | -20   |
      | -10     | -15     | 5     |
      | 10      | -15     | 25    |