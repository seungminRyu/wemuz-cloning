import React from "react";
import styled from "styled-components";
import media from "../../lib/styles/media";
import ModalTemplate from "../common/ModalTemplate";
import DetailPackageSelect from "./DetailPackageSelect";

export type DetailPackageSelectModalProp = {
    open: boolean;
    toggleOpen: () => void;
};

function DetailPackageSelectModal(props: DetailPackageSelectModalProp) {
    const { open, toggleOpen } = props;

    return (
        <StyledModalTemplate open={open} onClick={toggleOpen}>
            <DetailPackageSelect toggleOpen={toggleOpen} />
        </StyledModalTemplate>
    );
}

const StyledModalTemplate = styled(ModalTemplate)`
    display: none;

    ${media.tablet} {
        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: 100%;
        padding-top: 100px;
    }

    ${media.mobile} {
        padding-top: 60px;
    }
`;

export default DetailPackageSelectModal;
