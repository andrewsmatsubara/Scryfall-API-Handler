package mtg.explorer.api.util;

import mtg.explorer.api.types.ScryfallEndpoints;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;

/**
 * utility class for request methods(change the Class name would be great!)
 *
 * @author Andrews Matsubara
 */
public class Util {
    /**
     * get method that receives an uri as parameter
     *
     * @param uri final uri
     *
     * @return HttpEntity as the results of get request
     *
     * @author Andrews Matsubara
     */
    public static String getRequest(String uri) {
        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<String> response = restTemplate.getForEntity(uri, String.class);

        return response.getBody();
    }
}
