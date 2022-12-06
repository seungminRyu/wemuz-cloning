import React from "react";

export type MarkdownTypoProp = {
    children: string;
    className?: string;
};

function MarkdownTypo(props: MarkdownTypoProp) {
    const { children, className } = props;

    return (
        <p
            className={className}
            dangerouslySetInnerHTML={{ __html: children }}
        ></p>
    );
}

export default MarkdownTypo;
