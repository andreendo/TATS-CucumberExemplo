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
 * @author LuizGuilherme
 */
public class MultiplicacaoSteps {

    Calculadora c = new Calculadora();
    
    @Given("^que eu coloquei (\\d+) na calculadora$")
    public void que_eu_coloquei_na_calculadora(int num) throws Exception {
        c.entrarNumero01(num);
    }

    @Given("^eu digitei (\\d+) na calculadora$")
    public void eu_digitei_na_calculadora(int num) throws Exception {
        c.entrarNumero02(num);
    }

    @When("^eu pressionar multiplicar$")
    public void eu_pressionar_multiplicar() throws Exception {
        c.multiplicar();
    }

    @Then("^o resultado precisa ser (\\d+)$")
    public void o_resultado_precisa_ser(int num) throws Exception {
        int res = c.getResultado();
        Assert.assertEquals(num, res);
    }
}
