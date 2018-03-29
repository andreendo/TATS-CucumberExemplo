/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
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
public class MultiplicacaoSteps {
    Calculadora calc = new Calculadora();
    
    @Given("^que eu entrar com (\\d+) na calculadora$")
    public void que_eu_entrar_com_na_calculadora(int arg1) throws Exception {
        calc.entrarNumero01(arg1);
    }

    @Given("^que eu também entrar com (\\d+) na calculadora$")
    public void que_eu_também_entrar_com_na_calculadora(int arg1) throws Exception {
        calc.entrarNumero02(arg1);
    }

    @When("^eu pressiono multiplicar$")
    public void eu_pressiono_multiplicar() throws Exception {
        calc.multiplicar();
    }

    @Then("^o produto deve ser (\\d+)$")
    public void o_produto_deve_ser(int num) throws Exception {
        int res = calc.getResultado();
        assertEquals(num, res);
    }

    
}
