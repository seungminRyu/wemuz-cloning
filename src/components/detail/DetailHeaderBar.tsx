import styled from "styled-components";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";
import { ellipsis } from "../../lib/styles/utils";
import { setPreventScroll } from "../../lib/utils";
import { Link } from "react-router-dom";
import FixedBarTemplate from "../common/FixedBarTemplate";
import useDetailInfo from "../../pages/detail/hooks/useDetailInfo";
import DetailHeaderBarSkeleton from "./DetailHeaderBarSkeleton";

import { ReactComponent as BackIco } from "../../static/icons/detail/ico_back.svg";
import { ReactComponent as ShareIco } from "../../static/icons/detail/ico_share--sm.svg";

export type DetailHeaderBarProp = {
    toggleShareOpen: () => void;
};

function DetailHeaderBar(props: DetailHeaderBarProp) {
    const { toggleShareOpen } = props;
    const {
        detailInfo: { fundingTitle },
        loading,
    } = useDetailInfo();

    const onShareBtnClick = (): void => {
        toggleShareOpen();
        setPreventScroll(true);
    };

    return (
        <FixedBarTemplate locate="TOP">
            {!loading ? (
                <DetailHeaderBarBlock>
                    <Link to="/">
                        <BackBtn>
                            <BackIco />
                        </BackBtn>
                    </Link>
                    <h2>{fundingTitle}</h2>
                    <ShareBtn onClick={onShareBtnClick}>
                        <ShareIco />
                    </ShareBtn>
                </DetailHeaderBarBlock>
            ) : (
                <DetailHeaderBarSkeleton />
            )}
        </FixedBarTemplate>
    );
}

const DetailHeaderBarBlock = styled.div`
    display: none;

    ${media.tablet} {
        display: grid;
        grid-template-columns: 28px 1fr 28px;
        align-items: center;
        width: 100%;
        height: 58px;
        box-sizing: border-box;
        background-color: ${palette.white0};
        border-bottom: 1px solid ${palette.gray5};
        padding: 0 40px;
        margin-top: 80px;

        h2 {
            width: 100%;
            font-size: 18px;
            text-align: center;
            ${ellipsis}
        }
    }

    ${media.mobile} {
        grid-template-columns: 20px 1fr 20px;
        height: 42px;
        padding: 0px 20px;
        margin-top: 60px;

        h2 {
            box-sizing: border-box;
            font-size: 14px;
            padding: 0 10px;
        }
    }
`;

const BackBtn = styled.button`
    display: block;
    padding: 0;

    svg {
        width: 28px;
        height: 28px;
        margin-bottom: -2px;
    }

    &: hover {
        svg {
            path {
                stroke: ${palette.purple3} !important;
                transition: stroke 0.3s;
            }
        }
    }

    ${media.mobile} {
        svg {
            width: 20px;
            height: 20px;
        }
    }
`;

const ShareBtn = styled.button`
    display: block;
    padding: 0;

    svg {
        width: 28px;
        height: 28px;
        margin-bottom: -3px;
    }

    &: hover {
        svg {
            path {
                stroke: ${palette.purple3} !important;
                transition: stroke 0.3s;
            }
        }
    }

    ${media.mobile} {
        svg {
            width: 20px;
            height: 20px;
        }
    }
`;

export default DetailHeaderBar;
