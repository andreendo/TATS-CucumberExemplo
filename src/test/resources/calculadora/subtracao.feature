# language: en
Feature: Subtracao
  Um usuario
  Vou querer saber a subtracao entre dois numeros
  para evitar erros

  Scenario Outline: Subtrair dois numeros
    Given eu entrar com o primeiro numero <numero1>
    And depois entrar com o segundo numero <numero2>
    When vou precionar subtrair
    Then o resultado da subtracao deve ser <saida>

    Examples: 
      | numero1 | numero2 | saida |
      | 70      | 70      |   0   |
      | 20      | 15      |   5   |
      | 10      | 2       |   8   |