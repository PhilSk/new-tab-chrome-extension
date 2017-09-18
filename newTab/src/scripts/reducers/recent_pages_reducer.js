import { FETCH_RECENT_PAGES } from "../actions/types";

export default function(state = 0, action) {
    switch (action.type) {
        case FETCH_RECENT_PAGES:
            return action.payload;
    }
    return state;
}
