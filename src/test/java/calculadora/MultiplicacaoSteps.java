package calculadora;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static org.junit.Assert.*;

public class MultiplicacaoSteps {

    Calculadora calc = new Calculadora();
    
    @Given("^que eu entrei (.*) na calc$")
    public void que_eu_entrei_na_calculadora(int num) throws Exception {
        calc.entrarNumero01(num);
    }

    @Given("^eu entrei (.*) na calc$")
    public void eu_entrei_na_calculadora(int num) throws Exception {
        calc.entrarNumero02(num);
    }

    @When("^eu pressionar adicionar$")
    public void eu_pressionar_add() throws Exception {
        calc.multiplicar();
    }

    @Then("^o resultado da multiplicacao deve ser (.*)$")
    public void o_resultado_deve_ser(int num) throws Exception {
        int res = calc.getResultado();
        assertEquals(num, res);
    }
    
    
}
