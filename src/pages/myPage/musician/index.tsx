import { Navigate, Route, Routes } from "react-router-dom";
import NotFoundPage from "../../NotFoundPage";
import CreateMusician from "./CreateMusician";
import MusicianHome from "./MusicianHome";

export type MusicianRoutesProp = {};

function MusicianRoutes(props: MusicianRoutesProp) {
    return (
        <Routes>
            <Route path="" element={<Navigate to="./home" />} />
            <Route path="/create" element={<CreateMusician />} />
            <Route path="/home" element={<MusicianHome />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default MusicianRoutes;
