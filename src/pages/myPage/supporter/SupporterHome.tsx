import Loader from "../../../components/common/Loader";
import MainWemuzTab from "../../../components/myPage/MainWemuzTab";
import MyPageMainTemplate from "../../../components/myPage/MyPageMainTemplate";
import {
    myPageGnbStyle,
    StyledPageTemplate,
} from "../../../components/myPage/MyPageStyles";
import MyPageTemplate from "../../../components/myPage/MyPageTemplate";
import SupporterActivityTab from "../../../components/myPage/supporter/SupporterActivityTab";
import SupporterAside from "../../../components/myPage/supporter/SupporterAside";
import useSupporterInfo from "../hooks/useSupporterInfo";

export type SupporterHomeProp = {};

function SupporterHome(props: SupporterHomeProp) {
    const { supporterInfo, loading } = useSupporterInfo();

    if (loading || !supporterInfo) {
        return (
            <StyledPageTemplate gnbStyle={myPageGnbStyle}>
                <Loader.Container>
                    <Loader />
                </Loader.Container>
            </StyledPageTemplate>
        );
    }

    const {
        supportedFundingsCount,
        likedFundingsCount,
        address,
        genres,
        name,
        avatar,
    } = supporterInfo;

    return (
        <StyledPageTemplate gnbStyle={myPageGnbStyle}>
            <MyPageTemplate
                aside={
                    <SupporterAside
                        name={name}
                        avatar={avatar}
                        address={address}
                        genres={genres}
                    />
                }
                main={
                    <MyPageMainTemplate>
                        <SupporterActivityTab
                            supportedFundingsCount={supportedFundingsCount}
                            likedFundingsCount={likedFundingsCount}
                        />
                        <MainWemuzTab />
                    </MyPageMainTemplate>
                }
            />
        </StyledPageTemplate>
    );
}

export default SupporterHome;
