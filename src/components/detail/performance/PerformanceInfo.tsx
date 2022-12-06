import styled from "styled-components";
import fonts from "../../../lib/styles/fonts";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";
import MarkdownTypo from "../../common/MarkdownTypo";
import { DetailSectionTitle } from "../DetailStyles";

export type PerformanceInfoProp = {
    infoItems: {
        icon: string;
        title: string;
        content: string;
        num: number;
    }[];
    notices: {
        title: string;
        content: string;
    }[];
};

function PerformanceInfo(props: PerformanceInfoProp) {
    const { infoItems, notices } = props;

    return (
        <PerformanceInfoBlock>
            <DetailSectionTitle>공연정보</DetailSectionTitle>
            {infoItems.length > 0 && (
                <InfoGrid>
                    {infoItems.map((_, i) => {
                        const item = infoItems.filter(
                            (item) => item.num === i
                        )[0];
                        return (
                            <InfoBox key={i} icon={item.icon}>
                                <p className="info-label">{item.title}</p>
                                <p className="info-content">{item.content}</p>
                            </InfoBox>
                        );
                    })}
                </InfoGrid>
            )}
            {notices.length > 0 && (
                <Notice>
                    <p className="notice-header">
                        ※ 공연 장소 관련 안내 및 전달사항
                    </p>
                    {notices.map((item, i) => (
                        <NoticeItem key={i}>
                            <p className="item-label">
                                <SimpleCircleIco />
                                {item.title}
                            </p>
                            <div className="item-content">
                                <MarkdownTypo>{item.content}</MarkdownTypo>
                            </div>
                        </NoticeItem>
                    ))}
                </Notice>
            )}
        </PerformanceInfoBlock>
    );
}

const PerformanceInfoBlock = styled.div`
    border-top: 1px solid ${palette.gray4};
    padding-top: 100px;

    ${media.mobile} {
        padding-top: 80px;
    }
`;

const InfoGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 12px;
    margin-top: 28px;

    ${media.mobile} {
        grid-template-columns: 1fr;
        grid-gap: 8px;
    }
`;

const InfoBox = styled.div<{ icon: string }>`
    width: 100%;
    font-size: 18px;
    box-sizing: border-box;
    background-color: ${palette.white2};
    background-image: url(${(props) => props.icon});
    background-repeat: no-repeat;
    background-size: 60px;
    background-position: 20px center;
    border-radius: 4px;
    box-shadow: 0 0 2px #33333340;
    padding: 28px 26px 20px 100px;

    .info-label {
        font-weight: ${fonts.weight.bold};
    }

    .info-content {
        color: ${palette.gray0};
        line-height: 25px;
        margin-top: 8px;
    }

    ${media.mobile} {
        font-size: 14px;
        background-size: 44px;
        background-position: 20px 20px;
        padding: 24px 20px 20px 80px;

        .info-content {
            line-height: 19px;
            margin-top: 6px;
        }
    }
`;

const Notice = styled.div`
    border: 1px solid ${palette.gray3};
    border-radius: 4px;
    font-size: 18px;
    padding: 36px 24px;
    margin-top: 12px;

    .notice-header {
        font-weight: ${fonts.weight.bold};
        color: ${palette.purple0};
    }

    ${media.mobile} {
        font-size: 14px;
        margin-top: 8px;
        padding: 28px 12px;
    }
`;

const NoticeItem = styled.div`
    margin-top: 28px;

    .item-label {
        font-weight: ${fonts.weight.bold};
    }

    .item-content {
        color: ${palette.gray0};
        line-height: 25px;
        padding-left: 22px;
        margin-top: 12px;
    }

    ${media.mobile} {
        margin-top: 16px;

        .item-content {
            line-height: 19px;
            padding-left: 16px;
            margin-top: 8px;
        }
    }
`;

const SimpleCircleIco = styled.i`
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 6px;
    background-color: ${palette.black0};
    margin-right: 10px;

    ${media.mobile} {
        width: 10px;
        height: 10px;
        border-radius: 5px;
        margin-right: 6px;
    }
`;

export default PerformanceInfo;
