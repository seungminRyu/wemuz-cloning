import React from "react";
import styled, { css } from "styled-components";
import useToggle from "../../../lib/hooks/useToggle";
import fonts from "../../../lib/styles/fonts";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";
import { formatPrice, getAlphabetOrder } from "../../../lib/utils";

import { ReactComponent as OpenIco } from "../../../static/icons/detail/ico_down_arrow.svg";
import exampleItemImg from "../../../static/imgs/detail/img_example_item.svg";

export type PackageItemProp = {
    description: string | null;
    items: {
        name: string;
        photo: string | null;
        count: number;
    }[];
    name: string;
    price: number;
    stockCount: number | null;
    index: number;
};

function PackageItem(props: PackageItemProp) {
    const { description, items, name, price, stockCount, index } = props;
    const [isActive, toggleIsActive] = useToggle(false);
    const isPackageHasItems = items.length > 0;

    const onPackageInfoClick = () => toggleIsActive();

    return (
        <PackageItemBlock>
            <PackageInfo
                onClick={isPackageHasItems ? onPackageInfoClick : undefined}
                isActive={isActive}
            >
                <PackageLabel>
                    <span>{getAlphabetOrder(index + 1)}</span>
                </PackageLabel>
                <PackageHeader>
                    <span className="name">{`${name}: `}</span>
                    <span className="price">{formatPrice(price)}원</span>
                </PackageHeader>
                <PackageServiceList>
                    {items.map((item, i) => (
                        <span className="service-item" key={i}>
                            {`${item.name} ${item.count}개`}
                        </span>
                    ))}
                </PackageServiceList>
                {isPackageHasItems && (
                    <div className="open-btn-wrapper">
                        <DetailOpenBtn isActive={isActive}>
                            <StyledOpenIco />
                        </DetailOpenBtn>
                    </div>
                )}
            </PackageInfo>
            {isPackageHasItems && (
                <PackageServiceDetail isActive={isActive}>
                    <div className="service-detail-list">
                        {items.map((item, i) => (
                            <ServiceDetailItem key={i}>
                                <div className="service-detail-item-inner">
                                    <img
                                        className="service-photo"
                                        src={
                                            item.photo
                                                ? item.photo
                                                : exampleItemImg
                                        }
                                        alt="굿즈 사진"
                                    />
                                    <p className="service-name">{`${item.name} ${item.count}개`}</p>
                                </div>
                            </ServiceDetailItem>
                        ))}
                    </div>
                </PackageServiceDetail>
            )}
        </PackageItemBlock>
    );
}

const PackageItemBlock = styled.div`
    border-radius: 4px;
    border: 1px solid ${palette.purple0}40;
    background-color: ${palette.white0};
    overflow: hidden;
`;

const PackageInfo = styled.div<{ isActive?: boolean }>`
    display: grid;
    width: 100%;
    box-sizing: border-box;
    grid-template-areas: "label header button" "label service-list button";
    grid-template-columns: auto 1fr auto;
    background-color: ${(props) =>
        props.isActive ? palette.white2 : palette.white0};
    cursor: pointer;
    padding: 0 24px 0 40px;

    .open-btn-wrapper {
        grid-area: button;
        padding-top: 40px;
    }

    ${media.mobile} {
        padding: 24px 16px 20px;

        .open-btn-wrapper {
            padding: 0;
        }
    }
`;

const PackageLabel = styled.label`
    grid-area: label;
    padding: 34px 16px 0 0;

    span {
        display: grid;
        place-content: center;
        width: 28px;
        height: 28px;
        border-radius: 6px;
        font-size: 20px;
        font-weight: ${fonts.weight.bold};
        color: ${palette.white0};
        background-color: ${palette.purple0};
    }

    ${media.mobile} {
        padding: 0;

        span {
            width: 18px;
            height: 18px;
            border-radius: 4px;
            font-size: 14px;
            padding-top: 1px;
        }
    }
`;

const PackageHeader = styled.div`
    grid-area: header;
    padding-top: 36px;

    .name,
    .price {
        font-size: 22px;
        line-height: 30px;
        font-weight: ${fonts.weight.bold};
        color: ${palette.purple0};
    }

    .price {
        background-color: ${palette.purple5};
        padding: 0 1px;
    }

    ${media.mobile} {
        padding: 0 8px;

        .name,
        .price {
            font-size: 16px;
            line-height: 22px;
        }
    }
`;
const PackageServiceList = styled.div`
    grid-area: service-list;
    margin-top: 16px;
    line-height: 25px;
    padding-bottom: 32px;

    .service-item {
        position: relative;
        display: inline-flex;
        align-items: center;
        font-size: 18px;
        padding-left: 14px;
        margin-right: 24px;

        &:before {
            position: absolute;
            top: 8px;
            left: 0;
            content: "";
            display: inline-block;
            width: 6px;
            height: 6px;
            border-radius: 3px;
            background-color: ${palette.black0};
        }
    }

    ${media.mobile} {
        line-height: 19px;
        padding: 0;

        .service-item {
            font-size: 14px;
            padding-left: 8px;
            margin-right: 12px;

            &:before {
                top: 6px;
                width: 4px;
                height: 4px;
                border-radius: 2px;
            }
        }
    }
`;

const DetailOpenBtn = styled.button<{ isActive?: boolean }>`
    transition: transform 0.2s;
    transform: ${(props) => (props.isActive ? "rotate(180deg)" : "rotate(0)")};

    ${media.mobile} {
        padding: 0;
    }
`;

const StyledOpenIco = styled(OpenIco)`
    width: 40px;
    height: 40px;

    ${media.mobile} {
        width: 18px;
        height: 18px;
    }
`;

const PackageServiceDetail = styled.div<{ isActive?: boolean }>`
    display: flex;
    align-items: center;
    overflow-x: scroll;
    background-color: ${palette.white0};
    border-top: 1px solid ${palette.purple0}40;
    box-sizing: border-box;
    padding: 0 60px;
    ${(props) =>
        props.isActive
            ? css`
                  height: 208px;
                  visibility: visible;
                  transition: visibility 0s 0s, height 0.2s ease-in-out;
              `
            : css`
                  height: 0;
                  visibility: hidden;
                  transition: visibility 0s 0.2s, height 0.2s ease-in-out;
              `}

    .service-detail-list {
        display: flex;
    }

    ${media.mobile} {
        padding: 0 15px;

        ${(props) =>
            props.isActive
                ? css`
                      height: 140px;
                  `
                : css`
                      height: 0;
                  `}
    }
`;

const ServiceDetailItem = styled.div`
    width: 160px;

    .service-detail-item-inner {
        width: 160px;
        margin: 0 auto;

        .service-photo {
            width: 160px;
            height: 120px;
            object-fit: cover;
            border-radius: 16px;
        }

        .service-name {
            font-size: 16px;
            text-align: center;
            margin-top: 16px;
        }
    }

    & + & {
        margin-left: 20px;
    }

    ${media.mobile} {
        width: 100px;

        & + & {
            margin-left: 12px;
        }

        .service-detail-item-inner {
            width: 100px;

            .service-photo {
                width: 100px;
                height: 75px;
                border-radius: 8px;
            }

            .service-name {
                font-size: 13px;
                margin-top: 12px;
            }
        }
    }
`;

export default PackageItem;
