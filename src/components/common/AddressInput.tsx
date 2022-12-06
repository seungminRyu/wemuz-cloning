import styled from "styled-components";
import media from "../../lib/styles/media";
import TextInput from "./TextInput";

import searchIco from "../../static/icons/global/ico_find.svg";

export type AddressInputProp = {
    toggleSearchOpen: () => void;
    selectedAddress: string;
    className?: string;
};

function AddressInput(props: AddressInputProp) {
    const { toggleSearchOpen, selectedAddress, className } = props;

    const onSelectedAddressClick = () => {
        toggleSearchOpen();
    };

    return (
        <AddressInputBlock className={className}>
            <SelectedAddress
                onClick={onSelectedAddressClick}
                type="text"
                placeholder="주소를 입력해주세요."
                value={selectedAddress}
            />
        </AddressInputBlock>
    );
}

const AddressInputBlock = styled.div`
    width: 592px;
    margin: 60px auto 0;

    ${media.tablet} {
        width: 100%;
        padding: 0 8px;
    }

    ${media.mobile} {
        padding: 0;
        margin-top: 28px;
    }
`;

const SelectedAddress = styled(TextInput)`
    background-image: url(${searchIco});
    background-repeat: no-repeat;
    background-position: bottom 14px right 12px;
    background-size: 40px;
    padding: 21px 52px 21px 20px;

    ${media.mobile} {
        background-position: bottom 7px right 10px;
        background-size: 24px;
        padding: 10px 34px 9px 12px;
    }
`;

export default AddressInput;
