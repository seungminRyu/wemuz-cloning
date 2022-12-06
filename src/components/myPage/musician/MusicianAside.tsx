import styled from "styled-components";
import media from "../../../lib/styles/media";
import AsideAvatar from "../AsideAvatar";
import AsideUserAlias from "../AsideUserAlias";
import AsideUserInfo from "../AsideUserInfo";
import AsideUserInfoRow from "../AsideUserInfoRow";
import SnsLinkGroup from "./SnsLinkGroup";
import MyPageAsideTemplate from "../MyPageAsideTemplate";

export type MusicianAsideProp = {
    avatar: string;
    alias: string;
    address: string;
    genre: string;
    position: string;
    bio: string;
    sns: {
        instagram: string;
        soundcloud: string;
        youtube: string;
        spotify: string;
        etc: string;
    };
};

function MusicianAside(props: MusicianAsideProp) {
    const { avatar, alias, address, genre, position, bio, sns } = props;

    return (
        <MyPageAsideTemplate>
            <AsideAvatar avatar={avatar} tabName="뮤지션" />
            <StyledAsideUserAlias alias={alias} role="뮤지션" />
            <AsideTemplateInner>
                <StyledAsideUserInfo>
                    <AsideUserInfoRow
                        className="address"
                        label="활동지역"
                        content={address}
                    />
                    <AsideUserInfoRow
                        className="genre"
                        label="장르"
                        content={genre}
                    />
                    <AsideUserInfoRow
                        className="position"
                        label="포지션"
                        content={position}
                    />
                    <AsideUserInfoRow
                        className="bio"
                        label="소개"
                        content={bio}
                    />
                </StyledAsideUserInfo>
                <SnsLinkGroup sns={sns} />
            </AsideTemplateInner>
        </MyPageAsideTemplate>
    );
}

const AsideTemplateInner = styled.div`
    display: grid;
    grid-template-areas: "info" "sns";

    ${media.tablet} {
        grid-template-areas: "sns" "info";
    }
`;

const StyledAsideUserAlias = styled(AsideUserAlias)`
    ${media.tablet} {
        padding-bottom: 0;
    }
`;

const StyledAsideUserInfo = styled(AsideUserInfo)`
    grid-area: info;

    ${media.tablet} {
        grid-template-columns: repeat(3, 1fr);
        row-gap: 16px;

        li.address {
            text-align: start;
        }

        li.genre {
            text-align: center;
        }

        li.position {
            text-align: end;
        }

        li.bio {
            grid-column: 1 / 4;
            text-align: start;
        }
    }
`;

export default MusicianAside;
