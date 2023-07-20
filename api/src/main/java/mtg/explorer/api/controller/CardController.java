package mtg.explorer.api.controller;

import mtg.explorer.api.util.Util;
import org.springframework.http.HttpRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
@RequestMapping(value = "/cards")
public class CardController {
    @GetMapping
    public String getByPartOfName(@RequestParam(name = "name") String partOfName) throws IOException, InterruptedException {
        String cardRequest = Util.getByPartOfName(partOfName);

        return cardRequest;
    }
}
