import { useSelector } from "react-redux";
import {
    GetHomeFundingsResponse,
    initialHomeFundings,
} from "../../../lib/api/home/type";
import useUserxx from "../../../lib/hooks/useUserxx";
import { RootState } from "../../../modules";

const PG_TEST_USER_ID = process.env.REACT_APP_MODE === "deploy" ? 661 : 605;
const PG_TEST_FUNDING_IDS =
    process.env.REACT_APP_MODE === "deploy" ? [13, 14, 15] : [10];

function useHomeFundings(): [GetHomeFundingsResponse, boolean] {
    const { data, loading } = useSelector(
        (state: RootState) => state.home.fundings
    );
    const user = useUserxx();
    let homeFundings = data;

    if (homeFundings && user?.id !== PG_TEST_USER_ID) {
        const filteredRunningFundings = homeFundings.running_funding.filter(
            (aFunding) => !PG_TEST_FUNDING_IDS.includes(aFunding.id)
        );

        homeFundings = {
            ...homeFundings,
            running_funding: filteredRunningFundings,
        };
    }

    return [
        homeFundings ? homeFundings : initialHomeFundings,
        !homeFundings || loading,
    ];
}

export default useHomeFundings;
