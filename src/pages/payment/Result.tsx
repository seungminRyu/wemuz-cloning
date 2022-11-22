import styled from "styled-components";
import ResultComment from "../../components/payment/result/ResultComment";
import ResultDetails from "../../components/payment/result/ResultDetails";
import ResultHeader from "../../components/payment/result/ResultHeader";
import ShareModal from "../../components/common/ShareModal";
import useToggle from "../../lib/hooks/useToggle";
import ResultLinkContainer from "../../components/payment/result/ResultLinkContainer";
import { Navigate } from "react-router-dom";
import useUser from "../../lib/hooks/useUser";
import PageTemplate from "../../components/global/PageTemplate";
import { MainContainer } from "../../components/global/GlobalStyles";
import media from "../../lib/styles/media";

export type ResultProp = {
    paymentResult: any | null;
};

function Result(props: ResultProp) {
    const { paymentResult } = props;
    const [shareOpen, toggleShareOpen] = useToggle(false);
    const user = useUser();

    if (!user || !paymentResult) {
        return <Navigate replace to="/" />;
    }

    const {
        funding: {
            id,
            title,
            thumbnail,
            hostAlias,
            hostPhoto,
            hostBio,
            placeName,
            performanceDate,
            likeCount,
            isLiked,
        },
        payment: { orderNum, amounts, pg, scheduledPaymentDate },
    } = paymentResult;

    return (
        <PageTemplate>
            <StyledMainContainer>
                <ResultHeader
                    id={id}
                    title={title}
                    thumbnail={thumbnail}
                    likeCount={likeCount}
                    isLiked={isLiked}
                    placeName={placeName}
                    performanceDate={performanceDate}
                    orderNum={orderNum}
                    toggleShareOpen={toggleShareOpen}
                />
                <ResultDetails
                    priceAmount={amounts}
                    paymentMethod={pg}
                    scheduledPaymentDate={scheduledPaymentDate}
                />
                <ResultComment
                    hostAlias={hostAlias}
                    hostBio={hostBio}
                    hostPhoto={hostPhoto}
                />
                <ResultLinkContainer />
                <ShareModal
                    title={title}
                    thumbnail={thumbnail}
                    open={shareOpen}
                    toggleOpen={toggleShareOpen}
                />
            </StyledMainContainer>
        </PageTemplate>
    );
}

const StyledMainContainer = styled(MainContainer)`
    ${media.mobile} {
        padding: 40px 0 120px;
    }
`;

export default Result;
