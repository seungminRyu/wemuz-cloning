import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import configureStore from "./modules/configureStore";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import ScrollToTop from "./components/global/ScrollToTop";
import { getUser, renewAccessToken } from "./lib/api/core/api";
import { formatAccessKey, handleAxiosError } from "./lib/utils";
import { setUser } from "./modules/core";
import ReactGA from "react-ga";
import TagManager from "react-gtm-module";

const customHistory = createBrowserHistory();
export const store = configureStore(customHistory);

const loadUser = async (accessToken: string) => {
    const userInfo = await getUser({
        accessKey: formatAccessKey(accessToken),
    });

    return {
        accessToken,
        ...userInfo,
    };
};

export const loginUser = async () => {
    const refreshItem = localStorage.getItem("refresh");
    if (!refreshItem) return;
    try {
        const refreshToken = JSON.parse(refreshItem);
        const user = await renewAccessToken({
            refresh: refreshToken,
        }).then(loadUser);
        store.dispatch(setUser(user));
    } catch (e: any) {
        console.error(e);
        if (e.response && e.response.status === 401) {
            console.error("Error: Token is invalid or expired");
            localStorage.removeItem("refresh");
        } else {
            handleAxiosError(e);
        }
    }
};

// initialize google analytics, tag manager
const trackingId = process.env.REACT_APP_ANALYTICS_TRACKING_ID as string;
ReactGA.initialize(trackingId);

const tagManagerParams = {
    gtmId: process.env.REACT_APP_TAG_MAGAGER_ID as string,
};
TagManager.initialize(tagManagerParams);

// load user
loginUser().finally(() => {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <ScrollToTop />
                <App />
            </BrowserRouter>
        </Provider>,
        document.getElementById("root")
    );
});
