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
 * @author Lua
 */
public class MultiplicaSteps {

    Calculadora calc = new Calculadora();
    
    @Given("^que entrou (\\d+) na calculadora$")
    public void que_entrou_na_calculadora(int arg1) throws Exception {
        calc.entrarNumero01(arg1);
    }

    @Given("^entrou (\\d+) na calculadora$")
    public void entrou_na_calculadora(int arg1) throws Exception {
        calc.entrarNumero02(arg1);
    }

    @When("^apos pressionar mult$")
    public void apos_pressionar_mult() throws Exception {
        calc.multiplicar();
    }

    @Then("^o resultado obtido deve ser (\\d+)$")
    public void o_resultado_obtido_deve_ser(int arg1) throws Exception {
        int res = calc.getResultado();
        assertEquals(arg1, res);
    }

    
}
