
package calculadora;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static org.junit.Assert.*;
/**
 *
 * @author andre
 */
public class Subtracao {
    
    Calculadora calc = new Calculadora();
    
    @Given("^eu vou entrar com o primeiro numero (\\d+)$")
    public void eu_vou_entrar_com_o_primeiro_numero(int arg1) throws Exception {
       calc.entrarNumero01(arg1);
    }

    @Given("^vou entrar com o segundo numero (\\d+)$")
    public void vou_entrar_com_o_segundo_numero(int arg1) throws Exception {
        calc.entrarNumero02(arg1);
    }

    @When("^vou precionar subtrair$")
    public void vou_precionar_subtrair() throws Exception {
        calc.subtrair();
    }

    @Then("^o resultado da subtracao deve ser -(\\d+)$")
    public void o_resultado_da_subtracao_deve_ser(int arg1) throws Exception {
        int res = calc.getResultado();
        assertEquals(arg1, res);
    }

    

}
