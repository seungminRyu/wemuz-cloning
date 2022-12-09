import styled from "styled-components";
import ChocomusicIntroTextSection1 from "../components/chocomusic/ChocomusicIntroTextSection1";
import ChocomusicIntroTextSection2 from "../components/chocomusic/ChocomusicIntroTextSection2";
import ChocomusicIntroTextSection3 from "../components/chocomusic/ChocomusicIntroTextSection3";
import ChocomusicIntroVideoSection from "../components/chocomusic/ChocomusicIntroVideoSection";
import ChocomusicJobs from "../components/chocomusic/ChocomusicJobs";
import ChocomusicNav from "../components/chocomusic/ChocomusicNav";
import ChocomusicPartners from "../components/chocomusic/ChocomusicPartners";
import useToggle from "../lib/hooks/useToggle";
import palette from "../lib/styles/palette";
import ChocomusicArticles from "../components/chocomusic/ChocomusicArticles";
import ChocomusicFooter from "../components/chocomusic/ChocomusicFooter";

function Chocomusic() {
    const [sectionActive, toggleSectionActive] = useToggle(false);

    return (
        <Block>
            <ChocomusicNav />
            <ChocomusicIntroVideoSection />
            <ChocomusicIntroTextSection1 active={sectionActive} />
            <ChocomusicIntroTextSection2 active={sectionActive} />
            <ChocomusicIntroTextSection3 active={sectionActive} />
            <ChocomusicJobs active={sectionActive} />
            <ChocomusicPartners active={sectionActive} />
            <ChocomusicArticles />
            <ChocomusicFooter />
            <StateSwitcher>
                <SwitchBtn onClick={toggleSectionActive}>
                    Switch State
                </SwitchBtn>
            </StateSwitcher>
        </Block>
    );
}

const Block = styled.div`
    position: relative;
    height: 100%;
    background-color: ${palette.purple5};
    overflow: scroll;
`;

const StateSwitcher = styled.div`
    position: fixed;
    top: 100px;
    left: 20px;
    width: 100%;
`;

const SwitchBtn = styled.button`
    font-size: 18px;
    background-color: ${palette.blue2};
    box-shadow: 0 0 3px ${palette.shadow0};
    padding: 10px 20px;
`;

export default Chocomusic;
