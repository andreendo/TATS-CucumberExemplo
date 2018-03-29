/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package calculadora;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

/**
 *
 * @author White
 */
public class MultiplicacaoSteps {

    Calculadora calc = new Calculadora();

    @Given("^eu coloquei o (\\d+) na calculadora$")
    public void eu_coloquei_o_na_calculadora(int num) throws Exception {
        calc.entrarNumero01(num);
    }

    @Given("^em seguida com o (\\d+) na calculadora$")
    public void em_seguida_com_o_na_calculadora(int num) throws Exception {
        calc.entrarNumero02(num);
    }

    @When("^eu pressionar multiplicar$")
    public void eu_pressionar_multiplicar() throws Exception {
        calc.multiplicar();
    }

    @Then("^o resultado esperado é (\\d+)$")
    public void o_resultado_esperado_é(int num) throws Exception {
        Assert.assertEquals(num, calc.res);
    }

}
