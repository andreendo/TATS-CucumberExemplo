# language: en
Feature: Multiplicacao
  Como um usuario
  eu quero saber a multiplicacao de dois numeros
  para evitar erros simples

  Scenario: multiplicar dois numeros inteiros
    Given que foi informado 10
    And entrou com 6
    When eu pressionei multiplica
    Then o resultado da multiplicacao e 60