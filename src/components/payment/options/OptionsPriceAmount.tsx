import styled from "styled-components";
import useUserxx from "../../../lib/hooks/useUserxx";
import fonts from "../../../lib/styles/fonts";
import media from "../../../lib/styles/media";
import palette from "../../../lib/styles/palette";
import { formatPrice } from "../../../lib/utils";
import usePaymentFunding from "../../../pages/payment/hooks/usePaymentFunding";
import Avatar from "../../common/Avatar";

export type OptionsPriceAmountProp = {
    priceAmount: number;
    _paymentInfoHide: {
        name: boolean;
        package: boolean;
    };
};

function OptionsPriceAmount(props: OptionsPriceAmountProp) {
    const { priceAmount, _paymentInfoHide } = props;
    const [{ title }] = usePaymentFunding();
    const user = useUserxx();

    if (!user) return null;
    const { id, name, avatar } = user;

    const aliasText = _paymentInfoHide.name ? `서포터 ${id}` : name;
    const priceText = `${formatPrice(priceAmount)}원`;

    return (
        <Block>
            <Body>
                <Inner>
                    <StyledAvatar src={avatar} alt="유저 프로필 사진" />
                    <AmountText>
                        <p>
                            [{title}]에{" "}
                            <span className="alias">{aliasText}</span>
                            님이{" "}
                            {_paymentInfoHide.package ? null : (
                                <>
                                    <span className="sum">{priceText}</span>을{" "}
                                </>
                            )}{" "}
                            예매합니다.
                        </p>
                    </AmountText>
                </Inner>
            </Body>
        </Block>
    );
}

const Block = styled.div`
    display: grid;
    place-content: center;
    width: 100%;
    margin-top: 120px;
`;

const Body = styled.div`
    background-color: ${palette.purple5};
    display: grid;
    place-content: center;
    width: 100vw;
    padding: 48px 0;

    ${media.mobile} {
        padding: 28px 0;
    }
`;

const Inner = styled.div`
    display: flex;
    align-items: center;
    padding: 0 56px;

    ${media.mobile} {
        padding: 0 24px;
`;

const StyledAvatar = styled(Avatar)`
    width: 60px;
    height: 60px;
    border-radius: 20px;

    ${media.mobile} {
        width: 48px;
        height: 48px;
        border-radius: 16px;
    }
`;

const AmountText = styled.div`
    ${fonts.size.scale20}
    ${fonts.lineHeight.scale20}
    padding: 19px 16px;

    .alias {
        font-weight: ${fonts.weight.bold};
    }

    .sum {
        font-weight: ${fonts.weight.bold};
        color: ${palette.purple0};
    }

    ${media.mobile} {
        padding: 0 0 0 12px;
    }
`;

export default OptionsPriceAmount;
