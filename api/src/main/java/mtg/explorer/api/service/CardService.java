package mtg.explorer.api.service;

import com.google.gson.*;
import mtg.explorer.api.types.ScryfallEndpoints;
import mtg.explorer.api.util.Util;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CardService {
    /**
     * gets the list of found cards and makes a new request for each one of them
     *
     * @param {String} partOfName - name part of desired card
     *
     * @return {List<Object>} a list of cards where each one of them has different infos(the usage of DTO would be
     * great!)
     *
     * @author Andrews Matsubara
     */
    public List<Object> getByPartOfName(String partOfName) {
        String uri = ScryfallEndpoints.BASE_URI.getUri() + ScryfallEndpoints.AUTO_COMPLETE_CARDS.getUri() + partOfName;
        String response = Util.getRequest(uri);

        Gson gson = new Gson();
        JsonObject jsonObject = gson.fromJson(response, JsonObject.class);
        JsonArray cardNames = jsonObject.get("data").getAsJsonArray();

        List<Object> listOfCards = new ArrayList<Object>();

        for (int i = 0; i < cardNames.size(); i ++) {
            String uriForEachFoundCardRequest =
                    ScryfallEndpoints.BASE_URI.getUri() + ScryfallEndpoints.CARDS.getUri() + cardNames.get(i);
            String responseForEachFoundCardRequest = Util.getRequest(uriForEachFoundCardRequest);

            Gson newGson = new Gson();
            JsonObject newJsonObject = newGson.fromJson(responseForEachFoundCardRequest, JsonObject.class);

            listOfCards.add(newJsonObject);
        }

        return listOfCards;
    }
}
