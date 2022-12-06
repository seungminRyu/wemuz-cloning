import { ReactNode } from "react";
import styled from "styled-components";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";

export type MyPageAsideTemplateProp = {
    children: ReactNode;
    className?: string;
};

function MyPageAsideTemplate(props: MyPageAsideTemplateProp) {
    const { children, className } = props;

    return (
        <MyPageAsideTemplateBlock className={className}>
            <MyPageAsideTemplateBody>{children}</MyPageAsideTemplateBody>
        </MyPageAsideTemplateBlock>
    );
}

const MyPageAsideTemplateBlock = styled.aside`
    ${media.tablet} {
        padding: 40px 100px;
    }

    ${media.mobile} {
        padding: 28px 24px;
    }
`;

const MyPageAsideTemplateBody = styled.div`
    border: 1px solid ${palette.gray4};
    border-radius: 8px;
    background-color: ${palette.white2};
    padding: 40px 16px 24px;

    ${media.tablet} {
        border: 1px solid ${palette.gray3};
        padding: 20px 20px 24px;
    }

    ${media.mobile} {
        padding: 20px;
    }
`;

export default MyPageAsideTemplate;
