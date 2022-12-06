import styled, { css } from "styled-components";
import SnsLink from "../../common/SnsLink";
import palette from "../../../lib/styles/palette";
import media from "../../../lib/styles/media";

import { ReactComponent as InstaIco } from "../../../static/icons/global/ico_instagram.svg";
import { ReactComponent as SoundCloudIco } from "../../../static/icons/global/ico_soundcloud.svg";
import { ReactComponent as YoutubeIco } from "../../../static/icons/global/ico_youtube.svg";
import { ReactComponent as SpotifyIco } from "../../../static/icons/global/ico_spotify.svg";
import { ReactComponent as EtcIco } from "../../../static/icons/global/ico_my_web.svg";
import fonts from "../../../lib/styles/fonts";

export type SnsLinkGroupProp = {
    sns: {
        instagram: string;
        soundcloud: string;
        youtube: string;
        spotify: string;
        etc: string;
    };
};

function SnsLinkGroup(props: SnsLinkGroupProp) {
    const { sns } = props;

    return (
        <SnsLinkGroupBlock>
            {sns.instagram && (
                <StyledSnsLink to={sns.instagram}>
                    <StyledInstaIco />
                </StyledSnsLink>
            )}
            {sns.soundcloud && (
                <StyledSnsLink to={sns.soundcloud}>
                    <StyledSoundCloudIco />
                </StyledSnsLink>
            )}
            {sns.youtube && (
                <StyledSnsLink to={sns.youtube}>
                    <StyledYoutubeIco />
                </StyledSnsLink>
            )}
            {sns.spotify && (
                <StyledSnsLink to={sns.spotify}>
                    <StyledSpotifyIco />
                </StyledSnsLink>
            )}
            {sns.etc && (
                <StyledSnsLink to={sns.etc}>
                    <StyledEtcIco />
                </StyledSnsLink>
            )}
            {!sns.instagram &&
                !sns.soundcloud &&
                !sns.youtube &&
                !sns.spotify &&
                !sns.etc && <p>등록된 SNS 정보가 없습니다.</p>}
        </SnsLinkGroupBlock>
    );
}

const SnsLinkGroupBlock = styled.div`
    display: flex;
    justify-content: center;
    grid-area: sns;
    width: 100%;
    border-top: 1px solid ${palette.gray4};
    padding-top: 24px;
    margin-top: 24px;

    p {
        ${fonts.size.scale18}
        color: ${palette.gray1};
    }

    ${media.tablet} {
        border: none;
        padding: 16px 0 26px;
        margin: 0;

        p {
            display: inline-block;
            border-radius: 20px;
            background-color: ${palette.purple5};
            padding: 11px 20px 9px;
        }
    }

    ${media.mobile} {
        padding: 12px 0 16px;

        p {
            border-radius: 16px;
            padding: 9px 16px 7px;
        }
    }
`;

const StyledSnsLink = styled(SnsLink)`
    & + & {
        margin-left: 12px;
    }

    ${media.mobile} {
        & + & {
            margin-left: 16px;
        }
    }
`;

const iconStyle = css`
    ${media.mobile} {
        width: 28px;
        height: 28px;
    }
`;

const StyledInstaIco = styled(InstaIco)`
    ${iconStyle}
`;
const StyledSoundCloudIco = styled(SoundCloudIco)`
    ${iconStyle}
`;
const StyledYoutubeIco = styled(YoutubeIco)`
    ${iconStyle}
`;
const StyledSpotifyIco = styled(SpotifyIco)`
    ${iconStyle}
`;
const StyledEtcIco = styled(EtcIco)`
    ${iconStyle}
`;

export default SnsLinkGroup;
