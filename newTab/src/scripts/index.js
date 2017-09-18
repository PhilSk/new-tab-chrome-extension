import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import App from "./components/app";
import reducers from "./reducers";
import { loadState, saveState } from "./local_storage";
import Load from "./middlewares/load";

const persistedState = loadState();
const store = createStore(reducers, persistedState, applyMiddleware(Load));

store.subscribe(() => {
    saveState(store.getState());
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
);
