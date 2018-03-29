# language: en
# Source: http://github.com/aslakhellesoy/cucumber/blob/master/examples/i18n/en/features/addition.feature
# Updated: Tue May 25 15:51:43 +0200 2010
Feature: Multiplicacao
  Como um usuario
  eu quero saber o produto de dois numeros
  para evitar erros simples

  Scenario Outline: Multiplicar dois numeros
    Given que eu entrar com <input_1> na calculadora
    And que eu também entrar com <input_2> na calculadora
    When eu pressiono multiplicar
    Then o produto deve ser <output> 

    Examples: 
      | input_1 | input_2 | output |
      | 20      | 30      | 600     |
      | 2       | 5       | 10      |
      | 10       | 40      | 400     |
