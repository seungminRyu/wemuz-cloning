import styled from "styled-components";
import fonts from "../../../lib/styles/fonts";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";

export type NoticeProvisionProp = {};

function NoticeProvision(props: NoticeProvisionProp) {
    return (
        <Block>
            <h4>상품 정보 제공 고시</h4>
            <ProvisionContainer>
                <ProvisionRow>
                    <div className="row-label">
                        <p>주최 및 기획</p>
                    </div>
                    <div className="row-content">
                        <p>(주) 초코뮤직</p>
                    </div>
                </ProvisionRow>
                <ProvisionRow>
                    <div className="row-label">
                        <p>공연, 예매 문의</p>
                    </div>
                    <div className="row-content">
                        <p>
                            카카오톡 플러스 친구{" "}
                            <a
                                href={process.env.REACT_APP_QNA_URL}
                                className="wemuz-link"
                            >
                                위뮤즈
                            </a>
                        </p>
                    </div>
                </ProvisionRow>
                <ProvisionRow>
                    <div className="row-label">
                        <p>취소, 환불 조건</p>
                    </div>
                    <div className="row-content">
                        <p>
                            공연이 진행 된 후에는 공연 패키지 상품 환불이 불가능
                            합니다.
                        </p>
                    </div>
                </ProvisionRow>
            </ProvisionContainer>
        </Block>
    );
}

const Block = styled.div`
    ${fonts.size.scale18}
    margin-top: 72px;

    h4 {
        font-weight: ${fonts.weight.bold};
    }

    ${media.mobile} {
        margin-top: 60px;
    }
`;

const ProvisionContainer = styled.div`
    margin-top: 16px;

    ${media.mobile} {
        margin-top: 8px;
    }
`;

const ProvisionRow = styled.div`
    display: grid;
    grid-template-columns: 140px 1fr;
    line-height: 25px;

    .row-label {
        color: ${palette.gray0};
        padding: 16px 0;
    }

    .row-content {
        color: ${palette.gray1};
        padding: 16px 20px;

        .wemuz-link {
            &,
            &:link,
            &:visited {
                color: ${palette.gray1};
            }

            &:hover {
                font-weight: ${fonts.weight.bold};
                border-bottom: 1px solid ${palette.gray1};
            }
        }
    }

    & + & {
        border-top: 1px solid ${palette.gray4};
    }

    ${media.mobile} {
        grid-template-columns: 92px 1fr;
        line-height: 19px;

        .row-label {
            padding: 12px 0;
        }

        .row-content {
            padding: 12px 12px;
        }
    }
`;

export default NoticeProvision;
