import React from "react";
import styled from "styled-components";
import fonts from "../../lib/styles/fonts";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";

type AddressSearchGuideProps = {
    visible: boolean;
    className?: string;
};

function AddressSearchGuide(props: AddressSearchGuideProps) {
    const { visible, className } = props;

    return visible ? (
        <AddressSearchGuideBlock className={className}>
            <div className="search-guide-inner">
                <p>주로 연습, 활동, 공연하시는 장소를 입력해 주세요.</p>
                <ul>
                    <li>
                        도로명 <span>예) 00로</span>
                    </li>
                    <li>
                        지역명 <span>예) 00시 00구</span>
                    </li>
                    <li>
                        장소명 <span>예) 00건물</span>
                    </li>
                </ul>
            </div>
        </AddressSearchGuideBlock>
    ) : null;
}

const AddressSearchGuideBlock = styled.div`
    ${fonts.size.scale16}
    margin-top: 28px;

    .search-guide-inner {
        width: 100%;
        height: 152px;
        color: ${palette.gray0};
        background-color: ${palette.gray5};
        border-radius: 4px;
        padding: 24px 20px 20px;
    }

    ul {
        margin-top: 20px;
    }

    li {
        position: relative;
        padding-left: 12px;

        &:before {
            position: absolute;
            top: 6px;
            left: 0;
            content: "";
            display: inline-block;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background-color: ${palette.gray0};
        }
    }

    li + li {
        margin-top: 8px;
    }

    span {
        color: ${palette.purple0};
    }

    ${media.mobile} {
        padding: 0 28px;
        margin-top: 20px;

        .search-guide-inner {
            height: 108px;
            padding: 16px 12px 12px;
        }

        ul {
            margin-top: 12px;
        }

        li {
            padding-left: 8px;

            &:before {
                width: 4px;
                height: 4px;
            }
        }

        li + li {
            margin-top: 6px;
        }
    }
`;

export default AddressSearchGuide;
