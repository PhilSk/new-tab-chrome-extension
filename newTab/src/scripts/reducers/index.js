import { combineReducers } from "redux";
import RecentPagesReducer from "./recent_pages_reducer";

const rootReducer = combineReducers({
    pages: RecentPagesReducer
});

export default rootReducer;
