import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../../NotFoundPage";
import Login from "./Login";
import Redirect from "./Redirect";

function LoginRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/redirect" element={<Redirect />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default LoginRoutes;
