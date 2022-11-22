import styled from "styled-components";
import palette from "../../lib/styles/palette";
import media from "../../lib/styles/media";
import fonts from "../../lib/styles/fonts";
import { parseDateString } from "../../lib/utils";

import { ReactComponent as StarIco } from "../../static/icons/purchase/ico_star.svg";

export type PerformanceDateProp = {
    date: string;
    placeName: string;
    className?: string;
};

function PerformanceDate(props: PerformanceDateProp) {
    const { date, placeName, className } = props;
    const dateObj = parseDateString(date);
    const dateText = `${dateObj.year}.${dateObj.month}.${dateObj.date}(${dateObj.day})`;

    return (
        <PerformanceDateBlock className={className}>
            <Inner className="inner">
                <span className="condition">
                    <StyledStarIco />
                    목표 인원/금액 달성 시
                    <StyledStarIco />
                </span>
                <span className="date">{dateText}</span> 공연이
                <span className="place-name"> {placeName}</span>에서 진행됩니다.
            </Inner>
        </PerformanceDateBlock>
    );
}

const PerformanceDateBlock = styled.div`
    position: relative;
    display: grid;
    place-content: center;
    width: 100%;
`;

const Inner = styled.div`
    width: 100vw;
    font-size: 18px;
    text-align: center;
    box-sizing: border-box;
    background-color: ${palette.white2};
    padding: 28px 0;

    span {
        font-weight: ${fonts.weight.bold};
    }

    .condition {
        color: ${palette.purple0};
        margin-right: 20px;
    }

    ${media.tablet} {
        .condition {
            display: none;
        }
    }

    ${media.mobile} {
        font-size: 12px;
        padding: 12px 20px 11px;
    }
`;

export const StyledStarIco = styled(StarIco)`
    margin-bottom: -4px;
`;

export default PerformanceDate;
