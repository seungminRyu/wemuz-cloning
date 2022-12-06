import styled from "styled-components";
import palette from "../../lib/styles/palette";
import media from "../../lib/styles/media";
import NewLine from "../common/NewLine";

import imgWhiteLogo from "../../static/imgs/global/logo--white.svg";
import imgLogo from "../../static/imgs/global/logo_wemuz.svg";
import imgFacebook from "../../static/imgs/global/link-facebook.svg";
import imgInstagram from "../../static/imgs/global/link-instagram.svg";
import imgKakao from "../../static/imgs/global/link-kakao.svg";
import imgYoutube from "../../static/imgs/global/link-youtube.svg";

export type FooterProp = {
    className?: string;
};

function Footer(props: FooterProp) {
    const { className } = props;

    return (
        <Block className={className}>
            <Inner>
                <Links>
                    <HomeLink href="https://app.wemuz.me" />
                    <WemuzLinkList>
                        <li>
                            <a href="https://wemuz.me/policy?type=terms">
                                이용약관
                            </a>
                        </li>
                        <li>
                            <a href="https://wemuz.me/policy?type=privacy">
                                개인정보 처리방침
                            </a>
                        </li>
                        <li>
                            <a href={process.env.REACT_APP_QNA_URL}>
                                FAQ / 제휴 문의
                            </a>
                        </li>
                    </WemuzLinkList>
                    <SnsLinkList>
                        <li>
                            <a
                                href={process.env.REACT_APP_KAKAO_CHANNEL_URL}
                                className="kakao"
                            ></a>
                        </li>
                        <li>
                            <a
                                href="https://www.youtube.com/channel/UC4dc_EMQc0Y_QqcBoMsIfqA"
                                className="youtube"
                            ></a>
                        </li>
                        <li>
                            <a
                                href="https://www.facebook.com/wemuz_official-100305832049391/"
                                className="facebook"
                            ></a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/wemuz_official/"
                                className="instagram"
                            ></a>
                        </li>
                    </SnsLinkList>
                </Links>
                <HorizontalBar />
                <CompanyInfo>
                    <h5>© 주식회사 초코뮤직</h5>
                    <p>
                        대표: 김민찬<span className="vertical-bar">|</span>
                        사업자등록번호: 527-81-02142
                        <span className="vertical-bar">|</span>
                        <NewLine device={["MOBILE"]} />
                        통신판매 : 2021-부산금정-0683호
                        <span className="vertical-bar">|</span>
                        <NewLine device={["DESKTOP", "TABLET"]} />
                        이메일: wemuzmusic@gmail.com
                        <span className="vertical-bar">|</span>
                        <NewLine device={["MOBILE"]} />
                        유선문의: 070-8064-0774 (평일 오전 9시 ~ 오후 6시, 주말
                        및 공휴일 제외)
                        <span className="vertical-bar">|</span>
                        <br />
                        부산광역시 금정구 부산대학로63번길 2, 제6공학관 6104-2호
                    </p>
                </CompanyInfo>
            </Inner>
        </Block>
    );
}

const Block = styled.footer`
    background-color: ${palette.black1};
`;

const Inner = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    padding: 54px 40px 60px;

    ${media.mobile} {
        padding: 46px 20px 48px;
    }
`;

const Links = styled.div`
    display: grid;
    grid-template-columns: 148px 1fr 200px;
    align-items: center;

    ${media.tablet} {
        grid-template-columns: 1fr 200px;
        row-gap: 20px;
    }

    ${media.mobile} {
        grid-template-columns: 1fr 148px;
        row-gap: 32px;
    }
`;

const HomeLink = styled.a`
    width: 100px;
    height: 20px;
    background-image: url(${imgWhiteLogo});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

    &:hover {
        background-image: url(${imgLogo});
    }
`;

const WemuzLinkList = styled.ul`
    display: flex;

    li {
        font-size: 16px;
        line-height: 18px;
    }

    li + li {
        margin-left: 24px;
    }

    li > a {
        color: ${palette.gray5};
    }

    ${media.tablet} {
        grid-row: 2 / 3;
        grid-column: 1 / 3;
    }

    ${media.mobile} {
        li {
            font-size: 12px;
            line-height: 13px;
        }

        li + li {
            margin-left: 12px;
        }
    }
`;

const SnsLinkList = styled.ul`
    display: flex;
    justify-content: space-between;

    a {
        display: inline-block;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background-color: ${palette.gray0};
        cursor: pointer;
        transition: background-color 0.2s;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;

        &.kakao {
            background-image: url(${imgKakao});
        }
        &.youtube {
            background-image: url(${imgYoutube});
        }
        &.instagram {
            background-image: url(${imgInstagram});
        }
        &.facebook {
            background-image: url(${imgFacebook});
        }
    }

    a: hover {
        background-color: ${palette.purple0};
    }

    ${media.mobile} {
        a {
            width: 28px;
            height: 28px;
        }
    }
`;

const HorizontalBar = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${palette.gray1};
    border-radius: 1px;
    margin: 43px 0 32px;

    ${media.mobile} {
        margin: 32px 0 24;
    }
`;

const CompanyInfo = styled.div`
    h5 {
        font-size: 14px;
        font-weight: 600;
        color: ${palette.gray6};
        line-height: 28px;
        letter-spacing: 0.56px;
        margin-bottom: 12px;
    }

    p {
        font-size: 12px;
        font-weight: 500;
        line-height: 16px;
        color: ${palette.gray6};
    }

    .vertical-bar {
        display: inline-block;
        padding: 0 6px;
    }

    ${media.mobile} {
        h5 {
            font-size: 10px;
            font-weight: 600;
            line-height: 12px;
            letter-spacing: 0.56px;
            margin-bottom: 8px;
        }

        p {
            font-size: 10px;
            font-weight: 500;
            line-height: 14px;
            letter-spacing: -0.2px;
        }
    }
`;

export default Footer;
