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
 * @author gabriel de carli
 */
public class MultiplicacaoSteps {
    
    Calculadora c = new Calculadora();
    
    @Given("^que eu adicionei (\\d+) na calculadora$")
    public void que_eu_adicionei_na_calculadora(int num) throws Exception {
        c.entrarNumero01(num);
    }

    @Given("^eu adicionei (\\d+) na calculadora$")
    public void eu_adicionei_na_calculadora(int num) throws Exception {
        c.entrarNumero02(num);
    }

    @When("^eu pressionar multiplicacao$")
    public void eu_pressionar_multiplicacao() throws Exception {
        c.multiplicacao();
    }
    @Then("^o resultado tem ser (.*)$")
    public void o_resultado_deve_ser(int num) throws Exception {
        int res = c.getResultado();
        assertEquals(num, res);
    }
}
