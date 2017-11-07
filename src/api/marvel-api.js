import "whatwg-fetch";

const API_URL = "https://gateway.marvel.com:443/v1/public"
const API_KEY = "6c6b486c3971d5aacb2daa9d7a000c89"

function getChars(startsWith, offset) {
    const CHAR_URL = API_URL + "/characters?apikey=" + API_KEY;
    let url = CHAR_URL;
    
    if (startsWith !== undefined && startsWith !== "")
        url += "&nameStartsWith=" + startsWith;
    if (offset !== undefined && offset !== "")
        url += "&offset=" + offset;
    return fetch(url)
        .then(res => {
            return res.json();
        }).then(json => {
            return json.data;
        }).catch(err => err);
}

export { getChars };