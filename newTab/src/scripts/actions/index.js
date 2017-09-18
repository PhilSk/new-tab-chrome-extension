import { FETCH_RECENT_PAGES, PAGE_SELECTED } from "./types.js";

export function fetchRecentPages() {
    const payload = new Promise(function(resolve, reject) {
        chrome.history.search({ text: "", maxResults: 8 }, data => {
            resolve(data);
        });
    });
    return {
        type: FETCH_RECENT_PAGES,
        payload: payload
    };
}
