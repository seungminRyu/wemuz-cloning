import { memo } from "react";
import styled from "styled-components";
import Host from "./host";
import Performance from "./performance";
import Place from "./place";
import Package from "./package";
import Notification from "./notice";
import media from "../../lib/styles/media";
import Supporter from "./supporter";
import { SkelElem } from "../common/Skeleton";

export type DetailMainProp = {
    loading: boolean;
    supporterOpen: boolean;
};

function DetailMain(props: DetailMainProp) {
    const { loading, supporterOpen } = props;

    if (loading)
        return (
            <DetailMainSkeleton>
                <SkelElem size={"sm"} className="section" idx={0} />
                <SkelElem size={"sm"} className="section" idx={1} />
                <SkelElem size={"sm"} className="section" idx={2} />
                <SkelElem size={"sm"} className="section" idx={3} />
                <SkelElem size={"sm"} className="section" idx={4} />
            </DetailMainSkeleton>
        );

    return (
        <Block>
            <Host />
            <Place />
            <Performance />
            <Package />
            <Notification />
            {/* 서포터 탭을 사용하지 않으므로 주석처리 */}
            {/* {supporterOpen ? (
                <Supporter />
            ) : (
                <>
                    <Host />
                    <Place />
                    <Performance />
                    <Package />
                    <Notification />
                </>
            )} */}
        </Block>
    );
}

const Block = styled.main`
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: 0 40px 100px;

    ${media.mobile} {
        padding: 0 0 120px;
    }
`;

const DetailMainSkeleton = styled.div`
    .section {
        width: 100%;
        height: 300px;
        margin-top: 100px;
    }
    .section + .section {
        margin-top: 40px;
    }

    ${media.tablet} {
        padding: 0 40px;
    }

    ${media.mobile} {
        padding: 0 20px;

        .section {
            height: 200px;
            margin-top: 72px;
        }

        .section + .section {
            margin-top: 20px;
        }
    }
`;

export default memo(DetailMain);
