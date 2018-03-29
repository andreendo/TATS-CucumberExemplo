# language: en
Feature: Subtracao
  Como um usuario
  eu quero saber a subtracao de dois numeros
  para evitar erros simples

  Scenario: subtrair dois numeros
    Given que eu coloquei o 10
    And colocquei o 5
    When eu pressionei dividir
    Then o resultado da subtracao deve ser 5
