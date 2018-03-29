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
public class SubtracaoSteps {
    
    Calculadora c = new Calculadora();

    @Given("^que enrei com o numero (\\d+) na calculadora$")
    public void que_enrei_com_o_numero_na_calculadora(int num) throws Exception {
        c.entrarNumero01(num);
    }

    @Given("^e depois com o numero (\\d+)$")
    public void e_depois_com_o_numero(int num) throws Exception {
       c.entrarNumero02(num);
    }

    @When("^eu pressionar subtrair$")
    public void eu_pressionar_subtrair() throws Exception {
        c.subtrair();
    }

    @Then("^o resultado mostrado sera (\\d+)$")
    public void o_resultado_mostrado_sera(int num) throws Exception {
        int res = c.getResultado();
        Assert.assertEquals(num, res);
    }
}
