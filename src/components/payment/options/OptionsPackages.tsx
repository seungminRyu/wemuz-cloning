import React from "react";
import styled from "styled-components";
import fonts from "../../../lib/styles/fonts";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";
import OptionsPackageBox from "./OptionsPackageBox";
import { SelectedPackages } from "../../../pages/payment";
import usePaymentFunding from "../../../pages/payment/hooks/usePaymentFunding";

export type OptionsPackagesProp = {
    isSubmitted: boolean;
    isPackageOptionsFilledList: React.MutableRefObject<boolean[]>;
    userSelectionResult: React.MutableRefObject<{
        priceAmount: number;
        packages: SelectedPackages;
    }>;
    priceAmount: number;
    setPriceAmount: React.Dispatch<React.SetStateAction<number>>;
    packageCountAmount: number;
    setPackageCountAmount: React.Dispatch<React.SetStateAction<number>>;
};

function OptionsPackages(props: OptionsPackagesProp) {
    const {
        isSubmitted,
        isPackageOptionsFilledList,
        userSelectionResult,
        priceAmount,
        setPriceAmount,
        packageCountAmount,
        setPackageCountAmount,
    } = props;
    const [{ packages }] = usePaymentFunding();

    return (
        <Block>
            <Header>
                <h2>패키지 선택</h2>
                <p>예매 가능한 패키지의 총 갯수는 최대 5개 입니다.</p>
            </Header>
            <Container>
                {packages.map((aPackage, i) => (
                    <OptionsPackageBox
                        isPackageOptionsFilledList={isPackageOptionsFilledList}
                        priceAmount={priceAmount}
                        setPriceAmount={setPriceAmount}
                        packageCountAmount={packageCountAmount}
                        setPackageCountAmount={setPackageCountAmount}
                        packageInfo={aPackage}
                        userSelectionResult={userSelectionResult}
                        isSubmitted={isSubmitted}
                        packageIdx={i}
                        key={i}
                    />
                ))}
            </Container>
        </Block>
    );
}

const Block = styled.div``;

const Container = styled.div`
    margin-top: 36px;

    ${media.mobile} {
        margin-top: 16px;
    }
`;

const Header = styled.div`
    h2 {
        ${fonts.size.scale22}
        ${fonts.lineHeight.scale22}
        font-weight: ${fonts.weight.bold};
    }

    p {
        ${fonts.size.scale18}
        ${fonts.lineHeight.scale18}
        color: ${palette.gray0};
        margin-top: 12px;
    }

    ${media.mobile} {
        p {
            margin-top: 8px;
        }
    }
`;

export default OptionsPackages;
