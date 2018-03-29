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
 * @author Aluno
 */
public class MultiplicacaoSteps {

    Calculadora calc = new Calculadora();

    @Given("^que eu entrei (.*) na calculadora multiplicacao$")
    public void que_eu_entrei_na_calculadora_multiplicacao$(int num) throws Exception {
        calc.entrarNumero01(num);
    }

    @Given("^eu entrei (.*) na calculadora multiplicacao$")
    public void eu_entrei_na_calculadora_multiplicacao$(int num) throws Exception {
        calc.entrarNumero02(num);
    }

    @When("^eu pressionar mult multiplicacao$")
    public void eu_pressionar_mult_multiplicacao$() throws Exception {
        calc.multiplicar();
    }

    @Then("^o resultado da multiplicacao deve ser (\\d+)$")
    public void o_resultado_da_multiplicacao_deve_ser(int num) throws Exception {
        int res = calc.getResultado();
        assertEquals(num, res);
    }

}
