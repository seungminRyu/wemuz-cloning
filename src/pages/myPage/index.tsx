import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { toast } from "react-toastify";
import useUser from "../../lib/hooks/useUser";
import NotFoundPage from "../NotFoundPage";
import MusicianRoutes from "./musician";
import SupporterRoutes from "./supporter";

export type MyPageRoutesProp = {};

function MyPageRoutes(props: MyPageRoutesProp) {
    const user = useUser();
    if (!user) {
        toast.warning("로그인 후 이용해주세요.");
        return <Navigate to="/login" />;
    }

    return (
        <Routes>
            <Route path="/supporter/*" element={<SupporterRoutes />} />
            <Route path="/musician/*" element={<MusicianRoutes />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default MyPageRoutes;
