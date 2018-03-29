# language: en
Feature: Soma
  Como um usuario
  eu quero saber a subtração dois numeros
  para evitar erros simples

  Scenario Outline: Subtrair dois numeros
    Given eu coloquei o numero <numero1> na calc
    And depois eu coloquei <numero2> na calc
    When eu apertar em subrair
    Then o resultado da subtracao deve ser <saida>

    Examples: 
      | numero1 | numero2 | saida |
      | 50      | 2       | 100   |
      | 6       | 5       | 30    |
      | 10      | 15      | 150   |