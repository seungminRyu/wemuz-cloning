import styled from "styled-components";
import PageTemplate from "../../components/global/PageTemplate";
import IntroHeader from "../../components/openPerfom/intro/IntroHeader";
import IntroBenefits from "../../components/openPerfom/intro/IntroBenefits";
import IntroCatchphrase from "../../components/openPerfom/intro/IntroCatchphrase";
import IntroFAQ from "../../components/openPerfom/intro/IntroFAQ";
import IntroSteps from "../../components/openPerfom/intro/IntroSteps";

export type IntroProp = {};

function Intro(props: IntroProp) {
    return (
        <PageTemplate>
            <IntroBlock>
                <IntroHeader />
                <IntroCatchphrase />
                <IntroBenefits />
                <IntroSteps />
                <IntroFAQ />
            </IntroBlock>
        </PageTemplate>
    );
}

const IntroBlock = styled.div``;

export default Intro;
