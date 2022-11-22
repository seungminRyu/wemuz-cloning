import React, { ReactElement } from "react";
import styled, { css } from "styled-components";

export type Locate = "TOP" | "BOTTOM";

export type FixedBarTemplateProp = {
    locate: Locate;
    children: ReactElement;
};

function FixedBarTemplate(props: FixedBarTemplateProp) {
    const { locate, children } = props;

    return (
        <FixedBarTemplateBlock locate={locate}>
            {children}
        </FixedBarTemplateBlock>
    );
}

const FixedBarTemplateBlock = styled.div<{ locate: Locate }>`
    position: fixed;
    left: 0;
    width: 100%;
    z-index: 10;

    ${({ locate }) => {
        return locate === "TOP"
            ? css`
                  top: 0px;
              `
            : css`
                  bottom: 0px;
              `;
    }}
`;

export default FixedBarTemplate;
