import styled from "styled-components";
import media from "../../../lib/styles/media";
import useDetailInfo from "../../../pages/detail/hooks/useDetailInfo";
import { DetailSectionTitle } from "../DetailStyles";
import PackageItem from "./PackageItem";

export type PackageProp = {};

function Package(props: PackageProp) {
    const {
        detailInfo: { fundingPackages },
        loading,
    } = useDetailInfo();

    return !loading ? (
        <PackageBlock>
            <DetailSectionTitle>공연 패키지 정보</DetailSectionTitle>
            <div className="package-container">
                {fundingPackages.map((aPackage, i) => (
                    <PackageItem
                        key={i}
                        description={aPackage.description}
                        items={aPackage.items}
                        name={aPackage.name}
                        price={aPackage.price}
                        stockCount={aPackage.stockCount}
                        index={i}
                    />
                ))}
            </div>
        </PackageBlock>
    ) : (
        <></>
    );
}

const PackageBlock = styled.section`
    width: 100%;
    padding: 72px 0 100px;

    .package-container {
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 12px;
        margin-top: 28px;
    }

    ${media.mobile} {
        box-sizing: border-box;
        padding: 60px 20px 0;
    }
`;

export default Package;
