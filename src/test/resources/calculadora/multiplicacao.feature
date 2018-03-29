# language: en
Feature: Multiplicacao
  Como um usuario
  eu quero saber amultiplicao de dois numeros
  para evitar erros simples

  Scenario: multiplicar dois numeros inteiros
    Given eu forneci o valor 4 
    And forneci o segundo valor 20
    When eu selecionar multiplicacao
    Then o resultado da multiplicacao deve ser 80