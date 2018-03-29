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
  "description": "  Como um usuario\n  eu quero saber a multiplicacao de dois numeros\n  para evitar erros simples",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "multiplicar por 0",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "que eu entrei com 5",
  "keyword": "Given "
});
formatter.step({
  "name": "entrei com 0",
  "keyword": "And "
});
formatter.step({
  "name": "eu pressionei multiplicar",
  "keyword": "When "
});
formatter.step({
  "name": "o resultado da multiplicacao deve ser 0",
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
        "0",
        "0"
      ]
    },
    {
      "cells": [
        "5",
        "5",
        "25"
      ]
    },
    {
      "cells": [
        "-10",
        "1",
        "-10"
      ]
    }
  ]
});
formatter.scenario({
  "name": "multiplicar por 0",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "que eu entrei com 5",
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
  "name": "eu pressionei multiplicar",
  "keyword": "When "
});
formatter.match({
  "location": "MulSteps.eu_pressionei_multiplicar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o resultado da multiplicacao deve ser 0",
  "keyword": "Then "
});
formatter.match({
  "location": "MulSteps.o_resultado_da_multiplicacao_deve_ser(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "multiplicar por 0",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "que eu entrei com 5",
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
  "name": "eu pressionei multiplicar",
  "keyword": "When "
});
formatter.match({
  "location": "MulSteps.eu_pressionei_multiplicar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o resultado da multiplicacao deve ser 0",
  "keyword": "Then "
});
formatter.match({
  "location": "MulSteps.o_resultado_da_multiplicacao_deve_ser(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "multiplicar por 0",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "que eu entrei com 5",
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
  "name": "eu pressionei multiplicar",
  "keyword": "When "
});
formatter.match({
  "location": "MulSteps.eu_pressionei_multiplicar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o resultado da multiplicacao deve ser 0",
  "keyword": "Then "
});
formatter.match({
  "location": "MulSteps.o_resultado_da_multiplicacao_deve_ser(int)"
});
formatter.result({
  "status": "passed"
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
  "description": "  Um usuario\n  Vou querer saber a subtracao entre dois numeros\n  para evitar erros",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Subtrair dois numeros",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "eu vou entrar com o primeiro numero \u003cnumero1\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "vou entrar com o segundo numero \u003cnumero2\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "vou precionar subtrair",
  "keyword": "When "
});
formatter.step({
  "name": "o resultado da subtracao deve ser \u003csaida\u003e",
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
        "70",
        "70",
        "0"
      ]
    },
    {
      "cells": [
        "20",
        "15",
        "5"
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
  "name": "Subtrair dois numeros",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "eu vou entrar com o primeiro numero 70",
  "keyword": "Given "
});
formatter.match({
  "location": "Subtracao.eu_vou_entrar_com_o_primeiro_numero(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "vou entrar com o segundo numero 70",
  "keyword": "And "
});
formatter.match({
  "location": "Subtracao.vou_entrar_com_o_segundo_numero(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "vou precionar subtrair",
  "keyword": "When "
});
formatter.match({
  "location": "Subtracao.vou_precionar_subtrair()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o resultado da subtracao deve ser 0",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Subtrair dois numeros",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "eu vou entrar com o primeiro numero 20",
  "keyword": "Given "
});
formatter.match({
  "location": "Subtracao.eu_vou_entrar_com_o_primeiro_numero(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "vou entrar com o segundo numero 15",
  "keyword": "And "
});
formatter.match({
  "location": "Subtracao.vou_entrar_com_o_segundo_numero(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "vou precionar subtrair",
  "keyword": "When "
});
formatter.match({
  "location": "Subtracao.vou_precionar_subtrair()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o resultado da subtracao deve ser 5",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Subtrair dois numeros",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "eu vou entrar com o primeiro numero 10",
  "keyword": "Given "
});
formatter.match({
  "location": "Subtracao.eu_vou_entrar_com_o_primeiro_numero(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "vou entrar com o segundo numero -15",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "vou precionar subtrair",
  "keyword": "When "
});
formatter.match({
  "location": "Subtracao.vou_precionar_subtrair()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "o resultado da subtracao deve ser -5",
  "keyword": "Then "
});
formatter.match({
  "location": "Subtracao.o_resultado_da_subtracao_deve_ser(int)"
});
formatter.result({
  "status": "skipped"
});
});