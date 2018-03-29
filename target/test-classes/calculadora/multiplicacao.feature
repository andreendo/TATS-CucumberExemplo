# language: en
Feature: multiplicacao
  Como um usuario
  eu quero saber a multiplicacao de dois numeros
  para evitar erros simples

  Scenario Outline: Multiplicar dois numeros
    Given que eu colocar <num1> na calculadora
    And eu colocar <num2> na calculadora
    When eu pressionar multiplicar
    Then o resultado da multiplicacao deve ser <resultado>

    Examples: 
      | num1    | num2    | resultado |
      | 2       | 5       | 10        |
      | 1       | 130     | 130       |
      | 3       | 33      | 99        |