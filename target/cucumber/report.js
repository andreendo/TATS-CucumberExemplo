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
  "name": "multiplicacao",
  "description": "  Como um usuario\n  eu quero saber a multiplicacao de dois numeros\n  para evitar erros simples",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Multiplicar dois numeros",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "que eu colocar \u003cnum1\u003e na calculadora",
  "keyword": "Given "
});
formatter.step({
  "name": "eu colocar \u003cnum2\u003e na calculadora",
  "keyword": "And "
});
formatter.step({
  "name": "eu pressionar multiplicar",
  "keyword": "When "
});
formatter.step({
  "name": "o resultado da multiplicacao deve ser \u003cresultado\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "num1",
        "num2",
        "resultado"
      ]
    },
    {
      "cells": [
        "2",
        "5",
        "10"
      ]
    },
    {
      "cells": [
        "1",
        "130",
        "130"
      ]
    },
    {
      "cells": [
        "3",
        "33",
        "99"
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
  "name": "que eu colocar 2 na calculadora",
  "keyword": "Given "
});
formatter.match({
  "location": "MultiplicacaoSteps.que_eu_digitei_na_calculadora(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu colocar 5 na calculadora",
  "keyword": "And "
});
formatter.match({
  "location": "MultiplicacaoSteps.eu_digitei_na_calculadora(int)"
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
  "name": "o resultado da multiplicacao deve ser 10",
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
  "name": "que eu colocar 1 na calculadora",
  "keyword": "Given "
});
formatter.match({
  "location": "MultiplicacaoSteps.que_eu_digitei_na_calculadora(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu colocar 130 na calculadora",
  "keyword": "And "
});
formatter.match({
  "location": "MultiplicacaoSteps.eu_digitei_na_calculadora(int)"
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
  "name": "o resultado da multiplicacao deve ser 130",
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
  "name": "que eu colocar 3 na calculadora",
  "keyword": "Given "
});
formatter.match({
  "location": "MultiplicacaoSteps.que_eu_digitei_na_calculadora(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu colocar 33 na calculadora",
  "keyword": "And "
});
formatter.match({
  "location": "MultiplicacaoSteps.eu_digitei_na_calculadora(int)"
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
  "name": "o resultado da multiplicacao deve ser 99",
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
  "description": "  Como um usuario\n  eu quero saber a subtracao de dois numeros\n  para evitar erros simples",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Subtrair dois numeros",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "que eu digitei \u003cnum1\u003e na calculadora",
  "keyword": "Given "
});
formatter.step({
  "name": "eu digitei \u003cnum2\u003e na calculadora",
  "keyword": "And "
});
formatter.step({
  "name": "eu pressionar subtrair",
  "keyword": "When "
});
formatter.step({
  "name": "o resultado exibido deve ser \u003cresultado\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "num1",
        "num2",
        "resultado"
      ]
    },
    {
      "cells": [
        "80",
        "29",
        "51"
      ]
    },
    {
      "cells": [
        "130",
        "31",
        "99"
      ]
    },
    {
      "cells": [
        "95",
        "5",
        "90"
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
  "name": "que eu digitei 80 na calculadora",
  "keyword": "Given "
});
formatter.match({
  "location": "SubtracaoSteps.que_eu_digitei_na_calculadora(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digitei 29 na calculadora",
  "keyword": "And "
});
formatter.match({
  "location": "SubtracaoSteps.eu_digitei_na_calculadora(int)"
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
  "name": "o resultado exibido deve ser 51",
  "keyword": "Then "
});
formatter.match({
  "location": "SubtracaoSteps.o_resultado_exibido_deve_ser(int)"
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
  "name": "que eu digitei 130 na calculadora",
  "keyword": "Given "
});
formatter.match({
  "location": "SubtracaoSteps.que_eu_digitei_na_calculadora(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digitei 31 na calculadora",
  "keyword": "And "
});
formatter.match({
  "location": "SubtracaoSteps.eu_digitei_na_calculadora(int)"
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
  "name": "o resultado exibido deve ser 99",
  "keyword": "Then "
});
formatter.match({
  "location": "SubtracaoSteps.o_resultado_exibido_deve_ser(int)"
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
  "name": "que eu digitei 95 na calculadora",
  "keyword": "Given "
});
formatter.match({
  "location": "SubtracaoSteps.que_eu_digitei_na_calculadora(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "eu digitei 5 na calculadora",
  "keyword": "And "
});
formatter.match({
  "location": "SubtracaoSteps.eu_digitei_na_calculadora(int)"
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
  "name": "o resultado exibido deve ser 90",
  "keyword": "Then "
});
formatter.match({
  "location": "SubtracaoSteps.o_resultado_exibido_deve_ser(int)"
});
formatter.result({
  "status": "passed"
});
});