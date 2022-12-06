import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainWemuzTab from "../../../components/myPage/MainWemuzTab";
import MainWemuzServiceTab from "../../../components/myPage/musician/MainWemuzServiceTab";
import MusicianActivityTab from "../../../components/myPage/musician/MusicianActivityTab";
import MusicianAside from "../../../components/myPage/musician/MusicianAside";
import StartPerformanceBanner from "../../../components/myPage/musician/StartPerformanceBanner";
import MyPageMainTemplate from "../../../components/myPage/MyPageMainTemplate";
import {
    myPageGnbStyle,
    StyledPageTemplate,
} from "../../../components/myPage/MyPageStyles";
import MyPageTemplate from "../../../components/myPage/MyPageTemplate";
import useMusicianInfo from "../hooks/useMusicianInfo";

export type MusicianHomeProp = {};

function MusicianHome(props: MusicianHomeProp) {
    const navigate = useNavigate();
    const { musicianInfo, loadMusicianInfo } = useMusicianInfo();
    const isUserHasMusician = true;

    useEffect(() => {
        if (!isUserHasMusician) {
            navigate("../create");
            return;
        }
        loadMusicianInfo();
    }, []);

    if (!musicianInfo) return null;
    const {
        avatar,
        alias,
        address,
        genre,
        position,
        bio,
        sns,
        fundingCount,
        projectCount,
    } = musicianInfo;

    return (
        <StyledPageTemplate gnbStyle={myPageGnbStyle}>
            <MyPageTemplate
                aside={
                    <MusicianAside
                        avatar={avatar}
                        alias={alias}
                        address={address}
                        genre={genre}
                        position={position}
                        bio={bio}
                        sns={sns}
                    />
                }
                main={
                    <MyPageMainTemplate>
                        <MusicianActivityTab
                            fundingCount={fundingCount}
                            projectCount={projectCount}
                        />
                        <StartPerformanceBanner />
                        <MainWemuzServiceTab />
                        <MainWemuzTab />
                    </MyPageMainTemplate>
                }
            />
        </StyledPageTemplate>
    );
}

export default MusicianHome;
