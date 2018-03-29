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
 * @author renil
 */
public class SubtracaoSteps {
    
    Calculadora calc = new Calculadora();

    @Given("^que eu digitei (\\d+) na calculadora$")
    public void que_eu_digitei_na_calculadora(int arg1) throws Exception {
        calc.entrarNumero01(arg1);
    }

    @Given("^eu digitei (\\d+) na calculadora$")
    public void eu_digitei_na_calculadora(int arg1) throws Exception {
        calc.entrarNumero02(arg1);
    }

    @When("^eu pressionar subtrair$")
    public void eu_pressionar_subtrair() throws Exception {
        calc.subtrair();
    }

    @Then("^o resultado exibido deve ser (\\d+)$")
    public void o_resultado_exibido_deve_ser(int arg1) throws Exception {
        assertEquals(arg1, calc.res);
    }
}
