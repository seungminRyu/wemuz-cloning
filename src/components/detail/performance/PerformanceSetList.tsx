import React from "react";
import styled from "styled-components";
import fonts from "../../../lib/styles/fonts";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";
import { DetailSectionTitle } from "../DetailStyles";
export type PerformanceSetListProp = {
    setList: {
        title: string;
        artist: string;
        num: number;
    }[];
};

function PerformanceSetList(props: PerformanceSetListProp) {
    const { setList } = props;
    const setListCnt = setList.length;

    return setListCnt > 0 ? (
        <PerformanceSetListBlock>
            <DetailSectionTitle>공연 예정 곡</DetailSectionTitle>
            <SetListContainer>
                {setList.map((_, i) => {
                    const [item] = setList.filter((item) => item.num === i + 1);
                    return (
                        item && (
                            <SetListItem key={i}>
                                <span className="item-num">
                                    {`${i + 1}`.padStart(2, "0")}
                                </span>
                                <span className="item-name">{`${item.title} - ${item.artist}`}</span>
                            </SetListItem>
                        )
                    );
                })}
            </SetListContainer>
        </PerformanceSetListBlock>
    ) : (
        <></>
    );
}

const PerformanceSetListBlock = styled.div`
    margin-top: 72px;

    ${media.mobile} {
        margin-top: 60px;
    }
`;

const SetListContainer = styled.ul`
    border: 1px solid ${palette.gray3};
    border-radius: 4px;
    padding: 28px 40px;
    margin-top: 28px;

    ${media.mobile} {
        padding: 12px 18px;
        margin-top: 20px;
    }
`;

const SetListItem = styled.li`
    display: grid;
    grid-template-columns: 48px 1fr;
    font-size: 18px;
    line-height: 25px;
    color: ${palette.gray0};
    padding: 20px 0;
    &: not(: first-child) {
        border-top: 2px solid ${palette.gray5};
    }

    .item-num {
        font-weight: ${fonts.weight.bold};
        color: ${palette.black0};
    }

    ${media.mobile} {
        grid-template-columns: 36px 1fr;
        font-size: 14px;
        line-height: 19px;
        padding: 16px 0;
    }
`;

export default PerformanceSetList;
