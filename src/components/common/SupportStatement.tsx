import styled from "styled-components";
import fonts from "../../lib/styles/fonts";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";
import { formatPrice } from "../../lib/utils";
import { SelectedPackages } from "../../pages/payment";

export type SupportStatementProp = {
    totalPackagesCount: number;
    priceAmount: number;
    packages: SelectedPackages;
    headerText: string;
    className?: string;
};

function SupportStatement(props: SupportStatementProp) {
    const { packages, priceAmount, totalPackagesCount, headerText, className } =
        props;

    return (
        <SupportStatementBlock className={className}>
            <Header>{headerText}</Header>
            <Main>
                <SupportedPackageList>
                    {packages.map((aPackage, i) => {
                        const itemsText = aPackage.items
                            .map((aItem) => `${aItem.name} ${aItem.count}개`)
                            .join(" + ");
                        const packagePriceAmount =
                            aPackage.count * aPackage.price;
                        const isPackageHasOption = aPackage.options.length > 0;

                        return (
                            <SupportedPackageItem key={i}>
                                <PackageDetails>
                                    <p className="name">{aPackage.name}</p>
                                    <p className="items">{itemsText}</p>
                                    {isPackageHasOption && (
                                        <ul className="options">
                                            <span>옵션 -</span>
                                            {aPackage.options
                                                .filter(
                                                    (aOption) =>
                                                        aOption.count > 0
                                                )
                                                .map((aOption, i) => (
                                                    <li
                                                        className="option-item"
                                                        key={i}
                                                    >
                                                        {aOption.name}{" "}
                                                        <span className="option-count">
                                                            (X{aOption.count})
                                                        </span>
                                                    </li>
                                                ))}
                                        </ul>
                                    )}
                                </PackageDetails>
                                <PackagePrice>
                                    <p className="amount">
                                        수량 : {aPackage.count}개<span>|</span>
                                        {formatPrice(packagePriceAmount)}원
                                    </p>
                                </PackagePrice>
                            </SupportedPackageItem>
                        );
                    })}
                </SupportedPackageList>
                <TotalAmount>
                    <p className="amount">
                        총 {totalPackagesCount}개<span>|</span>총{" "}
                        {formatPrice(priceAmount)}원
                    </p>
                </TotalAmount>
            </Main>
        </SupportStatementBlock>
    );
}

const SupportStatementBlock = styled.div``;

const Main = styled.div`
    border: 1px solid ${palette.gray3};
    border-radius: 4px;
    margin-top: 28px;

    ${media.mobile} {
        border-radius: 0;
        border: none;
        border-top: 1px solid ${palette.gray3};
        border-bottom: 1px solid ${palette.gray3};
        margin-top: 16px;
    }
`;

const Header = styled.h2`
    ${fonts.size.scale22}
    font-weight: ${fonts.weight.bold};

    ${media.mobile} {
        padding-left: 20px;
    }
`;

const SupportedPackageList = styled.div``;

const SupportedPackageItem = styled.div`
    ${fonts.size.scale18}
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 48px 40px 48px 60px;

    ${media.tablet} {
        grid-template-columns: 1fr;
        padding: 48px 40px 37px 60px;
    }

    ${media.mobile} {
        padding: 28px 20px;
    }
`;

const PackageDetails = styled.div`
    .name {
        position: relative;
        font-weight: ${fonts.weight.bold};
        color: ${palette.purple0};

        &:before {
            content: "";
            position: absolute;
            left: -10px;
            top: 6px;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background-color: ${palette.purple0};
        }
    }

    .items {
        color: ${palette.gray0};
        margin-top: 8px;
    }

    .options {
        position: relative;
        padding-left: 49px;
        margin-top: 24px;
    }

    .options > span {
        position: absolute;
        left: 0;
    }

    .option-item + .option-item {
        margin-top: 8px;
    }

    .option-count {
        color: ${palette.gray1};
    }

    ${media.mobile} {
        .name {
            line-height: 19px;

            &:before {
                display: none;
            }
        }

        .options {
            padding-left: 39px;
            margin-top: 16px;
        }

        .option-item + .option-item {
            margin-top: 8px;
        }
    }
`;

const PackagePrice = styled.div`
    .amount {
        font-weight: ${fonts.weight.bold};
        text-align: end;
    }

    span {
        margin: 0 12px;
    }

    ${media.tablet} {
        .amount {
            margin-top: 16px;
        }

        span {
            margin: 0 10px;
        }
    }
`;

const TotalAmount = styled.div`
    ${fonts.size.scale20}
    font-weight: ${fonts.weight.bold};
    color: ${palette.purple0};
    text-align: end;
    background-color: ${palette.white2};
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    padding: 32px 40px 31px;

    span {
        margin: 0 16px;
    }

    ${media.mobile} {
        padding: 20px 20px 19px;

        span {
            margin: 0 12px;
        }
    }
`;

SupportStatement.Main = Main;
SupportStatement.Header = Header;
SupportStatement.SupportedPackageList = SupportedPackageList;
SupportStatement.SupportedPackageItem = SupportedPackageItem;
SupportStatement.PackageDetails = PackageDetails;
SupportStatement.PackagePrice = PackagePrice;
SupportStatement.TotalAmount = TotalAmount;

export default SupportStatement;
