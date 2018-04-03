/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package calculadora;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Test;
import static org.junit.Assert.*;

/**
 *
 * @author Coelho
 */
public class SubtracaoSteps {
    
    Calculadora calc = new Calculadora();

    @Given("^que eu entrei (.*) na calculadora subtracao$")
    public void que_eu_entrei_na_calculadora_subtracao$(int num) throws Exception {
        calc.entrarNumero01(num);
    }

    @Given("^eu entrei (.*) na calculadora subtracao$")
    public void eu_entrei_na_calculadora_subtracao$(int num) throws Exception {
        calc.entrarNumero02(num);
    }

    @When("^eu pressionar sub subtracao$")
    public void eu_pressionar_sub_subtracao$() throws Exception {
        calc.subtrair();
    }

    @Then("^o resultado da subtracao deve ser (\\d+)$")
    public void o_resultado_da_subtracao_deve_ser(int num) throws Exception {
        int res = calc.getResultado();
        assertEquals(num, res);
    }
    
}
