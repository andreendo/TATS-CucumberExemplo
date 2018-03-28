package calculadora;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static org.junit.Assert.*;

/**
 *
 * @author JosielFaleiros
 */
public class SubtracaoSteps {

    Calculadora calc = new Calculadora();

    @Given("^que entrei numero (.*) na calculadora$")
    public void que_entrei_numero_na_calculadora(int arg1) throws Exception {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }


    @Given("^eu entrei (.*) depois$")
    public void eu_entrei_depois(int arg1) throws Exception {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @When("^eu pressionar subtrair$")
    public void eu_pressionar_subtrair() throws Exception {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }


    @Then("^a diferenca deve ser (.*)$")
    public void a_diferenca_deve_ser(int arg1) throws Exception {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }
}
