import { ReactNode } from "react";
import styled, { FlattenSimpleInterpolation } from "styled-components";
import media from "../../lib/styles/media";
import Footer from "./Footer";
import Gnb from "./Gnb";

export type PageTemplateProp = {
    gnbStyle?: FlattenSimpleInterpolation;
    className?: string;
    children: ReactNode;
};

function PageTemplate(props: PageTemplateProp) {
    const { gnbStyle, className, children } = props;

    return (
        <PageTemplateBlock className={className}>
            <PageTemplate.Gnb extendedStyle={gnbStyle} />
            <Body>{children}</Body>
            <PageTemplate.Footer />
        </PageTemplateBlock>
    );
}

const PageTemplateBlock = styled.div`
    height: 100%;
    margin-top: 80px;

    ${media.mobile} {
        margin-top: 60px;
    }
`;

const Body = styled.div`
    min-height: 100%;
`;

PageTemplate.Gnb = styled(Gnb)``;
PageTemplate.Body = Body;
PageTemplate.Footer = styled(Footer)``;

export default PageTemplate;
