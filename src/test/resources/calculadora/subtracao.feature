# language: en
Feature: Subtracao
  Um usuario
  Vou querer saber a subtracao entre dois numeros
  para evitar erros

  Scenario Outline: Subtrair dois numeros
    Given eu vou entrar com o primeiro numero <numero1>
    And vou entrar com o segundo numero <numero2>
    When vou precionar subtrair
    Then o resultado da subtracao deve ser <saida>

    Examples: 
      | numero1 | numero2 | saida |
      | 70      | 70      | 0     |
      | 20      | 15      |   5   |
      | 10      | -15     |  -5   |