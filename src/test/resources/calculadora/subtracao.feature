# language: en
Feature: Subtracao
  Como um usuario
  eu quero saber a Subtracao de dois numeros
  para evitar erros simples

  Scenario: subtrair dois numeros inteiros
    Given que eu entrei com <numero1>
    And entrei com <numero2>
    When eu pressionei subtrair
    Then o resultado da subtracao deve ser <saida>
