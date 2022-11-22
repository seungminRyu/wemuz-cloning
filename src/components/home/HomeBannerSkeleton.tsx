import styled, { keyframes } from "styled-components";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";
import { SkelElem } from "../common/Skeleton";

function HomeBannerSkeleton() {
    return (
        <Block>
            <Inner>
                <InfoBlock>
                    <SkelElem
                        size="sm"
                        className="large-text"
                        idx={0}
                        animation={loading}
                    />
                    <SkelElem
                        size="sm"
                        className="large-text"
                        idx={1}
                        animation={loading}
                    />
                    <SkelElem
                        size="sm"
                        className="small-text"
                        idx={2}
                        animation={loading}
                    />
                </InfoBlock>
                <ImageBlock>
                    <SkelElem
                        size="lg"
                        className="image"
                        idx={3}
                        animation={loading}
                    />
                </ImageBlock>
            </Inner>
        </Block>
    );
}

const loading = keyframes`
    0% {
        background-color: ${palette.gray3};
    }
    35% {
        background-color: ${palette.gray4};
    }
    65%% {
        background-color: ${palette.white2};
    }
    100% {
        background-color: ${palette.gray3};
    }
`;

const Block = styled.div`
    width: 100%;
    height: 576px;
    background-color: ${palette.purple5};
    border-bottom-left-radius: 80px;
    border-bottom-right-radius: 80px;
    padding-top: 180px;

    ${SkelElem} {
        background-color: ${palette.gray3};
    }

    ${media.tablet} {
        height: auto;
        border-bottom-left-radius: 42px;
        border-bottom-right-radius: 42px;
        padding: 80px 0;
    }

    ${media.mobile} {
        border-bottom-left-radius: 26px;
        border-bottom-right-radius: 26px;
        padding: 60px 0 36px;
    }
`;

const Inner = styled.div`
    display: grid;
    grid-template-areas: "info image";
    grid-template-columns: 1fr 736px;
    column-gap: 100px;
    justify-content: space-between;
    max-width: 1440px;
    width: 100%;
    box-sizing: border-box;
    padding: 0 40px;
    margin: 0 auto;

    ${media.tablet} {
        grid-template-areas:
            "image"
            "info";
        grid-template-columns: 1fr;
        height: auto;
        padding: 0px;
    }
`;

const InfoBlock = styled.div`
    grid-area: info;

    .large-text {
        width: 100%;
        height: 40px;
        margin-top: 40px;
    }

    .large-text + .large-text {
        margin-top: 16px;
    }

    .small-text {
        width: 50%;
        height: 20px;
        margin-top: 40px;
    }

    ${media.tablet} {
        height: 295px;
        padding: 0 40px;
    }

    ${media.mobile} {
        height: 205px;
        padding: 0 20px;

        .large-text {
            height: 24px;
        }

        .large-text + .large-text {
            margin-top: 12px;
        }

        .small-text {
            height: 18px;
            margin-top: 25px;
        }
    }
`;

const ImageBlock = styled.div`
    .image {
        width: 736px;
        height: 276px;
    }

    ${media.tablet} {
        .image {
            width: 100%;
            height: auto;
            aspect-ratio: 8 / 3;
            border-radius: 0;
        }
    }
`;

export default HomeBannerSkeleton;
