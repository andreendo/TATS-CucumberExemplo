# language: en
Feature: Subtracao
    Como um usuario
    eu quero saber a subtracao de dois numeros
    para evitar erros simples
  
    Scenario Outline: Subtracao de dois números inteiros
        Given que inseri <valor1> para ser subtraido
        And tambem inseri o segundo <valor2>
        When eu precionei subtrair
        Then o resultado  da subtracao foi de <resultado>
    
        Examples: 
            | valor1 | valor2 | resultado |
            | 10     | 5      | 5         |
            | 12     | 3      | 9         |
      