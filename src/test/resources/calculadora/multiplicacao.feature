# language: en
Feature: Multiplicacao
  Como um usuario
  eu quero saber a Multiplicacao de dois numeros
  para evitar erros simples

  Scenario: Multiplicar dois numeros inteiros
    Given que eu entrei com <numero1>
    And entrei com <numero2>
    When eu pressionei multiplicar
    Then o resultado da multiplicacao deve ser <saida>

    Examples: 
      | numero1  | numero2 | saida |
      |  20      |  10     |  200  |
      |  10      |   5     |   50  |
      |   3      |   3     |    9  |
