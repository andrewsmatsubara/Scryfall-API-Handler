package mtg.explorer.api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/cards")
public class HelloController {
    @GetMapping
    public String olaMundo() {
        return "Hello World!";
    }
}
