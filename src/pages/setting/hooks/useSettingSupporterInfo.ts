import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchSupporterInfo } from "../../../lib/api/setting/api";
import useUser from "../../../lib/hooks/useUser";
import { formatAccessKey, handleAxiosError } from "../../../lib/utils";

function useSettingSupporterInfo() {
    const user = useUser();
    const navigate = useNavigate();

    const loadSupporterInfo = async () => {
        try {
            const accessKey = formatAccessKey(user.accessToken);
            const res = await fetchSupporterInfo({ accessKey });
            return {
                gender: res.user_profile.gender,
                avatar: res.user_profile.avatar,
                genre: res.preferred_genres.map((elem) => elem.id),
                address: {
                    name: res.user_profile.address,
                    depth1: res.user_profile.address_depth_1,
                    depth2: res.user_profile.address_depth_2,
                    lat: res.user_profile.lat,
                    lng: res.user_profile.lng,
                },
            };
        } catch (e) {
            handleAxiosError(e);
            toast.warning("페이지 로드 중 문제가 발생했습니다.");
            navigate("../");
        }
    };

    return { loadSupporterInfo };
}

export default useSettingSupporterInfo;
