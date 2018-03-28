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
public class MultiplicacaoSteps {

    Calculadora c = new Calculadora();

    @Given("^eu forneci o numero (.*)$")
    public void eu_forneci_o_numero(int arg1) throws Exception {
        c.entrarNumero01(arg1);
    }

    @Given("^forneci o segundo numero (.*)$")
    public void forneci_o_segundo_numero(int arg1) throws Exception {
        c.entrarNumero02(arg1);
    }

    @When("^eu selecionar multiplicar$")
    public void eu_selecionar_multiplicar() throws Exception {
        c.multiplicar();
    }

    @Then("^o produto deve ser (.*)$")
    public void o_produto_deve_ser(int arg1) throws Exception {
        int res = c.getResultado();
        assertEquals(arg1, res);
    }

}
