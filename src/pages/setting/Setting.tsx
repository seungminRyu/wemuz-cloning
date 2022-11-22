import styled from "styled-components";
import SettingTabList from "../../components/setting/SettingTabList";
import {
    SettingContainer,
    SettingHeading,
} from "../../components/setting/SettingStyles";

export type SettingProp = {};

function Setting(props: SettingProp) {
    return (
        <StyledSettingContainer>
            <SettingHeading>설정</SettingHeading>
            <SettingTabList />
        </StyledSettingContainer>
    );
}

const StyledSettingContainer = styled(SettingContainer)`
    padding: 70px 20px 252px;
`;

export default Setting;
