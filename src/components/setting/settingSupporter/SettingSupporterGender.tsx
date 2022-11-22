import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import palette from "../../../lib/styles/palette";
import { useSettingSupporter } from "../../../pages/setting/SettingSupporter";
import RadioInput from "../../common/RadioInput";
import { SettingLabel } from "../SettingStyles";

export type SettingSupporterGenderProp = {};

function SettingSupporterGender(props: SettingSupporterGenderProp) {
    const mounted = useRef(false);
    const {
        dispatchSupporterData,
        supporterData: { gender: userGender },
    } = useSettingSupporter();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        dispatchSupporterData({ type: "GENDER", data: value });
    };

    useEffect(() => {
        mounted.current = true;
    }, []);

    return (
        <SettingSupporterGenderBlock>
            <SettingLabel>성별</SettingLabel>
            <GenderOptionsContainer>
                <RadioInput
                    id="male"
                    name="gender"
                    value="male"
                    onChange={onChange}
                    {...(!mounted.current && {
                        checked: "male" === userGender,
                    })}
                >
                    <GenderOptionBtn htmlFor="male">남자</GenderOptionBtn>
                </RadioInput>
                <RadioInput
                    id="female"
                    name="gender"
                    value="female"
                    onChange={onChange}
                    {...(!mounted.current && {
                        checked: "female" === userGender,
                    })}
                >
                    <GenderOptionBtn htmlFor="female">여자</GenderOptionBtn>
                </RadioInput>
                <RadioInput
                    id="other"
                    name="gender"
                    value="other"
                    onChange={onChange}
                    {...(!mounted.current && {
                        checked: "other" === userGender,
                    })}
                >
                    <GenderOptionBtn htmlFor="other">비공개</GenderOptionBtn>
                </RadioInput>
            </GenderOptionsContainer>
        </SettingSupporterGenderBlock>
    );
}

const SettingSupporterGenderBlock = styled.div`
    margin-top: 40px;
`;

const GenderOptionsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 10px;
    margin-top: 8px;
`;

const GenderOptionBtn = styled(RadioInput.Btn)`
    width: 100%;
    height: 38px;
    font-size: 14px;
    color: ${palette.gray0};
    background-color: ${palette.white0};
    text-align: center;
    border-radius: 4px;
    border: 1px solid ${palette.gray2};
    transition: background-color 0.2s, color 0.2s;
    padding: 11px 0;

    input:checked + & {
        border: 1px solid ${palette.purple0};
        color: ${palette.white0};
        background-color: ${palette.purple0};
    }

    input:checked + &::before {
        display: none;
    }
`;

export default SettingSupporterGender;
