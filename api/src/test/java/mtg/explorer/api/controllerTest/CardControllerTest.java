package mtg.explorer.api.controllerTest;

import org.hamcrest.Matchers;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@SpringBootTest@AutoConfigureMockMvc
public class CardControllerTest {
	@Autowired
	private MockMvc mockMvc;
	@Test
	public void getByPartOfName() throws Exception {
		this.mockMvc.perform((get("https://api.scryfall.com/cards?name=nico"))).andDo(print()).andExpect(status().isOk()).andExpect(content().string(Matchers.containsString("data"))).andExpect((content().string(Matchers.containsString("total_values"))));
	}

}
