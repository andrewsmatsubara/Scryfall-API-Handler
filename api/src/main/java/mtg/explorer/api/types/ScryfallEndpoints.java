package mtg.explorer.api.types;

/**
 * enum with a list of scryfall endpoints, base uri and its getter
 *
 * @author Andrews Matsubara
 */
public enum ScryfallEndpoints {
    BASE_URI("https://api.scryfall.com"),
    AUTO_COMPLETE_CARDS("/cards/autocomplete?q="),
    CARDS("/cards/named?fuzzy=");

    private String uri;

    ScryfallEndpoints(String uri) {
        this.uri = uri;
    }

    public String getUri() {
        return uri;
    }
}
