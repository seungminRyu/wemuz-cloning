import React, { useEffect } from "react";
import styled from "styled-components";
import fonts from "../../../lib/styles/fonts";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";
import CheckBoxInput from "../../common/CheckBoxInput";

export type OptionsCommentProp = {
    isSubmitted: boolean;
    commentOptionRef: React.MutableRefObject<
        | {
              name: boolean;
              package: boolean;
          }
        | undefined
    >;
    _paymentInfoHide: {
        name: boolean;
        package: boolean;
    };
    _setPaymentInfoHide: React.Dispatch<
        React.SetStateAction<{
            name: boolean;
            package: boolean;
        }>
    >;
};

function OptionsComment(props: OptionsCommentProp) {
    const {
        commentOptionRef,
        isSubmitted,
        _paymentInfoHide,
        _setPaymentInfoHide,
    } = props;

    useEffect(() => {
        if (!isSubmitted) return;
        commentOptionRef.current = {
            name: _paymentInfoHide.name,
            package: _paymentInfoHide.package,
        };
    }, [isSubmitted]);

    const onChange: any = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.checked;
        const type = e.target.id;

        if (type === "name-open") {
            _setPaymentInfoHide({
                ..._paymentInfoHide,
                name: value,
            });
        } else {
            _setPaymentInfoHide({
                ..._paymentInfoHide,
                package: value,
            });
        }
    };

    return (
        <Block>
            <h2 className="header">서포터 코멘트 (선택)</h2>
            <p className="header-text">
                서포터 목록에 활동명과 예매 금액이 공개됩니다. 예매금액을
                비공개로 하고 싶으시다면, 비공개를 선택해 주세요.
            </p>
            <div className="comment-option-container">
                <CommentOption>
                    <StyledCheckBoxInput
                        className="option-input"
                        name="comment-open"
                        id="name-open"
                        onChange={onChange}
                    />
                    <label className="option-label" htmlFor="name-open">
                        활동명 비공개
                    </label>
                </CommentOption>
                <CommentOption>
                    <StyledCheckBoxInput
                        className="option-input"
                        name="comment-open"
                        id="package-open"
                        onChange={onChange}
                    />
                    <label className="option-label" htmlFor="package-open">
                        예매 금액 비공개
                    </label>
                </CommentOption>
            </div>
        </Block>
    );
}

const Block = styled.div`
    margin-top: 72px;

    .header {
        font-size: 22px;
        font-weight: ${fonts.weight.bold};
    }

    .header-text {
        font-size: 18px;
        line-height: 25px;
        color: ${palette.gray0};
        margin-top: 12px;
    }

    .comment-option-container {
        display: flex;
        margin-top: 36px;
    }

    ${media.mobile} {
        margin-top: 60px;

        .header {
            font-size: 16px;
        }

        .header-text {
            font-size: 14px;
            line-height: 19px;
            margin-top: 8px;
        }

        .comment-option-container {
            margin-top: 24px;
        }
    }
`;

const CommentOption = styled.div`
    display: flex;
    align-items: center;
    margin-right: 48px;

    .option-label {
        font-size: 18px;
        cursor: pointer;
    }

    ${media.mobile} {
        margin-right: 24px;

        .option-label {
            font-size: 14px;
        }
    }
`;

const StyledCheckBoxInput = styled(CheckBoxInput)`
    margin-right: 10px;
    margin-bottom: -2px;

    label {
        width: 18px;
        height: 18px;
        border: 1px solid ${palette.gray2};

        &::before {
            width: 18px;
            height: 18px;
            background-size: 18px;
        }
    }

    ${media.mobile} {
        margin-right: 6px;

        label {
            width: 14px;
            height: 14px;

            &::before {
                width: 14px;
                height: 14px;
                background-size: 14px;
            }
        }
    }
`;

export default OptionsComment;
