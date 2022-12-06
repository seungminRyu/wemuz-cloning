import styled from "styled-components";
import useToggle from "../../../lib/hooks/useToggle";
import palette from "../../../lib/styles/palette";
import { useSettingSupporter } from "../../../pages/setting/SettingSupporter";
import {
    SettingEditBtn,
    SettingEmptyInfo,
    SettingLabel,
    SettingLabelContainer,
} from "../SettingStyles";
import SettingSupporterAddressModal from "./SettingSupporterAddressModal";

export type SettingSupporterAddressProp = {};

function SettingSupporterAddress(props: SettingSupporterAddressProp) {
    const [addressSearchOpen, toggleAddressSearchOpen] = useToggle(false);
    const {
        supporterData: { address },
    } = useSettingSupporter();

    const formatSelectedAddress = (address: string) => {
        const addressArr = address.split(" ");
        return `${addressArr[0]} ${addressArr[1]}`;
    };

    return (
        <SettingSupporterAddressBlock>
            <SettingLabelContainer>
                <SettingLabel>지역</SettingLabel>
                <SettingEditBtn onClick={toggleAddressSearchOpen}>
                    지역 변경
                </SettingEditBtn>
            </SettingLabelContainer>
            {address.name ? (
                <SelectedAddress>
                    {formatSelectedAddress(address.name)}
                </SelectedAddress>
            ) : (
                <SettingEmptyInfo>
                    등록된 지역 정보가 없습니다.
                </SettingEmptyInfo>
            )}
            <SettingSupporterAddressModal
                open={addressSearchOpen}
                toggleOpen={toggleAddressSearchOpen}
            />
        </SettingSupporterAddressBlock>
    );
}

const SettingSupporterAddressBlock = styled.div`
    margin-top: 48px;
`;

const SelectedAddress = styled.p`
    font-size: 14px;
    color: ${palette.gray0};
    margin-top: 8px;
`;

export default SettingSupporterAddress;
