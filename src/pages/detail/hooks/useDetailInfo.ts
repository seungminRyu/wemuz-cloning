import { useSelector } from "react-redux";
import { RootState } from "../../../modules";
import { initialDetailInfo } from "../../../modules/detail";

function useDetailInfo() {
    const {
        data: detailInfo,
        loading,
        error,
    } = useSelector((state: RootState) => state.detail.detailInfo);

    return {
        detailInfo: detailInfo ? detailInfo : initialDetailInfo,
        loading: !detailInfo || loading,
        error,
    };
}

export default useDetailInfo;
