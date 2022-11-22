import { Route, Routes } from "react-router-dom";
import FundingDetail from "./pages/detail/Detail";
import Home from "./pages/home/Home";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./lib/styles/theme";
import Login from "./pages/core/login";
import Core from "./components/core";
import SettingRoutes from "./pages/setting";
import PaymentRoutes from "./pages/payment";
import NotFoundPage from "./pages/NotFoundPage";
import MyPageRoutes from "./pages/myPage";
import OpenPerformRoutes from "./pages/openPerform";
import Chocomusic from "./pages/Chocomusic";

function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Routes>
                <Route index element={<Home />} />
                <Route path="detail/:id" element={<FundingDetail />} />
                <Route path="payment/*" element={<PaymentRoutes />} />
                <Route path="my-page/*" element={<MyPageRoutes />} />
                <Route path="login/*" element={<Login />} />
                <Route path="setting/*" element={<SettingRoutes />} />
                <Route path="open-perform/*" element={<OpenPerformRoutes />} />
                <Route path="chocomusic" element={<Chocomusic />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Core />
        </ThemeProvider>
    );
}

export default App;
