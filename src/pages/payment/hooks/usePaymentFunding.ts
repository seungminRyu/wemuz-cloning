import { useSelector } from "react-redux";
import { RootState } from "../../../modules";
import {
    initialPaymentFunding,
    PaymentFunding,
} from "../../../modules/payment";

function usePaymentFunding(): [PaymentFunding, boolean, any] {
    const {
        data: paymentFunding,
        loading,
        error,
    } = useSelector((state: RootState) => state.payment.funding);

    return [
        paymentFunding ? paymentFunding : initialPaymentFunding,
        !paymentFunding || loading,
        error,
    ];
}

export default usePaymentFunding;
