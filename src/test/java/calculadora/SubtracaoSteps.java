package calculadora;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.junit.Assert.*;

/**
 *
 * @author Bites
 */
public class SubtracaoSteps {
    
     Calculadora c = new Calculadora();

    @Given("^eu forneci o valor (\\d+)$")
    public void que_eu_entrei_com(int num) throws Exception {
        c.entrarNumero01(num);
    }

    @Given("^forneci o segundo valor (\\d+)$")
    public void entrei_com(int num) throws Exception {
        c.entrarNumero02(num);
    }

    @When("^eu selecionar subtracao$")
    public void eu_pressionei_subtrair() throws Exception {
        c.subtrair();
    }

    @Then("^o resultado da subtracao deve ser (\\d+)$")
    public void o_resultado_da_subtracao_deve_ser(int num) throws Exception {
        int res = c.getResultado();
        assertEquals(num, res);
    }

    
}

    

