import styled from "styled-components";
import fonts from "../../../lib/styles/fonts";
import media from "../../../lib/styles/media";
import { SupportedFundings } from "../../../pages/myPage/hooks/useSupportedFundings";
import { ViewOption } from "../../../pages/myPage/supporter/SupportedList";
import SupportedListFundingBox from "./SupportedListFundingBox";

export type SupportedListFundingsProp = {
    supportedFundings: SupportedFundings;
    viewOption: ViewOption;
};

function SupportedListFundings(props: SupportedListFundingsProp) {
    const { viewOption, supportedFundings } = props;
    const filteredFundings = (() => {
        const targetPaymentState = viewOption;
        return supportedFundings?.filter(
            (aSupportedFunding) =>
                aSupportedFunding.paymentState === targetPaymentState
        );
    })();
    const listedFundings =
        viewOption === "all" ? supportedFundings : filteredFundings;
    const listedFundingsCount = listedFundings?.length;

    return (
        <SupportedListFundingsBlock>
            {listedFundingsCount !== 0 ? (
                listedFundings?.map((aListedFunding, i) => (
                    <SupportedListFundingBox
                        supportedFunding={aListedFunding}
                        key={i}
                    />
                ))
            ) : (
                <p>예매한 공연이 없습니다. 😅</p>
            )}
        </SupportedListFundingsBlock>
    );
}

const SupportedListFundingsBlock = styled.div`
    margin-top: 24px;

    & > p {
        ${fonts.size.scale20}
        text-align: center;
        margin-top: 200px;
    }

    ${media.mobile} {
        margin-top: 12px;

        & > p {
            margin-top: 80px;
        }
    }
`;

export default SupportedListFundings;
