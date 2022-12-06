import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import media from "../../lib/styles/media";
import palette from "../../lib/styles/palette";
import OptionsPackages from "../../components/payment/options/OptionsPackages";
import PaymentHeader from "../../components/payment/PaymentHeader";
import PaymentSummary from "../../components/payment/PaymentSummary";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getPaymentFundingAsync } from "../../modules/payment";
import OptionsPriceAmount from "../../components/payment/options/OptionsPriceAmount";
import OptionsComment from "../../components/payment/options/OptionsComment";
import { SelectedPackages } from ".";
import usePaymentFunding from "./hooks/usePaymentFunding";
import { MainContainer } from "../../components/global/GlobalStyles";
import PageTemplate from "../../components/global/PageTemplate";
import useToggle from "../../lib/hooks/useToggle";
import OptionsPopup from "../../components/payment/options/OptionsPopup";
import useUserxx from "../../lib/hooks/useUserxx";

export type OptionsProps = {
    commentOptionRef: React.MutableRefObject<
        | {
              name: boolean;
              package: boolean;
          }
        | undefined
    >;
    userSelectionResult: React.MutableRefObject<{
        totalPackagesCount: number;
        priceAmount: number;
        packages: SelectedPackages;
    }>;
    isSubmitted: boolean;
    toggleIsSubmitted: () => void;
};

function Options(props: OptionsProps) {
    const {
        commentOptionRef,
        userSelectionResult,
        isSubmitted,
        toggleIsSubmitted,
    } = props;
    const [{ packages, isSupported }, loading, error] = usePaymentFunding();
    const [priceAmount, setPriceAmount] = useState<number>(0);
    const [packageCountAmount, setPackageCountAmount] = useState<number>(0);
    const [_paymentInfoHide, _setPaymentInfoHide] = useState({
        name: false,
        package: false,
    });
    const isPackageOptionsFilledList = useRef<boolean[]>([]);
    const [popupOpen, togglePopupOpen] = useToggle(false);
    const user = useUserxx();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        const initIsPackageOptionsFilledList = () => {
            if (packages) {
                isPackageOptionsFilledList.current = Array(
                    packages.length
                ).fill(true);
            }
        };

        initIsPackageOptionsFilledList();
    }, [packages]);

    useEffect(() => {
        const setSelectionResult = () => {
            userSelectionResult.current.priceAmount = priceAmount;
            let totalCount = 0;
            userSelectionResult.current.packages.forEach((elem) => {
                totalCount += elem.count;
            });
            userSelectionResult.current.totalPackagesCount = totalCount;
        };

        if (isSubmitted) {
            setSelectionResult();
        }
    });

    useEffect(() => {
        const loadFundingPaymentInfo = (accessKey: string) => {
            dispatch(
                getPaymentFundingAsync.request({
                    id: params.id as string,
                    accessKey,
                })
            );
        };

        if (!user) {
            toast.warning("로그인 후 이용해주세요.");
            navigate("/login", { replace: true });
            return;
        }

        if (!params.id) {
            toast.warning("공연 정보가 없습니다.");
            navigate("/");
            return;
        }

        if (params.id && user) {
            loadFundingPaymentInfo(user.accessKey);
        }
    }, []);

    useEffect(() => {
        if (error) {
            navigate(`/detail/${params.id}`);
            toast.warning("공연 예매 페이지 로드중 문제가 발생했습니다.");
        }
    }, [error]);

    useEffect(() => {
        if (!loading && isSupported) {
            navigate(`/detail/${params.id}`);
            toast("이미 예매한 공연입니다.");
        }
    });

    const checkAllPackageOptionsFilled = () => {
        let ret = true;
        isPackageOptionsFilledList.current.forEach((elem) => {
            ret = ret && elem;
        });
        return ret;
    };

    const onNextStep = () => {
        if (packageCountAmount === 0) {
            toast.warning("패키지를 최소 1개 이상 선택해주세요.");
            return;
        }

        if (!checkAllPackageOptionsFilled()) {
            toast.warning("선택한 패키지의 모든 옵션을 선택해주세요.");
            return;
        }

        if (packageCountAmount !== 0 && priceAmount === 0) {
            togglePopupOpen();
        } else {
            toggleIsSubmitted();
        }
    };

    return (
        <PageTemplate>
            <StyledMainContainer>
                <PaymentHeader curStep={1} />
                <PaymentSummary />
                <OptionsBody>
                    <OptionsPackages
                        priceAmount={priceAmount}
                        setPriceAmount={setPriceAmount}
                        packageCountAmount={packageCountAmount}
                        setPackageCountAmount={setPackageCountAmount}
                        userSelectionResult={userSelectionResult}
                        isSubmitted={isSubmitted}
                        isPackageOptionsFilledList={isPackageOptionsFilledList}
                    />
                    <OptionsComment
                        commentOptionRef={commentOptionRef}
                        isSubmitted={isSubmitted}
                        _paymentInfoHide={_paymentInfoHide}
                        _setPaymentInfoHide={_setPaymentInfoHide}
                    />
                    <OptionsPriceAmount
                        priceAmount={priceAmount}
                        _paymentInfoHide={_paymentInfoHide}
                    />
                    <NextStepBtn onClick={onNextStep}>다음 단계로</NextStepBtn>
                </OptionsBody>
            </StyledMainContainer>
            <OptionsPopup
                open={popupOpen}
                toggleOpen={togglePopupOpen}
                onClick={toggleIsSubmitted}
            />
        </PageTemplate>
    );
}

const StyledMainContainer = styled(MainContainer)`
    ${media.mobile} {
        padding: 40px 0 120px;
    }
`;

const OptionsBody = styled.main`
    padding-top: 100px;

    ${media.mobile} {
        padding: 60px 20px 0;
    }
`;

const NextStepBtn = styled.button`
    display: block;
    font-size: 18px;
    color: ${palette.white0};
    background-color: ${palette.purple0};
    padding: 17px 50px 15px;
    border-radius: 4px;
    transition: background-color 0.2s;
    margin: 80px auto 0;

    &:hover {
        background-color: ${palette.purple3};
    }

    ${media.mobile} {
        font-size: 14px;
        padding: 13px 30px 11px;
        margin: 36px auto 0;
    }
`;

export default Options;
