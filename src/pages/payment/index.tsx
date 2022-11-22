import { useEffect, useRef, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Options from "./Options";
import Order from "./Order";
import useToggle from "../../lib/hooks/useToggle";
import Result from "./Result";
import usePaymentFunding from "./hooks/usePaymentFunding";
import NotFoundPage from "../NotFoundPage";
import Request from "./Request";

export type SelectedPackages = {
    id: number;
    count: number;
    price: number;
    name: string;
    items: {
        count: number;
        name: string;
        photo: string | null;
    }[];
    options: {
        id: number;
        name: string;
        count: number;
    }[];
}[];

function PaymentRoutes() {
    const userSelectionResult = useRef<{
        totalPackagesCount: number;
        priceAmount: number;
        packages: SelectedPackages;
    }>({
        totalPackagesCount: 0,
        priceAmount: 0,
        packages: [],
    });
    const commentOptionRef = useRef<{
        name: boolean;
        package: boolean;
    }>({
        name: false,
        package: false,
    });
    const [paymentResult, setPaymentResult] = useState<any | null>(null);
    const [isPaymentFinished, _, setIsPaymentFinished] = useToggle(false);
    const [isOptionsSubmitted, toggleIsOptionsSubmitted] = useToggle(false);
    const [paymentFunding] = usePaymentFunding();
    const navigate = useNavigate();

    useEffect(() => {
        if (isOptionsSubmitted) {
            navigate(`/payment/order/${paymentFunding.id}`, {
                replace: true,
            });
        }
    }, [isOptionsSubmitted]);

    return (
        <Routes>
            <Route
                path="/options/:id"
                element={
                    <Options
                        commentOptionRef={commentOptionRef}
                        userSelectionResult={userSelectionResult}
                        isSubmitted={isOptionsSubmitted}
                        toggleIsSubmitted={toggleIsOptionsSubmitted}
                    />
                }
            />
            <Route
                path="/order/:id"
                element={
                    <Order
                        commentOptionRef={commentOptionRef}
                        userSelectionResult={userSelectionResult}
                        isOptionsSubmitted={isOptionsSubmitted}
                        isPaymentFinished={isPaymentFinished}
                    />
                }
            />
            <Route
                path="/request"
                element={
                    <Request
                        setPaymentResult={setPaymentResult}
                        isPaymentFinished={isPaymentFinished}
                    />
                }
            />
            <Route
                path="/result"
                element={<Result paymentResult={paymentResult} />}
            />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default PaymentRoutes;
