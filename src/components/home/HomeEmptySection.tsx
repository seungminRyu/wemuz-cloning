import styled from "styled-components";
import fonts from "../../lib/styles/fonts";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";
import { withOpacity, getSampleImage } from "../../lib/styles/utils";

export type HomeEmptySectionProp = {
    text: string;
};

function HomeEmptySection(props: HomeEmptySectionProp) {
    const { text } = props;
    const sample = getSampleImage({ width: 500, height: 400 });

    return (
        <Block>
            <ImgBlock>
                <img src={sample} alt="빈 섹션 이미지" />
                <div></div>
            </ImgBlock>
            <ImgBlock>
                <img src={sample} alt="빈 섹션 이미지" />
                <div>
                    <h3>Comming soon!</h3>
                    <p>{text}</p>
                </div>
            </ImgBlock>
            <ImgBlock>
                <img src={sample} alt="빈 섹션 이미지" />
                <div></div>
            </ImgBlock>
        </Block>
    );
}

const Block = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 32px;

    ${media.tablet} {
        grid-template-columns: 1fr;
    }
`;

const ImgBlock = styled.div`
    position: relative;
    width: 100%;
    height: 324px;
    border-radius: 8px;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        filter: blur(6px);
    }

    div {
        position: absolute;
        top: 0;
        left: 0;
        display: grid;
        place-content: center;
        width: 100%;
        height: 100%;
        background-color: ${palette.black0}${withOpacity(0.2)};
        color: ${palette.white0};
        text-align: center;
    }

    h3 {
        ${fonts.size.scale32}
        font-weight:${fonts.weight.exbold};
    }

    p {
        ${fonts.size.scale18}
        margin-top: 30px;
    }

    ${media.tablet} {
        &:first-child,
        &:last-child {
            display: none;
        }
    }

    ${media.mobile} {
        height: 126px;
        border-radius: 4px;

        p {
            margin-top: 12px;
        }
    }
`;

export default HomeEmptySection;
