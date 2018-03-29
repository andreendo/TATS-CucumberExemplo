package calculadora;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static org.junit.Assert.*;


/**
 *
 * @author andre
 */
public class MulSteps {
    
    Calculadora calc = new Calculadora();
    
    
    @Given("^que eu entrei com o (.*)$")
    public void que_eu_entrei_com_o(int num) throws Exception {
        calc.entrarNumero01(num);
    }

    @Given("^eu entrei com o  (.*)$")
    public void entrei_na_com_o(int num) throws Exception {
        calc.entrarNumero02(num);
    }
    
    @When("^eu pressionei multiplicar$")
    public void eu_pressionei_multiplicar() throws Exception {
        calc.multiplicar();
    }

    @Then("^o resultado da multiplicacao deve ser (\\d+)$")
    public void o_resultado_da_multiplicacao_deve_ser(int arg1) throws Exception {
        int res = calc.getResultado();
        assertEquals(res, arg1);
    }

}
