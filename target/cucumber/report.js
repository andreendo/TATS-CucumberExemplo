$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("calculadora/divisao.feature");
formatter.feature({
  "name": "Divisao",
  "description": "  Como um usuario\n  eu quero saber a divisao de dois numeros\n  para evitar erros simples",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "dividir dois numeros inteiros",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "que eu entrei com 25",
  "keyword": "Given "
});
formatter.match({
  "location": "DivisaoSteps.que_eu_entrei_com(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "entrei com 5",
  "keyword": "And "
});
formatter.match({
  "location": "DivisaoSteps.entrei_com(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu pressionei dividir",
  "keyword": "When "
});
formatter.match({
  "location": "DivisaoSteps.eu_pressionei_dividir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o resultado da divisao deve ser 5",
  "keyword": "Then "
});
formatter.match({
  "location": "DivisaoSteps.o_resultado_da_divisao_deve_ser(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "dividir um numero por zero",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "que eu entrei com 25",
  "keyword": "Given "
});
formatter.match({
  "location": "DivisaoSteps.que_eu_entrei_com(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "entrei com 0",
  "keyword": "And "
});
formatter.match({
  "location": "DivisaoSteps.entrei_com(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu pressionei dividir",
  "keyword": "When "
});
formatter.match({
  "location": "DivisaoSteps.eu_pressionei_dividir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o resultado da divisao dever ser um numero negativo",
  "keyword": "Then "
});
formatter.match({
  "location": "DivisaoSteps.o_resultado_da_divisao_dever_ser_um_numero_negativo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a mensagem \"erro: divisao por zero\" deve aparecer",
  "keyword": "And "
});
formatter.match({
  "location": "DivisaoSteps.a_mensagem_deve_aparecer(String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("calculadora/multiplicacao.feature");
formatter.feature({
  "name": "Multiplicacao",
  "description": "  Como um usuario\n  eu quero saber o produto de dois numeros\n  para evitar erros simples",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Multiplicar dois numeros",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "que eu entrar com \u003cinput_1\u003e na calculadora",
  "keyword": "Given "
});
formatter.step({
  "name": "que eu também entrar com \u003cinput_2\u003e na calculadora",
  "keyword": "And "
});
formatter.step({
  "name": "eu pressiono multiplicar",
  "keyword": "When "
});
formatter.step({
  "name": "o produto deve ser \u003coutput\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "input_1",
        "input_2",
        "output"
      ]
    },
    {
      "cells": [
        "20",
        "30",
        "50"
      ]
    },
    {
      "cells": [
        "2",
        "5",
        "7"
      ]
    },
    {
      "cells": [
        "0",
        "40",
        "40"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Multiplicar dois numeros",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "que eu entrar com 20 na calculadora",
  "keyword": "Given "
});
formatter.match({
  "location": "MultiplicacaoSteps.que_eu_entrar_com_na_calculadora(int)"
});
formatter.result({
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat calculadora.MultiplicacaoSteps.que_eu_entrar_com_na_calculadora(MultiplicacaoSteps.java:24)\n\tat ✽.que eu entrar com 20 na calculadora(calculadora/multiplicacao.feature:10)\n",
  "status": "pending"
});
formatter.step({
  "name": "que eu também entrar com 30 na calculadora",
  "keyword": "And "
});
formatter.match({
  "location": "MultiplicacaoSteps.que_eu_também_entrar_com_na_calculadora(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "eu pressiono multiplicar",
  "keyword": "When "
});
formatter.match({
  "location": "MultiplicacaoSteps.eu_pressiono_multiplicar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "o produto deve ser 50",
  "keyword": "Then "
});
formatter.match({
  "location": "MultiplicacaoSteps.o_produto_deve_ser(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Multiplicar dois numeros",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "que eu entrar com 2 na calculadora",
  "keyword": "Given "
});
formatter.match({
  "location": "MultiplicacaoSteps.que_eu_entrar_com_na_calculadora(int)"
});
formatter.result({
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat calculadora.MultiplicacaoSteps.que_eu_entrar_com_na_calculadora(MultiplicacaoSteps.java:24)\n\tat ✽.que eu entrar com 2 na calculadora(calculadora/multiplicacao.feature:10)\n",
  "status": "pending"
});
formatter.step({
  "name": "que eu também entrar com 5 na calculadora",
  "keyword": "And "
});
formatter.match({
  "location": "MultiplicacaoSteps.que_eu_também_entrar_com_na_calculadora(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "eu pressiono multiplicar",
  "keyword": "When "
});
formatter.match({
  "location": "MultiplicacaoSteps.eu_pressiono_multiplicar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "o produto deve ser 7",
  "keyword": "Then "
});
formatter.match({
  "location": "MultiplicacaoSteps.o_produto_deve_ser(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Multiplicar dois numeros",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "que eu entrar com 0 na calculadora",
  "keyword": "Given "
});
formatter.match({
  "location": "MultiplicacaoSteps.que_eu_entrar_com_na_calculadora(int)"
});
formatter.result({
  "error_message": "cucumber.api.PendingException: TODO: implement me\n\tat calculadora.MultiplicacaoSteps.que_eu_entrar_com_na_calculadora(MultiplicacaoSteps.java:24)\n\tat ✽.que eu entrar com 0 na calculadora(calculadora/multiplicacao.feature:10)\n",
  "status": "pending"
});
formatter.step({
  "name": "que eu também entrar com 40 na calculadora",
  "keyword": "And "
});
formatter.match({
  "location": "MultiplicacaoSteps.que_eu_também_entrar_com_na_calculadora(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "eu pressiono multiplicar",
  "keyword": "When "
});
formatter.match({
  "location": "MultiplicacaoSteps.eu_pressiono_multiplicar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "o produto deve ser 40",
  "keyword": "Then "
});
formatter.match({
  "location": "MultiplicacaoSteps.o_produto_deve_ser(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("calculadora/soma.feature");
formatter.feature({
  "name": "Soma",
  "description": "  Como um usuario\n  eu quero saber a soma de dois numeros\n  para evitar erros simples",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Adicionar dois numeros",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "que eu entrei \u003cnumero1\u003e na calculadora",
  "keyword": "Given "
});
formatter.step({
  "name": "eu entrei \u003cnumero2\u003e na calculadora",
  "keyword": "And "
});
formatter.step({
  "name": "eu pressionar add",
  "keyword": "When "
});
formatter.step({
  "name": "o resultado deve ser \u003csaida\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "numero1",
        "numero2",
        "saida"
      ]
    },
    {
      "cells": [
        "50",
        "70",
        "120"
      ]
    },
    {
      "cells": [
        "-10",
        "-15",
        "-25"
      ]
    },
    {
      "cells": [
        "10",
        "-15",
        "-5"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Adicionar dois numeros",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "que eu entrei 50 na calculadora",
  "keyword": "Given "
});
formatter.match({
  "location": "SomaSteps.que_eu_entrei_na_calculadora(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu entrei 70 na calculadora",
  "keyword": "And "
});
formatter.match({
  "location": "SomaSteps.eu_entrei_na_calculadora(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu pressionar add",
  "keyword": "When "
});
formatter.match({
  "location": "SomaSteps.eu_pressionar_add()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o resultado deve ser 120",
  "keyword": "Then "
});
formatter.match({
  "location": "SomaSteps.o_resultado_deve_ser(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Adicionar dois numeros",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "que eu entrei -10 na calculadora",
  "keyword": "Given "
});
formatter.match({
  "location": "SomaSteps.que_eu_entrei_na_calculadora(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu entrei -15 na calculadora",
  "keyword": "And "
});
formatter.match({
  "location": "SomaSteps.eu_entrei_na_calculadora(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu pressionar add",
  "keyword": "When "
});
formatter.match({
  "location": "SomaSteps.eu_pressionar_add()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o resultado deve ser -25",
  "keyword": "Then "
});
formatter.match({
  "location": "SomaSteps.o_resultado_deve_ser(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Adicionar dois numeros",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "que eu entrei 10 na calculadora",
  "keyword": "Given "
});
formatter.match({
  "location": "SomaSteps.que_eu_entrei_na_calculadora(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu entrei -15 na calculadora",
  "keyword": "And "
});
formatter.match({
  "location": "SomaSteps.eu_entrei_na_calculadora(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu pressionar add",
  "keyword": "When "
});
formatter.match({
  "location": "SomaSteps.eu_pressionar_add()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o resultado deve ser -5",
  "keyword": "Then "
});
formatter.match({
  "location": "SomaSteps.o_resultado_deve_ser(int)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("calculadora/subtracao.feature");
formatter.feature({
  "name": "Subtracao",
  "description": "  Como um usuario\n  eu quero saber a diferença de dois números\n  para evitar errors simples",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Diferenca dois numeros",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "que entrei numero 40 na calculadora",
  "keyword": "Given "
});
formatter.match({
  "location": "SubtracaoSteps.que_entrei_numero_na_calculadora(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu entrei 30 depois",
  "keyword": "And "
});
formatter.match({
  "location": "SubtracaoSteps.eu_entrei_depois(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu pressionar subtrair",
  "keyword": "When "
});
formatter.match({
  "location": "SubtracaoSteps.eu_pressionar_subtrair()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a diferenca deve ser 10",
  "keyword": "Then "
});
formatter.match({
  "location": "SubtracaoSteps.a_diferenca_deve_ser(int)"
});
formatter.result({
  "status": "passed"
});
});