# language: en
Feature: Subtraçao
  Como um usuario
  eu quero saber a subtraçao de dois numeros
  para evitar erros simples

  Scenario Outline: Subtrair dois numeros
    Given que eu informei <numero1> na calculadora
    And eu informei <numero2> na calculadora
    When eu pressionar sub
    Then o resultado e <saida>

    Examples: 
      | numero1 | numero2 | saida |
      | 50      | 40      |  10   |
      | 15      | 10      |  5    |
      | 47      | 11      | 36    |
