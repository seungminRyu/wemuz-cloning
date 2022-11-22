import React, { ReactElement } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import styled from "styled-components";

export type DropdownProps = {
    children: React.ReactNode;
    className?: string;
};

export type TriggerProps = {
    as: ReactElement;
    className?: string;
};

export type MenuProps = {
    children: React.ReactNode;
    className?: string;
    open: boolean;
    toggleOpen: () => void;
};

function Dropdown(props: DropdownProps) {
    const { children, className } = props;
    return <DropdownBlock className={className}>{children}</DropdownBlock>;
}

const DropdownBlock = styled.div``;

function Trigger(props: TriggerProps) {
    const { as } = props;

    return { as };
}

function Menu(props: MenuProps) {
    const { children, className, open, toggleOpen } = props;

    return open ? (
        <OutsideClickHandler onOutsideClick={toggleOpen}>
            <ul className={className}>{children}</ul>
        </OutsideClickHandler>
    ) : null;
}

const Item = styled.li``;

Dropdown.Trigger = Trigger;
Dropdown.Menu = Menu;
Dropdown.Item = Item;

export default Dropdown;
