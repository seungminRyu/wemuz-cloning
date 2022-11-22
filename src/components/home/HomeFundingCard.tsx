import { ReactNode } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import fonts from "../../lib/styles/fonts";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";
import { multiLineEllipsis } from "../../lib/styles/utils";
import FundingInfoTag from "../common/FundingInfoTag";
import AchievementRate from "./AchievementRate";
import CardThumbnail from "./CardThumbnail";
import { fadeIn } from "../../lib/styles/animations";

import { ReactComponent as HostIco } from "../../static/icons/home/ico_musician.svg";
import { ReactComponent as LocationIco } from "../../static/icons/home/ico_place.svg";

export type HomeFundingCardProp = {
    children: ReactNode;
};

export type InfoTagProp = {
    location: string;
    host: string;
};

function HomeFundingCard(props: HomeFundingCardProp) {
    const { children } = props;
    return <Block>{children}</Block>;
}

function InfoTags(props: InfoTagProp) {
    const { location, host } = props;

    return (
        <InfoTagBlock>
            <StyledFundingInfoTag ico={<HostIco />} text={host} />
            <StyledFundingInfoTag ico={<LocationIco />} text={location} />
        </InfoTagBlock>
    );
}

const Block = styled.div`
    opacity: 0;
    animation: ${fadeIn} 0.2s 0.1s forwards ease-in-out;
`;

const HeaderTitleBlock = styled(Link)`
    ${multiLineEllipsis(2)}
    width: 100%;
    height: 60px;
    margin-top: 24px;

    ${media.mobile} {
        height: 48px;
    }
`;

const HeaderTitle = styled.h3`
    ${fonts.size.scale22}
    ${fonts.lineHeight.scale22}
    font-weight: ${fonts.weight.bold};
    color: ${palette.black0};
`;

const SubHeaderBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 36px;

    ${media.mobile} {
        margin-top: 24px;
    }
`;

const SubHeaderText = styled.span`
    ${fonts.size.scale18}
    color:${palette.gray1};
`;

const PriceText = styled.p`
    ${fonts.size.scale18}
    ${fonts.lineHeight.scale18}
        font-weight: ${fonts.weight.bold};
    color: ${palette.purple0};
    text-align: end;
    margin-top: 24px;

    ${media.mobile} {
        margin-top: 16px;
    }
`;

const InfoTagBlock = styled.div`
    display: flex;
    align-items: center;
    margin-top: 16px;

    ${media.mobile} {
        margin-top: 12px;
    }
`;

const StyledFundingInfoTag = styled(FundingInfoTag)`
    ${fonts.size.scale16}
`;

HomeFundingCard.Thumbnail = CardThumbnail;
HomeFundingCard.SubHeaderBlock = SubHeaderBlock;
HomeFundingCard.SubHeaderText = SubHeaderText;
HomeFundingCard.HeaderTitleBlock = HeaderTitleBlock;
HomeFundingCard.HeaderTitle = HeaderTitle;
HomeFundingCard.PriceText = PriceText;
HomeFundingCard.AchievementRate = AchievementRate;
HomeFundingCard.InfoTags = InfoTags;

export default HomeFundingCard;
