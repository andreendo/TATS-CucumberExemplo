package calculadora;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static org.junit.Assert.*;

/**
 *
 * @author andreendo
 */
public class SubtracaoSteps {

    Calculadora calc = new Calculadora();

    @Given("^que inseri (\\d+) para ser subtraido$")
    public void que_inseri_para_ser_subtraido(int arg1) throws Exception {
        calc.entrarNumero01(arg1);
    }

    @Given("^tambem inseri o segundo (\\d+)$")
    public void tambem_inseri_o_segundo(int arg2) throws Exception {
        calc.entrarNumero02(arg2);
    }

    @When("^eu precionei subtrair$")
    public void eu_precionei_subtrair() throws Exception {
       calc.subtrair();
    }

    @Then("^o resultado  da subtracao foi de (\\d+)$")
    public void o_resultado_da_subtracao_foi_de(int result) throws Exception {
        assertEquals(result, calc.getResultado());
    }

}
