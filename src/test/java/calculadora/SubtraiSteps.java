package calculadora;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static org.junit.Assert.*;


/**
 *
 * @author Lua
 */
public class SubtraiSteps {
    Calculadora calc = new Calculadora();
    
    @Given("^que eu entrei (\\d+)$")
    public void que_eu_entrei(int arg1) throws Exception {
        calc.entrarNumero01(arg1);
    }

    @Given("^eu entrei (\\d+)$")
    public void eu_entrei(int arg1) throws Exception {
        calc.entrarNumero02(arg1);
    }

    @When("^eu pressionar subtrai$")
    public void eu_pressionar_subtrai() throws Exception {
        calc.subtracao();
    }

    @Then("^o resultado será (\\d+)$")
    public void o_resultado_será(int arg1) throws Exception {
        int res = calc.getResultado();
        assertEquals(arg1, res);
    }

}
