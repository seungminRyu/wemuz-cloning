import { Navigate, Route, Routes } from "react-router-dom";
import NotFoundPage from "../../NotFoundPage";
import LikedList from "./LikedList";
import SupportDetail from "./SupportDetail";
import SupporterHome from "./SupporterHome";
import SupportedList from "./SupportedList";

export type SupporterRoutesProp = {};

function SupporterRoutes(props: SupporterRoutesProp) {
    return (
        <Routes>
            <Route path="" element={<Navigate to="./home" />} />
            <Route path="/home" element={<SupporterHome />} />
            <Route path="/supports" element={<SupportedList />} />
            <Route path="/support/:id" element={<SupportDetail />} />
            <Route path="/likes" element={<LikedList />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default SupporterRoutes;
