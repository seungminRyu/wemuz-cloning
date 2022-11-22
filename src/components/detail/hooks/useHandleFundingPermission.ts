import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function useHandleFundingPermission() {
    const navigate = useNavigate();
    return (fundingPermission: string, id: number) => {
        switch (fundingPermission) {
            case "PERMITTED": {
                navigate(`/payment/options/${id}`);
                return;
            }
            case "LIMITED_AGE": {
                toast.warning(
                    `해당 공연은 연령이 제한되어 예매를 할 수 없습니다.`
                );
                return;
            }
            case "NOT_VARIFIED": {
                toast.warning("공연을 예매하기 위해 본인인증이 필요합니다.");
                navigate("/setting/account");
                return;
            }
            case "NOT_LOGINED": {
                toast.warning("로그인 후 이용해주세요.");
                navigate("/login");
                return;
            }
            default: {
                console.error("Unhandeled type of permission state");
            }
        }
    };
}

export default useHandleFundingPermission;
