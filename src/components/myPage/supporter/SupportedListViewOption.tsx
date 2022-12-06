import React from "react";
import styled from "styled-components";
import { ViewOption } from "../../../pages/myPage/supporter/SupportedList";
import OptionSelect from "../../common/OptionSelect";

export type SupportedListViewOptionProp = {
    setViewOption: React.Dispatch<React.SetStateAction<ViewOption>>;
};

function SupportedListViewOption(props: SupportedListViewOptionProp) {
    const { setViewOption } = props;
    const options = [
        { val: "all", label: "전체" },
        { val: "payment_scheduled", label: "결제 예약" },
        { val: "payment_schedule_cancelled", label: "결제 예약 취소" },
        { val: "payment_completed", label: "결제 완료" },
        { val: "payment_fail", label: "결제 실패" },
        { val: "payment_refund", label: "결제 환불" },
    ];

    return (
        <SupportedListViewOptionBlock>
            <OptionSelect
                options={options}
                setSelectedOption={setViewOption}
                initialOption={options[0]}
                onOptionItemClick={() => {}}
                onOptionSelectorClick={() => {}}
                onSelectOutsideClick={() => {}}
            />
        </SupportedListViewOptionBlock>
    );
}

const SupportedListViewOptionBlock = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 28px;
`;

export default SupportedListViewOption;
