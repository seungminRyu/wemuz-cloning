import { ReactElement } from "react";
import styled, { css } from "styled-components";
import fonts from "../../lib/styles/fonts";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";

import { ReactComponent as HostIco } from "../../static/icons/home/ico_musician.svg";
import { ReactComponent as PlaceIco } from "../../static/icons/home/ico_place.svg";

export type FundingInfoTagProp = {
    host: string;
    location: string;
    className?: string;
};

export type TagProp = {
    ico?: ReactElement;
    text: string;
};

function FundingInfoTag(props: FundingInfoTagProp) {
    const { host, location, className } = props;

    return (
        <FundingInfoTagBlock className={className}>
            <Tag ico={<StyledHostIco />} text={host} />
            <MiddleBar />
            <Tag ico={<StyledPlaceIco />} text={location} />
        </FundingInfoTagBlock>
    );
}

function Tag(props: TagProp) {
    const { ico, text } = props;

    return (
        <TagContainer>
            {ico}
            <Text>{text}</Text>
        </TagContainer>
    );
}

const FundingInfoTagBlock = styled.div`
    ${fonts.size.scale18}
    display: flex;
    align-items: center;
    color: ${palette.gray0};
    margin-top: 40px;

    ${media.tablet} {
        margin-top: 32px;
    }

    ${media.mobile} {
        margin-top: 24px;
    }
`;

const TagContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Text = styled.span`
    margin-left: 6px;

    ${media.mobile} {
        margin-left: 2px;
    }
`;

const MiddleBar = styled.div`
    width: 1px;
    height: 16px;
    background-color: ${palette.gray0};
    margin-left: 10px;
    margin-right: 8px;

    ${media.mobile} {
        height: 14px;
        margin-left: 8px;
        margin-right: 6px;
    }
`;

const infoIcoStyle = css`
    ${media.mobile} {
        width: 16px;
        height: 16px;
    }
`;

const StyledHostIco = styled(HostIco)`
    ${infoIcoStyle}
`;

const StyledPlaceIco = styled(PlaceIco)`
    ${infoIcoStyle}
`;

FundingInfoTag.Tag = Tag;
FundingInfoTag.Text = Text;
FundingInfoTag.MiddleBar = MiddleBar;
FundingInfoTag.HostIco = StyledHostIco;
FundingInfoTag.PlaceIco = StyledPlaceIco;

export default FundingInfoTag;
