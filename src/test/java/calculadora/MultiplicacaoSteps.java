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
public class MultiplicacaoSteps {

    Calculadora calc = new Calculadora();

    @Given("^que eu entrei (\\d+) para ser multiplicado$")
    public void que_eu_entrei_para_ser_multiplicado(int arg1) throws Exception {
        calc.entrarNumero01(arg1);
    }
    

    @Given("^tambem entrei com o segundo (\\d+)$")
    public void tambem_entrei_com_o_segundo(int arg2) throws Exception {
        calc.entrarNumero02(arg2);
    }

    @When("^eu precionei multiplicar$")
    public void eu_precionei_multiplicar() throws Exception {
       calc.multiplicar();
    }

    @Then("^o resultado foi de (\\d+)$")
    public void o_resultado_foi_de(int arg) throws Exception {
        assertEquals(arg, calc.getResultado());
    }
}
