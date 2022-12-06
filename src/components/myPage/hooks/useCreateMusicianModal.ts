import { useState } from "react";
import { postMusicianInfo } from "../../../lib/api/myPage/api";
import useUser from "../../../lib/hooks/useUser";
import { formatAccessKey } from "../../../lib/utils";

export default function useCreateMusicianModal(
    lastIdx: number
): [number, () => void, () => void, () => void] {
    const [curIdx, setCurIdx] = useState<number>(0);
    const user = useUser();

    const decreaseStepIdx = () => {
        if (curIdx > 0) {
            setCurIdx(curIdx - 1);
        }
    };

    const increaseStepIdx = () => {
        if (curIdx < lastIdx) {
            setCurIdx(curIdx + 1);
        }
    };

    const onCompleteBtnClick = async () => {
        const formData = new FormData();
        formData.append("alias", "테스트엘리아스");
        formData.append("avatar", "test avatar");
        formData.append("address", "테스트 부산 수영");
        formData.append("address_depth_1", "테스트부산");
        formData.append("address_depth_2", "테스트수영");
        formData.append("lat", "77.7");
        formData.append("lng", "33.3");
        formData.append("position_main", "1");
        formData.append("genre", "2");
        formData.append("genre", "3");
        formData.append("genre", "4");
        const accessKey = formatAccessKey(user.accessToken);
        await postMusicianInfo({ accessKey, postData: formData });
    };

    return [curIdx, decreaseStepIdx, increaseStepIdx, onCompleteBtnClick];
}
