import { ReactElement, ReactNode } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import fonts from "../../lib/styles/fonts";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";
import { formatCriterionText } from "../../lib/utils";

import emptyImg from "../../static/imgs/global/img_empty_image.svg";

export type FundingCardProp = {
    children: ReactNode;
    className?: string;
};

export type ThumbnailProps = {
    id: number;
    src: string | null;
};

export type AchievementProp = {
    value: number;
    criterion: string;
    subText?: ReactElement;
};

export type HeaderGridProp = {
    like?: ReactElement;
    topText?: ReactElement;
    mainText?: ReactElement;
    bottomText?: ReactElement;
};

function FundingCard(props: FundingCardProp) {
    const { children, className } = props;

    return <div className={className}>{children}</div>;
}

function Thumbnail(props: ThumbnailProps) {
    const { id, src } = props;

    return (
        <Link to={`/detail/${id}`}>
            <ThumbnailBlock>
                <img src={src ? src : emptyImg} alt="공연 썸네일" />
            </ThumbnailBlock>
        </Link>
    );
}

const ThumbnailBlock = styled.div`
    position: relative;
    padding-bottom: 75%;
    overflow: hidden;

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.4s;

        &: hover {
            transform: scale(105%);
        }
    }
`;

function Achievement(props: AchievementProp) {
    const { value, criterion, subText } = props;
    const criterionText = formatCriterionText(criterion);
    return (
        <AchievementBlock>
            <ProgressBar rateVal={value}>
                <div className="inner-bar"></div>
            </ProgressBar>
            <TextContainer>
                <AchievementValueBox>
                    <span className="rate">{value}% 달성</span>
                    <span className="criterion">{criterionText}</span>
                </AchievementValueBox>
                {subText}
            </TextContainer>
        </AchievementBlock>
    );
}

const AchievementBlock = styled.div`
    margin-top: 20px;

    ${media.mobile} {
        margin-top: 16px;
    }
`;

const ProgressBar = styled.div<{ rateVal: number }>`
    width: 100%;
    height: 8px;
    border-radius: 4px;
    background-color: ${palette.gray4};

    .inner-bar {
        height: 8px;
        border-radius: 4px;
        background-color: ${palette.purple3};

        ${(props) => css`
            width: ${props.rateVal < 100 ? props.rateVal : 100}%;
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

const TextContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 8px 0;

    ${media.mobile} {
        padding: 8px 4px 0;
    }
`;

const AchievementValueBox = styled.div`
    .rate {
        ${fonts.size.scale18}
        font-weight: ${fonts.weight.bold};
        color: ${palette.gray0};
        margin-right: 6px;
    }

    .criterion {
        ${fonts.size.scale14}
        color: ${palette.gray1};
        border-radius: 2px;
        background-color: #f0f0f0;
        padding: 5px 5px 3px;
    }

    ${media.mobile} {
        .criterion {
            padding: 3px 4px 2px;
        }
    }
`;

function HeaderGrid(props: HeaderGridProp) {
    const { like, topText, mainText, bottomText } = props;

    return (
        <HeaderGridBlock>
            <Top>
                {topText}
                {like}
            </Top>
            <Main>{mainText}</Main>
            {bottomText}
        </HeaderGridBlock>
    );
}

const HeaderGridBlock = styled.div`
    width: 100%;
    margin-top: 28px;

    ${media.mobile} {
        margin-top: 18px;
    }
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Main = styled.div`
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    width: 100%;
    height: 60px;
    word-wrap: break-word;
    overflow: hidden;
    margin-top: 12px;

    ${media.mobile} {
        height: 48px;
        margin-top: 8px;
    }
`;

FundingCard.Thumbnail = Thumbnail;
FundingCard.HeaderGrid = HeaderGrid;
FundingCard.Achievement = Achievement;
FundingCard.Top = styled.div`
    position: relative;
    width: 100%;
    border-radius: 8px;
    border: 1px solid #0000001a;
    overflow: hidden;

    ${media.mobile} {
        border-radius: 4px;
    }
`;
FundingCard.Middle = styled.div``;
FundingCard.Bottom = styled.div``;
FundingCard.Location = styled.span`
    position: absolute;
    top: 16px;
    left: 16px;
    font-size: 16px;
    color: ${palette.white0};
    background-color: ${palette.black0};
    border: 0.5px solid ${palette.gray3};
    border-radius: 2px;
    z-index: 10;
    padding: 10px 11px;

    ${media.mobile} {
        top: 12px;
        left: 12px;
        font-size: 14px;
        padding: 8px 10px;
    }
`;
FundingCard.Tag = styled.div<{ hidden?: boolean; active: boolean }>`
    ${fonts.size.scale18}
    display: grid;
    place-content: center;
    width: 100%;
    height: 44px;
    font-weight: ${fonts.weight.bold};
    color: ${palette.white0};
    ${(props) =>
        props.hidden &&
        css`
            visibility: hidden;
        `}
    ${(props) =>
        css`
            background-color: ${props.active ? palette.purple0 : palette.gray1};
        `};

    ${media.mobile} {
        height: 36px;
    }
`;
FundingCard.Title = styled(Link)`
    ${fonts.size.scale22}
    ${fonts.lineHeight.scale22}
        font-weight: ${fonts.weight.bold};
    color: ${palette.black0};
`;
FundingCard.State = styled.p<{ state: string }>`
    ${fonts.size.scale18}
    position: relative;
    padding-left: 14px;

    &:before {
        content: "";
        position: absolute;
        top: 5px;
        left: 0;
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: ${(props) => {
            switch (props.state) {
                case "running":
                    return palette.purple0;
                case "failed":
                case "cancelled":
                    return palette.gray2;
                default:
                    return palette.black0;
            }
        }};
    }

    ${media.mobile} {
        padding-left: 12px;

        &:before {
            top: 4px;
            width: 6px;
            height: 6px;
        }
    }
`;
export default FundingCard;
