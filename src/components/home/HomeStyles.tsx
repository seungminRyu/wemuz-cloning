import styled from "styled-components";
import fonts from "../../lib/styles/fonts";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";
import FundingInfoTag from "./FundingInfoTag";

export const HomeFundingsSection = styled.section`
    max-width: 1440px;
    padding: 0 40px;
    margin: 0 auto;
`;

export const HomeSectionHeading = styled.h2`
    ${fonts.size.scale32}
    font-weight: ${fonts.weight.bold};
    text-align: center;
`;

export const HomeFundingCardGrid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    column-gap: 44px;
    row-gap: 68px;

    ${media.tablet} {
        grid-template-columns: repeat(2, 1fr);
    }

    ${media.mobile} {
        grid-template-columns: repeat(1, 1fr);
        row-gap: 48px;
    }
`;

export const HomeEmptySection = styled.div`
    ${fonts.size.scale22};
    width: 100%;
    border-radius: 8px;
    text-align: center;
    background-color: ${palette.gray5};
    color: ${palette.gray0};
    padding: 100px 0;

    ${media.mobile} {
        padding: 40px 0;
    }
`;

export const HomeLoadNextFundingsBtn = styled.button`
    ${fonts.size.scale20}
    display: block;
    width: 360px;
    border: 1px solid ${palette.gray3};
    border-radius: 32px;
    color: ${palette.gray0};
    white-space: nowrap;
    padding: 20px 0 19px;
    margin: 68px auto 0;
    transition: 0.2s border;

    &:hover {
        border: 1px solid ${palette.purple0};
    }

    ${media.mobile} {
        width: 248px;
        border-radius: 20px;
        padding: 12px 0 11px;
        margin: 40px auto 0;
    }
`;

export const HomeFundingInfoTag = styled(FundingInfoTag)`
    ${fonts.size.scale16}
    margin-top: 16px;

    ${FundingInfoTag.Text} {
        margin-left: 4px;
    }

    ${FundingInfoTag.MiddleBar} {
        margin-left: 8px;
        margin-right: 6px;
    }

    ${FundingInfoTag.HostIco},
    ${FundingInfoTag.PlaceIco} {
        width: 18px;
        height: 18px;
    }

    ${media.mobile} {
        margin-top: 12px;

        ${FundingInfoTag.Text} {
            margin-left: 2px;
        }

        ${FundingInfoTag.MiddleBar} {
            height: 12px;
        }

        ${FundingInfoTag.HostIco},
        ${FundingInfoTag.PlaceIco} {
            width: 14px;
            height: 14px;
        }
    }
`;
