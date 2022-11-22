import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { BrowserHistory } from "history";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "redux-logger";
import rootReducer, { rootSaga } from ".";

export default function configureStore(customHistory: BrowserHistory) {
    const sagaMiddleware = createSagaMiddleware({
        context: {
            history: customHistory,
        },
    });

    const store = createStore(
        rootReducer,
        process.env.REACT_APP_MODE === "deploy"
            ? composeWithDevTools(applyMiddleware(sagaMiddleware))
            : composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
    );

    sagaMiddleware.run(rootSaga);

    return store;
}
