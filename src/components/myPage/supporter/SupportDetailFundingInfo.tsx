import styled from "styled-components";
import media from "../../../lib/styles/media";
import { formatFundingState, parseDateString } from "../../../lib/utils";
import { MyPageHeading2 } from "../MyPageStyles";
import {
    SupportDetailContent,
    SupportDetailInfoContainer,
    SupportDetailInfoRow,
    SupportDetailLabel,
} from "./SupportDetailStyles";

export type SupportDetailFundingInfoProp = {
    title: string;
    musician: string;
    state: string;
    endDate: string;
};

function SupportDetailFundingInfo(props: SupportDetailFundingInfoProp) {
    const { title, musician, state, endDate } = props;
    const stateText = `예매 ${formatFundingState(state)}`;
    const endDateText = (() => {
        const { year, month, date } = parseDateString(endDate);
        return `${year}.${month}.${date}`;
    })();

    return (
        <Block>
            <StyledMyPageHeading2>공연 정보</StyledMyPageHeading2>
            <SupportDetailInfoContainer>
                <SupportDetailInfoRow>
                    <SupportDetailLabel>공연 제목</SupportDetailLabel>
                    <SupportDetailContent>{title}</SupportDetailContent>
                </SupportDetailInfoRow>
                <SupportDetailInfoRow>
                    <SupportDetailLabel>공연 뮤지션</SupportDetailLabel>
                    <SupportDetailContent>{musician}</SupportDetailContent>
                </SupportDetailInfoRow>
                <SupportDetailInfoRow>
                    <SupportDetailLabel>공연 상태</SupportDetailLabel>
                    <SupportDetailContent>{stateText}</SupportDetailContent>
                </SupportDetailInfoRow>
                <SupportDetailInfoRow>
                    <SupportDetailLabel>예매 마감일</SupportDetailLabel>
                    <SupportDetailContent>{endDateText}</SupportDetailContent>
                </SupportDetailInfoRow>
            </SupportDetailInfoContainer>
        </Block>
    );
}

const Block = styled.div`
    margin-top: 48px;

    ${media.mobile} {
        margin-top: 40px;
    }
`;

const StyledMyPageHeading2 = styled(MyPageHeading2)`
    ${media.mobile} {
        padding: 0 20px;
    }
`;

export default SupportDetailFundingInfo;
