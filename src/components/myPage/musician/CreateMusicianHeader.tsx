import { ReactEventHandler } from "react";
import styled from "styled-components";
import fonts from "../../../lib/styles/fonts";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";
import standards from "../../../lib/styles/standards";

import defaultAvatarImg from "../../../static/imgs/global/default_avatar.png";
import musicianAvatarImg from "../../../static/imgs/myPage/musician_avatar.jpeg";

export type CreateMusicianMainProp = {
    onCreateBtnClick: ReactEventHandler;
};

function CreateMusicianMain(props: CreateMusicianMainProp) {
    const { onCreateBtnClick } = props;

    return (
        <CreateMusicianMainBlock>
            <Header>
                <HeaderContainer>
                    <h3>뮤지션 프로필을 생성해 보세요</h3>
                    <p>
                        위뮤즈 플랫폼에서 공연 개설, 프로젝트 신청, 팀 활동이
                        가능합니다.
                    </p>
                </HeaderContainer>
                <ProfileImages>
                    <img
                        className="img-1"
                        src={musicianAvatarImg}
                        alt="musician-avatar-1"
                    />
                    <img
                        className="img-2"
                        src={defaultAvatarImg}
                        alt="musician-avatar-1"
                    />
                </ProfileImages>
            </Header>
            <CreateBtn onClick={onCreateBtnClick}>
                뮤지션 프로필 생성하기
            </CreateBtn>
        </CreateMusicianMainBlock>
    );
}

const CreateMusicianMainBlock = styled.div`
    max-width: 840px;
    margin: 0 auto;

    ${media.tablet} {
        max-width: none;
        width: 100%;
        padding: 0 ${standards.padding.lg};
    }

    ${media.mobile} {
        padding: 0 ${standards.padding.sm};
    }
`;

const Header = styled.div`
    display: grid;
    grid-template-areas: "heading images";
    grid-template-columns: 1fr 200px;

    ${media.mobile} {
        grid-template-areas: "images" "heading";
        grid-template-columns: 1fr;
    }
`;

const HeaderContainer = styled.div`
    grid-area: heading;

    h3 {
        ${fonts.size.scale32}
        font-weight: ${fonts.weight.bold};
        margin-top: 18px;
    }

    p {
        ${fonts.size.scale18}
        ${fonts.lineHeight.scale18}
        color: ${palette.gray0};
        margin-top: 16px;
    }

    ${media.tablet} {
        h3 {
            margin-top: 6px;
        }
    }

    ${media.mobile} {
        h3 {
            margin-top: 28px;
        }

        p {
            margin-top: 8px;
        }
    }
`;

const ProfileImages = styled.div`
    grid-area: images;
    position: relative;
    width: 200px;
    height: 108px;

    img {
        position: absolute;
        width: 88px;
        height: 88px;
        object-fit: cover;
        border-radius: 30px;
        border: 1px solid #0000001a;
        box-shadow: 0 0 4px ${palette.shadow0};

        &.img-1 {
            top: 0;
            left: 32px;
            z-index: 1;
        }

        &.img-2 {
            top: 20px;
            left: 80px;
            z-index: 0;
        }
    }

    ${media.mobile} {
        width: 96px;
        height: 56px;
        margin: 0 auto;

        img {
            width: 48px;
            height: 48px;
            border-radius: 16px;

            &.img-1 {
                top: 0;
                left: 8px;
            }

            &.img-2 {
                top: 8px;
                left: 40px;
            }
        }
    }
`;

const CreateBtn = styled.button`
    ${fonts.size.scale18}
    display: inline-block;
    width: 228px;
    white-space: nowrap;
    color: ${palette.white0};
    background-color: ${palette.purple0};
    border-radius: 8px;
    transition: background-color 0.2s;
    padding: 18px 28px;
    margin-top: 28px;

    &:hover {
        background-color: ${palette.purple3};
    }

    ${media.mobile} {
        width: 166px;
        border-radius: 4px;
        padding: 12px 16px;
    }
`;

export default CreateMusicianMain;
