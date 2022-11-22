import styled from "styled-components";
import palette from "../../lib/styles/palette";
import media from "../../lib/styles/media";
import fonts from "../../lib/styles/fonts";
import { formatFundingState } from "../../lib/utils";

import { ReactComponent as RightArrowIco } from "../../static/icons/detail/ico_right_arrow.svg";
import { ReactComponent as LocationIco } from "../../static/icons/detail/ico_location.svg";

export type DetailHeaderProp = {
    state: string;
    title: string;
    location: string;
};

function DetailHeader(props: DetailHeaderProp) {
    const { state, title, location } = props;
    const stateText = `예매 ${formatFundingState(state)} 공연`;

    return (
        <DetailHeaderBlock>
            <State>
                <span>홈</span>
                <StyledRightArrowIco />
                <span>{stateText}</span>
            </State>
            <Title>{title}</Title>
            <Location>
                <StyledLocationIco />
                <p>{location}</p>
            </Location>
        </DetailHeaderBlock>
    );
}

const DetailHeaderBlock = styled.div`
    padding: 62px 0 28px;

    ${media.tablet} {
        grid-area: header;
        padding: 48px 40px;
    }

    ${media.mobile} {
        padding: 36px 20px 40px;
    }
`;

const State = styled.div`
    display: flex;
    align-items: center;
    font-size: 16px;
    color: ${palette.gray0};

    ${media.mobile} {
        display: none;
    }
`;

const StyledRightArrowIco = styled(RightArrowIco)`
    margin: 0 6px;
`;

const Title = styled.h1`
    font-size: 32px;
    color: ${palette.black1};
    line-height: 42px;
    font-weight: ${fonts.weight.bold};
    margin-top: 38px;

    ${media.mobile} {
        font-size: 22px;
        line-height: 28px;
        margin-top: 0;
    }
`;

const Location = styled.div`
    position: relative;
    padding-left: 24px;
    margin-top: 20px;

    p {
        ${fonts.size.scale18}
        ${fonts.lineHeight.scale18}
        word-break: break-word;
    }

    ${media.mobile} {
        padding-left: 18px;
        margin-top: 14px;
    }
`;

const StyledLocationIco = styled(LocationIco)`
    position: absolute;
    left: 0;
    top: 2px;
    width: 20px;
    height: 20px;

    ${media.mobile} {
        width: 15px;
        height: 15px;
    }
`;

export default DetailHeader;
