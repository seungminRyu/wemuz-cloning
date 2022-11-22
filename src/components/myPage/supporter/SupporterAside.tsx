import styled from "styled-components";
import media from "../../../lib/styles/media";
import AsideAvatar from "../AsideAvatar";
import AsideUserAlias from "../AsideUserAlias";
import AsideUserInfo from "../AsideUserInfo";
import AsideUserInfoRow from "../AsideUserInfoRow";
import MyPageAsideTemplate from "../MyPageAsideTemplate";

export type SupporterAsideProp = {
    name: string;
    avatar: string;
    address: string;
    genres: Array<string>;
};

function SupporterAside(props: SupporterAsideProp) {
    const { address, genres, name, avatar } = props;

    return (
        <MyPageAsideTemplate>
            <AsideAvatar avatar={avatar} tabName="서포터" />
            <AsideUserAlias alias={name} role="서포터" />
            <StyledAsideUserInfo>
                <AsideUserInfoRow label="지역" content={address} />
                <AsideUserInfoRow
                    label="선호 장르"
                    content={genres.join(", ")}
                />
            </StyledAsideUserInfo>
        </MyPageAsideTemplate>
    );
}

const StyledAsideUserInfo = styled(AsideUserInfo)`
    ${media.tablet} {
        grid-template-columns: repeat(2, 1fr);
    }
`;
export default SupporterAside;
