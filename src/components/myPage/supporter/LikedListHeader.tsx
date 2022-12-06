import styled from "styled-components";
import palette from "../../../lib/styles/palette";
import { MyPageHeading1 } from "../MyPageStyles";

export type LikedListHeaderProp = {
    likeCount: number;
};

function LikedListHeader(props: LikedListHeaderProp) {
    const { likeCount } = props;

    return (
        <MyPageHeading1>
            좋아요한 공연{" "}
            <LikedCount active={likeCount > 0}>{likeCount}</LikedCount>
        </MyPageHeading1>
    );
}

const LikedCount = styled.span<{ active: boolean }>`
    color: ${(props) => (props.active ? palette.purple0 : palette.gray2)};
`;

export default LikedListHeader;
