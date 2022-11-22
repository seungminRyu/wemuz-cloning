import styled from "styled-components";
import useUser from "../../lib/hooks/useUser";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";
import DetailPackageSelectBox from "./DetailPackageSelectBox";
import useGetUserFundingPermissionState from "./hooks/useGetUserFundingPermissionState";
import useHandleFundingPermission from "./hooks/useHandleFundingPermission";

import { ReactComponent as CloseIco } from "../../static/icons/detail/ico_down_arrow.svg";
import useDetailInfo from "../../pages/detail/hooks/useDetailInfo";

export type DetailPackageSelectProp = {
    toggleOpen?: () => void;
};

function DetailPackageSelect(props: DetailPackageSelectProp) {
    const { toggleOpen } = props;
    const user = useUser();
    const {
        detailInfo: {
            fundingId,
            performanceAgeLimit,
            fundingPackages,
            fundingState,
        },
    } = useDetailInfo();
    const getUserFundingPermissionState = useGetUserFundingPermissionState();
    const handleFundingPermission = useHandleFundingPermission();

    const onPackageClick = () => {
        if (fundingState === "running") {
            const userFundingPermissionState = getUserFundingPermissionState(
                user,
                performanceAgeLimit
            );
            handleFundingPermission(userFundingPermissionState, fundingId);
        }
    };

    return (
        <Block>
            <CloseBtn
                onClick={() => {
                    if (toggleOpen) {
                        toggleOpen();
                    }
                }}
            >
                <StyledCloseIco />
            </CloseBtn>
            <p className="label">공연 패키지</p>
            <PackageSelectBoxContainer>
                {fundingPackages.map((aPackage, i) => (
                    <DetailPackageSelectBox
                        price={aPackage.price}
                        name={aPackage.name}
                        description={aPackage.description}
                        items={aPackage.items}
                        stockCount={aPackage.stockCount}
                        key={i}
                        onClick={onPackageClick}
                    />
                ))}
            </PackageSelectBoxContainer>
        </Block>
    );
}

const Block = styled.div`
    margin-top: 60px;

    .label {
        color: ${palette.gray0};
        margin-bottom: 16px;
    }

    ${media.tablet} {
        display: block;
        width: 100%;
        height: 100%;
        background-color: ${palette.white0};
        box-sizing: border-box;
        border-top-right-radius: 28px;
        border-top-left-radius: 28px;
        padding: 0 20px;
        margin-top: 0;

        .label {
            display: none;
        }
    }

    ${media.mobile} {
        padding: 0 12px;
    }
`;

const PackageSelectBoxContainer = styled.div`
    ${media.tablet} {
        height: calc(100% - 42px);
        box-sizing: border-box;
        padding-bottom: 60px;
        overflow-y: scroll;
    }

    ${media.mobile} {
        height: calc(100% - 30px);
        padding-bottom: 40px;
    }
`;

const CloseBtn = styled.button`
    display: none;

    ${media.tablet} {
        display: grid;
        place-content: center;
        width: 100px;
        margin: 0 auto;
    }
`;

const StyledCloseIco = styled(CloseIco)`
    width: 40px;
    height: 40px;

    ${media.mobile} {
        width: 28px;
        height: 28px;
    }
`;

export default DetailPackageSelect;
