# language: en
Feature: Subtracao
  Como um usuario
  eu quero saber a subtracao de dois numeros
  para evitar erros simples

  Scenario Outline: Subtrair dois numeros
    Given que eu digitei <num1> na calculadora
    And eu digitei <num2> na calculadora
    When eu pressionar subtrair
    Then o resultado exibido deve ser <resultado>

    Examples: 
      | num1    | num2    | resultado |
      | 80      | 29      | 51        |
      | 130     | 31      | 99        |
      | 95      | 5       | 90        |