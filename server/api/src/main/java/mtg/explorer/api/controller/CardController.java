package mtg.explorer.api.controller;

import mtg.explorer.api.service.CardService;
import mtg.explorer.api.util.Util;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping(value = "/cards")
public class CardController {
    @Autowired
    CardService cardService;
    @GetMapping
    public List<Object> getCardsByPartOfName(@RequestParam(name = "name") String partOfName) throws IOException,
            InterruptedException {
        List<Object> listOfCards = cardService.getByPartOfName(partOfName);

        return listOfCards;
    }
}
