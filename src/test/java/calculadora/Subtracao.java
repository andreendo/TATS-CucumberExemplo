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
public class Subtracao {

    Calculadora calc = new Calculadora();

    @Given("^que entrei com o numero (\\d+)$")
    public void que_entrei_com_o_numero(int num) throws Exception {
        calc.entrarNumero01(num);
    }

    @Given("^entrei com o numero (\\d+)$")
    public void entrei_com_o_numero(int num) throws Exception {
        calc.entrarNumero02(num);
    }

    @When("^pressionar o botão de subtrair$")
    public void pressionei_o_botão_de_subtrair() throws Exception {
        calc.subtrair();
    }

    @Then("^o resultado deve exatamente ser (\\d+)$")
    public void o_resultado_deve_exatamente_ser(int num) throws Exception {
        Assert.assertEquals(num, calc.getResultado());
    }

}
