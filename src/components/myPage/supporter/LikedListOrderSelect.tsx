import styled, { css } from "styled-components";
import useToggle from "../../../lib/hooks/useToggle";
import fonts from "../../../lib/styles/fonts";
import palette from "../../../lib/styles/palette";
import {
    selectItemStyle,
    selectMenuStyle,
    selectTriggerStyle,
} from "../../../styles/Select";
import Dropdown from "../../common/Dropdown";
import { ZoomIn } from "../../../lib/styles/animations";
import media from "../../../lib/styles/media";

import { ReactComponent as TriggerIco } from "../../../static/icons/global/ico_open.svg";

export type LikedListOrderSelectProp = {
    selected: string;
    options: Array<string>;
    optionsMap: any;
    onClick: React.MouseEventHandler<HTMLLIElement>;
};

function LikedListOrderSelect(props: LikedListOrderSelectProp) {
    const { selected, options, optionsMap, onClick } = props;
    const [menuOpen, toggleMenuOpen] = useToggle(false);

    const onItemClick = (e: React.MouseEvent<HTMLLIElement>) => {
        onClick(e);
        toggleMenuOpen();
    };

    return (
        <StyledDropdown>
            <Trigger onClick={toggleMenuOpen}>
                {optionsMap[selected]}
                <StyledTriggerIco open={menuOpen} />
            </Trigger>
            <StyledMenu open={menuOpen} toggleOpen={toggleMenuOpen}>
                {options.map((elem, i) => (
                    <StyledItem
                        key={`liked-list-order-${i}`}
                        selected={selected === elem}
                        data-value={elem}
                        onClick={onItemClick}
                    >
                        {optionsMap[elem]}
                    </StyledItem>
                ))}
            </StyledMenu>
        </StyledDropdown>
    );
}

const StyledDropdown = styled(Dropdown)`
    position: relative;
    width: fit-content;
    margin-left: auto;
    margin-top: 28px;
`;

const Trigger = styled.div`
    ${selectTriggerStyle}
    position: relative;
    width: 168px;

    ${media.mobile} {
        width: 128px;
    }
`;

const StyledTriggerIco = styled(TriggerIco)<{ open: boolean }>`
    position: absolute;
    right: 12px;
    top: 15px;
    ${(props) =>
        !props.open &&
        css`
            transform: rotate(180deg);
        `}

    ${media.mobile} {
        right: 8px;
        top: 10px;
    }
`;

const StyledMenu = styled(Dropdown.Menu)`
    ${selectMenuStyle}
    position: absolute;
    top: 48px;
    left: 0;
    z-index: 1;
    width: 168px;
    animation-name: ${ZoomIn};
    animation-duration: 0.2s;

    ${media.mobile} {
        top: 38px;
        width: 128px;
    }
`;

const StyledItem = styled(Dropdown.Item)<{ selected: boolean }>`
    ${selectItemStyle}
    ${(props) =>
        props.selected &&
        css`
            color: ${palette.purple0};
            font-weight: ${fonts.weight.bold};
        `}
`;

export default LikedListOrderSelect;
