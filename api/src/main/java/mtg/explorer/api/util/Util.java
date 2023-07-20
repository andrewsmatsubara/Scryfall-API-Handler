package mtg.explorer.api.util;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class Util {
    public static String getByPartOfName(String partOfName) throws IOException, InterruptedException {
        String uri = "https://api.scryfall.com/cards/autocomplete?q=" + partOfName;

        String response = httpGetRequest(uri);

        return response;
    }
    private static String httpGetRequest(String uri) throws IOException, InterruptedException {
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .version(HttpClient.Version.HTTP_2)
                .uri(URI.create(uri))
                .headers("Accept-Enconding", "gzip, deflate")
                .build();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

        String responseBody = response.body();

        return responseBody;
    }
}
