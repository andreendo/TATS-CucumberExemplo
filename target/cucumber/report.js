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
  "description": "  Como um usuario\n  eu quero saber a multiplicao dois numeros\n  para evitar erros simples",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Multiplicar dois numeros",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "que eu entrei \u003cnumero1\u003e na calc",
  "keyword": "Given "
});
formatter.step({
  "name": "eu entrei \u003cnumero2\u003e na calc",
  "keyword": "And "
});
formatter.step({
  "name": "eu pressionar multiplicar",
  "keyword": "When "
});
formatter.step({
  "name": "o resultado da multiplicacao deve ser \u003csaida\u003e",
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
        "2",
        "100"
      ]
    },
    {
      "cells": [
        "6",
        "5",
        "30"
      ]
    },
    {
      "cells": [
        "10",
        "15",
        "150"
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
  "name": "que eu entrei 50 na calc",
  "keyword": "Given "
});
formatter.match({
  "location": "MultiplicacaoSteps.que_entrei_na_calc(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu entrei 2 na calc",
  "keyword": "And "
});
formatter.match({
  "location": "MultiplicacaoSteps.eu_entrei_na_calc(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu pressionar multiplicar",
  "keyword": "When "
});
formatter.match({
  "location": "MultiplicacaoSteps.eu_pressionar_multiplicar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o resultado da multiplicacao deve ser 100",
  "keyword": "Then "
});
formatter.match({
  "location": "MultiplicacaoSteps.o_resultado_da_multiplicacao_deve_ser(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Multiplicar dois numeros",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "que eu entrei 6 na calc",
  "keyword": "Given "
});
formatter.match({
  "location": "MultiplicacaoSteps.que_entrei_na_calc(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu entrei 5 na calc",
  "keyword": "And "
});
formatter.match({
  "location": "MultiplicacaoSteps.eu_entrei_na_calc(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu pressionar multiplicar",
  "keyword": "When "
});
formatter.match({
  "location": "MultiplicacaoSteps.eu_pressionar_multiplicar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o resultado da multiplicacao deve ser 30",
  "keyword": "Then "
});
formatter.match({
  "location": "MultiplicacaoSteps.o_resultado_da_multiplicacao_deve_ser(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Multiplicar dois numeros",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "que eu entrei 10 na calc",
  "keyword": "Given "
});
formatter.match({
  "location": "MultiplicacaoSteps.que_entrei_na_calc(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu entrei 15 na calc",
  "keyword": "And "
});
formatter.match({
  "location": "MultiplicacaoSteps.eu_entrei_na_calc(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu pressionar multiplicar",
  "keyword": "When "
});
formatter.match({
  "location": "MultiplicacaoSteps.eu_pressionar_multiplicar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o resultado da multiplicacao deve ser 150",
  "keyword": "Then "
});
formatter.match({
  "location": "MultiplicacaoSteps.o_resultado_da_multiplicacao_deve_ser(int)"
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
  "name": "eu entrar com o primeiro numero \u003cnumero1\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "depois entrar com o segundo numero \u003cnumero2\u003e",
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
        "2",
        "8"
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
  "name": "eu entrar com o primeiro numero 70",
  "keyword": "Given "
});
formatter.match({
  "location": "SubtracaoSteps.eu_entrar_com_o_primeiro_numero(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "depois entrar com o segundo numero 70",
  "keyword": "And "
});
formatter.match({
  "location": "SubtracaoSteps.vou_entrar_com_o_segundo_numero(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "vou precionar subtrair",
  "keyword": "When "
});
formatter.match({
  "location": "SubtracaoSteps.vou_precionar_subtrair()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o resultado da subtracao deve ser 0",
  "keyword": "Then "
});
formatter.match({
  "location": "SubtracaoSteps.o_resultado_da_subtracao_deve_ser(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Subtrair dois numeros",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "eu entrar com o primeiro numero 20",
  "keyword": "Given "
});
formatter.match({
  "location": "SubtracaoSteps.eu_entrar_com_o_primeiro_numero(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "depois entrar com o segundo numero 15",
  "keyword": "And "
});
formatter.match({
  "location": "SubtracaoSteps.vou_entrar_com_o_segundo_numero(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "vou precionar subtrair",
  "keyword": "When "
});
formatter.match({
  "location": "SubtracaoSteps.vou_precionar_subtrair()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o resultado da subtracao deve ser 5",
  "keyword": "Then "
});
formatter.match({
  "location": "SubtracaoSteps.o_resultado_da_subtracao_deve_ser(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Subtrair dois numeros",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "eu entrar com o primeiro numero 10",
  "keyword": "Given "
});
formatter.match({
  "location": "SubtracaoSteps.eu_entrar_com_o_primeiro_numero(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "depois entrar com o segundo numero 2",
  "keyword": "And "
});
formatter.match({
  "location": "SubtracaoSteps.vou_entrar_com_o_segundo_numero(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "vou precionar subtrair",
  "keyword": "When "
});
formatter.match({
  "location": "SubtracaoSteps.vou_precionar_subtrair()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "o resultado da subtracao deve ser 8",
  "keyword": "Then "
});
formatter.match({
  "location": "SubtracaoSteps.o_resultado_da_subtracao_deve_ser(int)"
});
formatter.result({
  "status": "passed"
});
});