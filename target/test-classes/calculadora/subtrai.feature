# language: en
Feature: Subtrair
  Como um usuario
  quero saber a subtracao de dois numeros
  para evitar erros 

  Scenario Outline: subtrair dois numeros
    Given que eu entrei <numero1> 
    And eu entrei <numero2> 
    When eu pressionar subtrai
    Then o resultado será <saida>

    Examples: 
      | numero1 | numero2 | saida |
      | 50      | 50      | 0     |
      | 10      |  5      | 5     |
      | 80      | 40      | 40    |