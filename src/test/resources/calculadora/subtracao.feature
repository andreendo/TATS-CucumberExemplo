# language: en
Feature: Subtracao
  Como um usuario
  eu quero saber a diferença de dois números
  para evitar errors simples

  Scenario: Diferenca dois numeros
    Given que entrei numero 40 na calculadora
    And eu entrei 30 depois
    When eu pressionar subtrair
    Then a diferenca deve ser 10
