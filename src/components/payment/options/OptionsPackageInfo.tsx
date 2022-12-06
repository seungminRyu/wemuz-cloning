import React, { useRef } from "react";
import styled, { css } from "styled-components";
import fonts from "../../../lib/styles/fonts";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";
import { formatPrice } from "../../../lib/utils";
import CheckBoxInput from "../../common/CheckBoxInput";

export type OptionsPackageInfoProp = {
    idx: number;
    price: number;
    name: string;
    stockCount: number;
    description: string;
    items: any[];
    onPackageClick: (e: React.MouseEvent) => void;
};

function OptionsPackageInfo(props: OptionsPackageInfoProp) {
    const { idx, price, name, stockCount, description, items, onPackageClick } =
        props;
    const checkBoxInputRef = useRef<HTMLInputElement>(null);
    const priceText = `${formatPrice(price)}원`;
    const stockText = stockCount === 0 ? "(매진)" : `(${stockCount}개 남음)`;

    const onTextClick = (e: React.MouseEvent) => {
        onPackageClick(e);
        if (!checkBoxInputRef.current) return;
        checkBoxInputRef.current.checked = checkBoxInputRef.current.checked
            ? false
            : true;
    };

    return (
        <Block isSoldOut={stockCount === 0}>
            <PackageSelect>
                <StyledCheckBoxInput
                    inputRef={checkBoxInputRef}
                    className="package-select"
                    name={`package`}
                    id={`package-${idx}`}
                    onClick={onPackageClick}
                    disabled={stockCount === 0}
                />
            </PackageSelect>
            <PackagePrice onClick={onTextClick}>
                <p>{priceText}</p>
            </PackagePrice>
            <PackageDetails onClick={onTextClick}>
                <Name>
                    {name} <StockCount>{stockText}</StockCount>
                </Name>
                <Description>{description}</Description>
                <ItemList>
                    {items.map((aItem, i) => (
                        <li className="items-elem" key={i}>
                            <i className="dot"></i>
                            {aItem.name}
                        </li>
                    ))}
                </ItemList>
            </PackageDetails>
            {/* 배송 상품이 있는 공연은 진행하지 않으므로 주석 처리 */}
            {/* {delivery && (
                    <PackageDelivery>
                        <div className="fee">
                            <span className="label">배송비</span>
                            <span className="content">{delivery.fee}</span>
                        </div>
                        <div className="due-date">
                            <span className="label">전달 예정일</span>
                            <span className="content">{delivery.date}</span>
                        </div>
                    </PackageDelivery>
                )} */}
        </Block>
    );
}

const Block = styled.div<{ isSoldOut: boolean }>`
    display: grid;
    grid-template-areas: "check-box price" "check-box details" "check-box delivery";
    grid-template-columns: 22px 1fr;
    column-gap: 20px;

    ${(props) =>
        props.isSoldOut &&
        css`
            p,
            li {
                color: ${palette.gray6};
            }

            span {
                color: ${palette.gray0};
                font-weight: ${fonts.weight.bold};
            }
        `}

    ${media.mobile} {
        grid-template-areas: "check-box price" "details details" "delivery delivery";
        grid-template-columns: 16px 1fr;
        column-gap: 8px;
    }
`;

const PackageSelect = styled.div`
    grid-area: check-box;
`;

const StyledCheckBoxInput = styled(CheckBoxInput)`
    ${(props) =>
        props.disabled &&
        css`
            label {
                border: 1px solid ${palette.gray6};
                background-color: ${palette.white2};
            }
        `}}
`;

const PackagePrice = styled.div`
    ${fonts.size.scale22}
    grid-area: price;
    font-weight: ${fonts.weight.bold};
    cursor: pointer;
    padding-top: 1px;

    ${media.tablet} {
        p {
            display: inline-flex;
            align-items: center;
        }
    }
`;

const PackageDetails = styled.div`
    ${fonts.size.scale16}
    grid-area: details;
    cursor: pointer;
    margin-top: 24px;

    ${media.tablet} {
        height: auto;
    }

    ${media.mobile} {
        margin-top: 18px;
    }
`;

const Name = styled.p`
    font-weight: ${fonts.weight.bold};
`;

const StockCount = styled.span`
    font-weight: ${fonts.weight.regular};
    color: ${palette.purple0};
`;

const Description = styled.p`
    line-height: 20px;
    margin-top: 8px;

    ${media.mobile} {
        line-height: 17px;
        margin-top: 6px;
    }
`;

const ItemList = styled.ul`
    color: ${palette.gray0};
    margin-top: 20px;

    .items-elem {
        display: flex;
        align-items: center;
    }

    .items-elem: not(: first-child) {
        margin-top: 8px;
    }

    .dot {
        display: inline-block;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: ${palette.gray0};
        margin-right: 8px;
    }

    ${media.tablet} {
        margin-top: 16px;
    }

    ${media.mobile} {
        margin-top: 12px;

        .items-elem: not(: first-child) {
            margin-top: 6px;
        }

        .dot {
            width: 3px;
            height: 3px;
            margin-right: 5px;
        }
    }
`;

const PackageDelivery = styled.div`
    display: flex;
    grid-area: delivery;
    font-size: 16px;
    margin-top: 28px;

    .fee {
        position: relative;
        margin-right: 25px;

        &:before {
            content: "";
            position: absolute;
            top: 0;
            right: -12px;
            width: 1px;
            height: 18px;
            background-color: ${palette.gray6};
        }
    }

    .label {
        color: ${palette.gray2};
        margin-right: 6px;
    }

    .content {
        color: ${palette.gray0};
    }

    ${media.mobile} {
        display: block;
        font-size: 13px;
        margin-top: 16px;

        .fee {
            margin-right: 0;

            &:before {
                display: none;
            }
        }

        .due-date {
            margin-top: 6px;
        }

        .label {
            margin-right: 6px;
        }
    }
`;

export default OptionsPackageInfo;
