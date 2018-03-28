# language: en
Feature: multiplicacao
  Como um usuario
  eu quero saber a multiplicacao de dois numeros
  para evitar erros simples

  Scenario Outline: Multiplicar dois numeros
    Given que eu digitei <num1> na calculadora
    And eu digitei <num2> na calculadora
    When eu pressionar multiplicar
    Then o resultado da multiplicacao deve ser <resultado>

    Examples: 
      | num1    | num2    | resultado |
      | 2       | 50      | 100       |
      | 0       | 130     | 0         |
      | 33      | 3       | 99        |