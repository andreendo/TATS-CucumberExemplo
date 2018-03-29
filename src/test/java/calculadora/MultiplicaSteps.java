package calculadora;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static org.junit.Assert.assertEquals;

public class MultiplicaSteps {
    Calculadora c = new Calculadora();
    
    @Given("^que foi informado (\\d+)$")
    public void que_foi_informado(int arg1) throws Exception {
        c.entrarNumero01(arg1);
    }

    @Given("^entrou com (\\d+)$")
    public void entrou_com(int arg2) throws Exception {
        c.entrarNumero02(arg2);
    }

    @When("^eu pressionei multiplica$")
    public void eu_pressionei_multiplica() throws Exception {
        c.multiplica();
    }

    @Then("^o resultado da multiplicacao e (\\d+)$")
    public void o_resultado_da_multiplicacao_e(int arg) throws Exception {
        int res = c.getResultado();
        assertEquals(arg, res);
    }
}
