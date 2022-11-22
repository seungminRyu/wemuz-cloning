import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../NotFoundPage";
import Intro from "./Intro";

function OpenPerformRoutes() {
    return (
        <Routes>
            <Route path={"/intro"} element={<Intro />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default OpenPerformRoutes;
