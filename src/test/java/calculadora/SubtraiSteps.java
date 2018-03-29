/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package calculadora;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.junit.Assert.assertEquals;

/**
 *
 * @author MarkVII
 */
public class SubtraiSteps {
    Calculadora c = new Calculadora();
    
    @Given("^que eu informei (\\d+) na calculadora$")
    public void que_eu_informei_na_calculadora(int num) throws Exception {
        c.entrarNumero01(num);
    }

    @Given("^eu informei (\\d+) na calculadora$")
    public void eu_informei_na_calculadora(int num) throws Exception {
        c.entrarNumero02(num);
    }

    @When("^eu pressionar sub$")
    public void eu_pressionar_sub() throws Exception {
       c.subtrair();
    }

    @Then("^o resultado e (\\d+)$")
    public void o_resultado_e(int nume) throws Exception {
        int res = c.getResultado();
        assertEquals(nume, res);
}

    
    
}
