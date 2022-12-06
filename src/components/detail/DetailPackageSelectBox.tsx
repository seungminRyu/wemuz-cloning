import styled, { css } from "styled-components";
import fonts from "../../lib/styles/fonts";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";

import { ReactComponent as OpenIco } from "../../static/icons/detail/ico_open_arrow.svg";

export type DetailPackageSelectBoxProp = {
    onClick: () => void;
    description: any;
    items: {
        name: any;
        photo: any;
        count: any;
    }[];
    name: any;
    price: any;
    stockCount: any;
};

function DetailPackageSelectBox(props: DetailPackageSelectBoxProp) {
    const { name, price, description, items, stockCount, onClick } = props;

    return (
        <Block onClick={onClick}>
            <PriceBlock>
                <p>
                    {price.toLocaleString()} 원<StyledOpenIco />
                </p>
            </PriceBlock>
            <Details>
                <p className="name">{name}</p>
                <p className="description">{description}</p>
                <ul className="goods-list">
                    {items.map((aItem, i) => (
                        <li className="goods-elem" key={i}>
                            <i className="dot"></i>
                            {aItem.name}
                        </li>
                    ))}
                </ul>
            </Details>
            <StockCounter>
                {/* <span className="count-block sold">{soldCount} 명 선택</span> */}
                <StockCountBlock type={"remained"}>
                    {stockCount} 개 남음
                </StockCountBlock>
                {/* <span className="count-block soldout">
                    총 {soldCount} 개 예매 완료
                </span> */}
            </StockCounter>
        </Block>
    );
}

const Block = styled.div`
    border: 1px solid ${palette.gray3};
    border-radius: 4px;
    background-color: ${palette.white0};
    cursor: pointer;
    padding: 32px 20px 20px;

    &:not(:first-child) {
        margin-top: 12px;
    }

    ${media.tablet} {
        display: grid;
        grid-template-areas: "price counter" "details details";
        padding: 32px 24px 24px;
    }

    ${media.mobile} {
        grid-template-rows: 18px auto;
        padding: 24px 16px 20px;

        &:not(:first-child) {
            margin-top: 8px;
        }
    }
`;

const PriceBlock = styled.div`
    ${fonts.size.scale22}
    font-weight: ${fonts.weight.bold};

    ${media.tablet} {
        grid-area: price;

        p {
            display: inline-flex;
            align-items: center;
        }
    }
`;

const StyledOpenIco = styled(OpenIco)`
    display: none;

    ${media.tablet} {
        display: inline-block;
        width: 24px;
        height: 24px;
        margin-left: 2px;
        margin-top: -2px;
    }

    ${media.mobile} {
        width: 18px;
        heigth: 18px;
        margin-left: 0;
    }
`;

const Details = styled.div`
    ${fonts.size.scale16}
    margin-top: 20px;

    .name {
        font-weight: ${fonts.weight.bold};
    }

    .description {
        line-height: 20px;
        margin-top: 6px;
    }

    .goods-list {
        color: ${palette.gray0};
        margin-top: 20px;

        .goods-elem {
            display: flex;
            align-items: center;
        }

        .goods-elem: not(: first-child) {
            margin-top: 8px;
        }

        .dot {
            display: inline-block;
            width: 4px;
            height: 4px;
            border-radius: 2px;
            background-color: ${palette.gray0};
            margin-right: 8px;
        }
    }

    ${media.tablet} {
        grid-area: details;
        height: auto;

        .goods-list {
            margin-top: 16px;
        }
    }

    ${media.mobile} {
        margin-top: 18px;

        .description {
            line-height: 17px;
            margin-top: 4px;
        }

        .goods-list {
            margin-top: 16px;

            .goods-elem: not(: first-child) {
                margin-top: 6px;
            }

            .dot {
                width: 3px;
                height: 3px;
                border-radius: 1.5px;
                margin-right: 5px;
            }
        }
    }
`;

const StockCounter = styled.div`
    ${fonts.size.scale16}
    display: flex;
    flex-wrap: wrap;
    margin-top: 28px;

    ${media.tablet} {
        grid-area: counter;
        display: flex;
        justify-content: end;
        margin-top: 0;
    }
`;

const StockCountBlock = styled.span<{ type: string }>`
    display: inline-grid;
    place-content: center;
    height: 24px;
    box-sizing: border-box;
    white-space: nowrap;
    border-radius: 2px;
    padding: 0 6px;
    margin-right: 8px;

    ${({ type }) =>
        type === "remained" &&
        css`
            background-color: ${palette.white2};
            color: ${palette.gray0};
        `}

    &.sold {
        background-color: ${palette.purple5};
        color: ${palette.purple0};
    }

    &.soldout {
        background-color: ${palette.gray4};
        color: ${palette.gray1};
    }

    ${media.tablet} {
        margin-right: 0;
        margin-left: 8px;
    }

    ${media.mobile} {
        height: 18px;
        padding: 0 4px;
        margin-left: 6px;
    }
`;

export default DetailPackageSelectBox;
