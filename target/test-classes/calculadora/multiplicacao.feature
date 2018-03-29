# language: en
Feature: Multiplicacao
  Como um usuario
  eu quero saber a multiplicacao de dois numeros
  para evitar erros simples

  Scenario Outline: Multiplicar dois numeros
    Given que eu coloquei <numero1> na calculadora
    And eu digitei <numero2> na calculadora
    When eu pressionar multiplicar
    Then o resultado precisa ser <saida>

    Examples: 
      | numero1 | numero2 | saida |
      | 50      | 2       | 100   |
      | 10      | 5       | 50    |
      | 10      | 3       | 30    |