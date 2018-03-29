package calculadora;

import cucumber.api.java.en.*;
import static org.junit.Assert.assertEquals;

/**
 *
 * @author gabriel de carli
 */
public class SubtracaoSteps {

    Calculadora c = new Calculadora();

    @Given("^que eu coloquei o (\\d+)$")
    public void que_eu_coloquei_o(int num) throws Exception {
        c.entrarNumero01(num);
    }

    @Given("^colocquei o (\\d+)$")
    public void colocquei_o(int num) throws Exception {
        c.entrarNumero02(num);
    }

    @When("^eu pressionei subtracao$")
    public void eu_pressionei_subtracao() throws Exception {
        c.subtrair();
    }

    @Then("^o resultado da subtracao deve ser (.*)$")
    public void o_resultado_deve_ser(int num) throws Exception {
        int res = c.getResultado();
        assertEquals(num, res);
    }

}
