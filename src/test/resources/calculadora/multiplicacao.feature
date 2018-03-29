# language: en
Feature: Multiplicação
  Como um usuario
  eu quero saber a multiplicação de dois numeros
  para evitar erros simples

  Scenario Outline: Multiplicar dois numeros
    Given eu entrei com o <numero1> na calculadora
    And entrei com o <numero2> na calculadora
    When eu pressionar multiplicar
    Then o resultado esperado é <resultado>

    Examples: 
      | numero1 | numero2 | resultado |
      | 2       | 3       | 6         |
      | 7       | 8       | 56        |
      | 11      | 11      | 121       |