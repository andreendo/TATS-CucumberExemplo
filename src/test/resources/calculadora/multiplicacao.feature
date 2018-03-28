# language: en
Feature: Soma
  Como um usuario
  eu quero saber a multiplicao dois numeros
  para evitar erros simples

  Scenario Outline: Multiplicar dois numeros
    Given que eu entrei <numero1> na calc
    And eu entrei <numero2> na calc
    When eu pressionar adicionar
    Then o resultado da multiplicacao deve ser <saida>

    Examples: 
      | numero1 | numero2 | saida |
      | 50      | 2       | 100   |
      | 6       | 5       | 30    |
      | 10      | 15      | 150   |