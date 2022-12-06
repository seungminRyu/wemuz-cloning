import styled from "styled-components";
import PerformanceInfo from "./PerformanceInfo";
import PerformanceSetList from "./PerformanceSetList";
import media from "../../../lib/styles/media";
import useDetailInfo from "../../../pages/detail/hooks/useDetailInfo";

export type PerformanceProp = {};

function Performance(props: PerformanceProp) {
    const {
        detailInfo: {
            performanceInfoItems,
            performanceNotices,
            performanceSetList,
        },
        loading,
    } = useDetailInfo();

    return !loading ? (
        <PerformanceBlock
            className="section performance"
            data-name="performance"
        >
            <PerformanceInfo
                infoItems={performanceInfoItems}
                notices={performanceNotices}
            />
            <PerformanceSetList setList={performanceSetList} />
        </PerformanceBlock>
    ) : null;
}

const PerformanceBlock = styled.section`
    margin-top: 100px;

    ${media.mobile} {
        margin-top: 80px;
        padding: 0 20px;
    }
`;

export default Performance;
