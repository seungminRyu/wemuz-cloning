import React from "react";
import styled, { css } from "styled-components";
import fonts from "../../lib/styles/fonts";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";

type PaymentHeaderProp = {
    curStep: number;
};

function PaymentHeader(props: PaymentHeaderProp) {
    const { curStep } = props;

    return (
        <Block>
            <HeaderTop>
                <h1>공연 예매하기</h1>
                <Steps>
                    <StepBlock active={curStep === 1}>
                        <div className="step-container">
                            <div className="step-box">
                                <span>Step </span>1
                            </div>
                            <div className="step-name">예매패키지 선택</div>
                        </div>
                    </StepBlock>
                    <StepBlock active={curStep === 2}>
                        <div className="step-container">
                            <div className="step-box">
                                <span>Step </span>2
                            </div>
                            <div className="step-name">
                                결제 예약 및 상세정보
                            </div>
                        </div>
                    </StepBlock>
                </Steps>
            </HeaderTop>
            <HeaderBottom>
                <ul>
                    {curStep === 1 && <li>Step 1. 예매패키지 선택</li>}
                    {curStep === 2 && <li>Step 2. 결제 예약 및 상세정보</li>}
                </ul>
            </HeaderBottom>
        </Block>
    );
}

const Block = styled.div`
    border-bottom: 1px dashed ${palette.gray3};
    padding-bottom: 52px;

    ${media.mobile} {
        padding: 0 20px 16px;
    }
`;

const HeaderTop = styled.div`
    h1 {
        font-size: 32px;
        font-weight: ${fonts.weight.bold};
        color: ${palette.black1};
    }
    
    ${media.mobile} {
        display: flex;
        justify-content: space-between;

        h1 {
            font-size: 22px;
            color: ${palette.black0};
        }
`;

const HeaderBottom = styled.div`
    display: none;

    ${media.mobile} {
        display: block;
        color: ${palette.purple0};
        font-size: 14px;
        margin-top: 36px;
    }
`;

const Steps = styled.div`
    display: grid;
    grid-template-columns: 324px 324px;
    column-gap: 112px;
    place-content: center;
    margin: 72px auto 0;

    ${media.tablet} {
        grid-template-columns: 220px 220px;
        column-gap: 72px;
    }

    ${media.mobile} {
        grid-template-columns: 22px 22px;
        column-gap: 12px;
        border-bottom: none;
        padding: 0;
        margin: 0;
    }
`;

const StepBlock = styled.div<{ active: boolean }>`
    .step-container {
        position: relative;
        display: grid;
        place-items: center;

        .step-box {
            font-size: 18px;
            border-radius: 21px;
            padding: 10px 28px;
            z-index: 1;

            ${(props) =>
                props.active
                    ? css`
                          font-weight: ${fonts.weight.bold};
                          background-color: ${palette.purple0};
                          color: ${palette.white0};
                          box-shadow: 0 0 4px ${palette.purple0}66;
                      `
                    : css`
                          background-color: ${palette.gray5};
                          color: ${palette.gray6};
                          box-shadow: none;
                      `}
        }

        .step-name {
            font-size: 18px;
            ${(props) =>
                props.active
                    ? css`
                          font-weight: ${fonts.weight.bold};
                          color: ${palette.purple0};
                      `
                    : css`
                          color: ${palette.gray6};
                      `}
            margin-top: 20px;
        }
    }

    &:not(:last-child) {
        .step-container::before {
            content: "";
            position: absolute;
            left: 162px;
            top: 20px;
            display: inline-block;
            width: 436px;
            height: 1px;
            background-color: ${palette.gray5};
        }
    }

    ${media.tablet} {
        &:not(:last-child) {
            .step-container::before {
                left: 110px;
                width: 292px;
            }
        }
    }

    ${media.mobile} {
        .step-container {
            .step-box {
                display: grid;
                place-content: center;
                width: 22px;
                height: 22px;
                font-size: 14px;
                padding: 0;

                span {
                    display: none;
                }
            }

            .step-name {
                display: none;
            }
        }

        &:not(:last-child) {
            .step-container::before {
                left: 18px;
                top: 9px;
                width: 12px;
            }
        }
    }
`;

export default React.memo(PaymentHeader);
