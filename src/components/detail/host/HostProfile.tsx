import styled from "styled-components";
import fonts from "../../../lib/styles/fonts";
import media from "../../../lib/styles/media";
import NewLine from "../../common/NewLine";
import palette from "../../../lib/styles/palette";
import MarkdownTypo from "../../common/MarkdownTypo";

export type HostProfileProp = {
    hostPhoto: string;
    hostName: string;
    hostFundingCnt: number;
    hostBio: string;
    hostVideo?: {
        id: number;
        name: string;
        path: string;
        size: number;
        type: string;
        thumbnail: string;
        uploaded: string;
    };
};

function HostProfile(props: HostProfileProp) {
    const { hostPhoto, hostName, hostVideo, hostFundingCnt, hostBio } = props;

    return (
        <HostProfileBlock>
            <ProfileBlock>
                <HostPhoto>
                    <img src={hostPhoto} alt="뮤지션 프로필 사진" />
                </HostPhoto>
                <HostIntroduction>
                    <p className="greeting">
                        안녕하세요. <NewLine device={["MOBILE"]} />
                        아티스트 <span>{hostName}</span>입니다.
                    </p>
                    <p className="funding-count">
                        WEMUZ 공연 <span>{hostFundingCnt} 회</span> 진행
                    </p>
                </HostIntroduction>
                <HostBio>
                    <MarkdownTypo>{hostBio}</MarkdownTypo>
                </HostBio>
            </ProfileBlock>
            {hostVideo && (
                <HostVideo>
                    <video
                        className="profile-video"
                        poster={hostVideo.thumbnail}
                        controls
                    >
                        <source src={hostVideo.path} />
                    </video>
                </HostVideo>
            )}
        </HostProfileBlock>
    );
}

const HostProfileBlock = styled.div``;

const ProfileBlock = styled.div`
    display: grid;
    grid-template-areas: "photo intro" "photo bio";
    grid-template-columns: 196px 1fr;

    ${media.tablet} {
        grid-template-columns: 188px 1fr;
    }

    ${media.mobile} {
        grid-template-areas: "photo intro" "bio bio";
        grid-template-columns: 112px 1fr;
        padding: 0 32px;
    }
`;

const HostPhoto = styled.div`
    grid-area: photo;
    padding: 0 24px;

    img {
        width: 148px;
        height: 148px;
        border-radius: 50px;
        object-fit: cover;
        box-shadow: 0 0 4px #33333333;
    }

    ${media.tablet} {
        padding: 0 20px;
    }

    ${media.mobile} {
        grid-area: photo;
        padding: 0 12px;

        img {
            width: 88px;
            height: 88px;
            border-radius: 36px;
        }
    }
`;

const HostIntroduction = styled.div`
    grid-area: intro;
    padding-left: 20px;

    .greeting {
        font-size: 22px;
        font-weight: ${fonts.weight.bold};

        // a {
        span {
            position: relative;

            &,
            &:link,
            &:visited {
                color: ${palette.purple0};
            }

            &::before {
                content: "";
                position: absolute;
                bottom: 1px;
                left: 50%;
                transform: translateX(-50%);
                width: 105%;
                height: 3px;
                border-radius: 2px;
                z-index: -1;
                opacity: 0;
                transition: opacity 0.3s;
                background-color: ${palette.purple5};
            }

            &:hover::before {
                opacity: 100%;
            }
        }
    }

    .funding-count {
        font-size: 16px;
        color: ${palette.gray1};
        margin-top: 8px;

        // a {
        span {
            border-bottom: 1px solid ${palette.gray2};

            &,
            &:link,
            &:visited {
                color: ${palette.gray1};
            }

            &:hover {
                border-bottom: 1px solid ${palette.gray1};
                font-weight: ${fonts.weight.bold};
            }
        }
    }

    ${media.tablet} {
        padding-left: 12px;
    }

    ${media.mobile} {
        grid-area: intro;
        padding: 10px 0 0 12px;

        .greeting {
            font-size: 16px;
            line-height: 22px;
        }

        .funding-count {
            font-size: 13px;
            margin-top: 12px;
        }
    }
`;

const HostBio = styled.div`
    grid-area: bio;
    font-size: 18px;
    line-height: 25px;
    padding-left: 20px;
    margin-top: 28px;

    ${media.tablet} {
        padding-left: 12px;
    }

    ${media.mobile} {
        grid-area: bio;
        font-size: 14px;
        line-height: 19px;
        padding-left: 0;
    }
`;

const HostVideo = styled.div`
    width: 100%;
    aspect-ratio: 1000 / 562;
    border-radius: 4px;
    overflow: hidden;
    margin-top: 72px;

    .video-controller {
        height: 100%;
    }

    .profile-video {
        position: relative;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 4px;
        box-sizing: border-box;
    }

    ${media.mobile} {
        border-radius: 0;

        .profile-video {
            border-radius: 0;
        }
    }
`;

export default HostProfile;
