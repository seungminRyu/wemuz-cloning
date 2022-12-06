import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PageTemplate from "../../components/global/PageTemplate";
import useUser from "../../lib/hooks/useUser";
import NotFoundPage from "../NotFoundPage";
import Account from "./Account";
import Setting from "./Setting";
import SettingSupporter from "./SettingSupporter";

export type SettingRoutesProp = {};

function SettingRoutes(props: SettingRoutesProp) {
    const user = useUser();
    if (!user) return <Navigate replace to="/login" />;

    return (
        <PageTemplate>
            <Routes>
                <Route index element={<Setting />} />
                <Route path="/account" element={<Account />} />
                <Route path="/supporter" element={<SettingSupporter />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </PageTemplate>
    );
}

export default SettingRoutes;
