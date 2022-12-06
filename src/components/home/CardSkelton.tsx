import styled from "styled-components";
import media from "../../lib/styles/media";
import { SkelElem } from "../common/Skeleton";

function Skeleton(props: any) {
    const { num } = props;

    return (
        <SkeletonBlock>
            <SkelElem size="sm" className="title" idx={0} />
            <div className="inner">
                {Array(num)
                    .fill(null)
                    .map((_, i) => (
                        <SkelElem
                            size="sm"
                            className="funding-card"
                            key={i}
                            idx={i}
                        />
                    ))}
            </div>
        </SkeletonBlock>
    );
}

const SkeletonBlock = styled.div`
    .title {
        width: 270px;
        height: 35px;
    }

    .inner {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        width: 100%;
        column-gap: 44px;
        row-gap: 68px;
        margin-top: 42px;

        .funding-card {
            width: 100%;
            aspect-ratio: 358 / 500;
        }
    }

    ${media.tablet} {
        .inner {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    ${media.mobile} {
        .title {
            width: 170px;
            height: 24px;
        }

        .inner {
            grid-template-columns: repeat(1, 1fr);
            row-gap: 48px;
            margin-top: 20px;

            .funding-card {
                aspect-ratio: 728 / 700;
            }
        }
    }
`;

export default Skeleton;
