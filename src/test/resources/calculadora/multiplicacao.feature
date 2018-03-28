# language: en
Feature: Multiplicacao
  Como um usuario
  eu quero saber a multiplicacao de dois numeros
  para evitar erros simples

  Scenario Outline: Adicionar dois numeros
    Given que eu adicionei <numero1> na calculadora
    And eu adicionei <numero2> na calculadora
    When eu pressionar multiplicacao
    Then o resultado tem ser <saida>

    Examples: 
      | numero1 | numero2 | saida |
      | 5       | 5       | 25    |
      | 2       | 2       | 4     |
      | 3       | 3       | 9     |