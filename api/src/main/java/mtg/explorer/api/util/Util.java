package mtg.explorer.api.util;

import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;

public class Util {
    public static String getByPartOfName(String partOfName) throws IOException, InterruptedException {
        String uri = "https://api.scryfall.com/cards/autocomplete?q=" + partOfName;

        String response = getRequest(uri);

        return response;
    }

    /**
     * get method that receives an uri as parameter
     *
     * @param uri final uri
     *
     * @return HttpEntity as the results of get request
     *
     * @author Andrews Matsubara
     */
    private static String getRequest(String uri) {
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.getForEntity(uri, String.class);

        return response.getBody();
    }
}
