import styled, { css } from "styled-components";
import fonts from "../../lib/styles/fonts";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";
import { formatRemainingDays } from "../../lib/utils";

export type AchievementRateProp = {
    rate: number;
    remainingDates: number;
};

function AchievementRate(props: AchievementRateProp) {
    const { rate, remainingDates } = props;

    return (
        <AchievementRateBlock>
            <ProgressBar rate={rate}>
                <div className="inner-bar"></div>
            </ProgressBar>
            <Bottom>
                <span className="rate">{rate}% 달성</span>
                <span className="remaining-dates">
                    {formatRemainingDays(remainingDates)}
                </span>
            </Bottom>
        </AchievementRateBlock>
    );
}

const AchievementRateBlock = styled.div`
    margin-top: 12px;

    ${media.mobile} {
        margin-top: 10px;
    }
`;

const ProgressBar = styled.div<{ rate: number }>`
    width: 100%;
    height: 5px;
    border-radius: 2.5px;
    background-color: ${palette.gray4};

    .inner-bar {
        height: 5px;
        border-radius: 2.5px;
        background-color: ${palette.purple3};

        ${(props) => css`
            width: ${props.rate < 100 ? props.rate : 100}%;
        `}
    }

    ${media.mobile} {
        height: 4px;
        border-radius: 2px;

        .inner-bar {
            height: 4px;
            border-radius: 2px;
        }
    }
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 8px 0;

    .rate {
        ${fonts.size.scale18}
        font-weight: ${fonts.weight.bold};
        color: ${palette.gray0};
    }

    .remaining-dates {
        ${fonts.size.scale16}
        color: ${palette.gray1};
    }

    ${media.mobile} {
        padding: 10px 4px 0;
    }
`;

export default AchievementRate;
