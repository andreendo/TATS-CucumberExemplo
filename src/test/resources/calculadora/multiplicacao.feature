# language: en
Feature: Multiplicacao
    Como um usuario
    eu quero saber a multiplicacao de dois numeros
    para evitar erros simples
  
    Scenario Outline: Multiplicar dois números inteiros
        Given que eu entrei <primeiroNumero> para ser multiplicado
        And tambem entrei com o segundo <segundoNumero>
        When eu precionei multiplicar
        Then o resultado foi de <resultado>
    
        Examples: 
            | primeiroNumero | segundoNumero | resultado |
            | 1              | 2             | 2         |
            | 2              | 4             | 8         |