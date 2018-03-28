/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package calculadora;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.junit.Assert.assertEquals;

/**
 *
 * @author rafae
 */
public class SubtracaoSteps {

    Calculadora c = new Calculadora();

    @Given("^eu forneci o valor (.*)$")
    public void eu_forneci_o_valor(int arg1) throws Exception {
        c.entrarNumero01(arg1);
    }

    @Given("^forneci o segundo valor (.*)$")
    public void forneci_o_segundo_valor(int arg1) throws Exception {
        c.entrarNumero02(arg1);
    }

    @When("^eu selecionar subtracao$")
    public void eu_selecionar_subtracao() throws Exception {
        c.subtrair();
    }

    @Then("^o resultado da subtracao deve ser (.*)$")
    public void o_resultado_da_subtracao_deve_ser(int arg1) throws Exception {
        int res = c.getResultado();
        assertEquals(arg1, res);
    }
}
