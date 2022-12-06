import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchMusicianInfo } from "../../../lib/api/myPage/api";
import useUser from "../../../lib/hooks/useUser";
import { formatAccessKey, handleAxiosError } from "../../../lib/utils";

export type MusicianInfo = {
    alias: string;
    avatar: string;
    position: string;
    genre: string;
    address: string;
    bio: string;
    fundingCount: number;
    projectCount: number;
    sns: {
        instagram: string;
        soundcloud: string;
        youtube: string;
        spotify: string;
        etc: string;
    };
};

function useMusicianInfo() {
    const user = useUser();
    const navigate = useNavigate();
    const [musicianInfo, setMusicianInfo] = useState<MusicianInfo | null>(null);

    const loadMusicianInfo = async () => {
        const accessKey = formatAccessKey(user.accessToken);
        try {
            const res = await fetchMusicianInfo({
                accessKey,
            });
            const loadedMusicianInfo = {
                alias: res.alias || "",
                avatar: res.avatar || "",
                position: res.position_main.name || "",
                genre: res.genre.name || "",
                address: res.address_depth_1 || "",
                bio: res.bio || "",
                fundingCount: res.number_of_fundings || 0,
                projectCount: res.number_of_projects || 0,
                sns: {
                    instagram: res.instagram || "",
                    soundcloud: res.soundcloud || "",
                    youtube: res.youtube || "",
                    spotify: res.spotify || "",
                    etc: res.etc || "",
                },
            };
            setMusicianInfo(loadedMusicianInfo);
        } catch (e) {
            handleAxiosError(e);
            toast.warning("페이지 로드중 문제가 발생했습니다.");
            navigate("/");
        }
    };

    return { musicianInfo, loadMusicianInfo };
}

export default useMusicianInfo;
