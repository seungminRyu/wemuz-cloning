import React from "react";
import { ToastContainer } from "react-toastify";
import GlobalStyles from "../global/GlobalStyles";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import media from "../../lib/styles/media";
import RouteChangeTracker from "./RouteChangeTracker";

export type CoreProp = {};

function Core(props: CoreProp) {
    return (
        <>
            <RouteChangeTracker />
            <StyledToastContainer
                position="bottom-left"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <GlobalStyles />
        </>
    );
}

const StyledToastContainer = styled(ToastContainer)`
    bottom: 80px;

    .Toastify__toast {
        font-family: "NanumSquareRound", -apple-system, BlinkMacSystemFont,
            "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
            "Droid Sans", "Helvetica Neue", sans-serif;
        line-height: 1.25em;
        word-break: keep-all;
    }

    ${media.mobile} {
        bottom: 0;
        font-size: 14px;

        .Toastify__toast-icon {
            width: 1.25em;
        }
    }
`;

export default Core;
