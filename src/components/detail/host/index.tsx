import styled from "styled-components";
import media from "../../../lib/styles/media";
import useDetailInfo from "../../../pages/detail/hooks/useDetailInfo";
import HostCollection from "./HostCollection";
import HostInterview from "./HostInterview";
import HostProfile from "./HostProfile";

export type HostProp = {};

function Host(props: HostProp) {
    const {
        detailInfo: {
            hostName,
            hostProfilePhoto,
            hostProfileVideo,
            hostFundingCount,
            hostBio,
            hostInterview,
        },
        loading,
    } = useDetailInfo();

    return !loading ? (
        <HostBlock className="section host" data-name="host">
            <HostProfile
                hostName={hostName}
                hostPhoto={hostProfilePhoto}
                hostVideo={hostProfileVideo}
                hostFundingCnt={hostFundingCount}
                hostBio={hostBio}
            />
            {hostInterview && <HostInterview interview={hostInterview} />}
            {/* <HostCollection
                collectionTitle={testMusician.collectionTitle}
                collectionPhoto={testMusician.collectionPhoto}
                collectionDes={testMusician.collectionDes}
            /> */}
        </HostBlock>
    ) : (
        <></>
    );
}

const HostBlock = styled.section`
    width: 100%;
    padding-top: 100px;

    ${media.mobile} {
        padding-top: 72px;
    }
`;

export default Host;
