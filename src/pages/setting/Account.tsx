import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import AccountButtonGroup from "../../components/setting/account/AccountButtonGroup";
import AccountProfiles from "../../components/setting/account/AccountProfiles";
import AccountSocials from "../../components/setting/account/AccountSocials";
import {
    SettingContainer,
    SettingHeading,
} from "../../components/setting/SettingStyles";
import useUser from "../../lib/hooks/useUser";
import { formatAccessKey, handleAxiosError } from "../../lib/utils";
import { getUser, renewAccessToken } from "../../lib/api/core/api";
import { useDispatch } from "react-redux";
import { setUser } from "../../modules/core";
import { toast } from "react-toastify";
import PageTemplate from "../../components/global/PageTemplate";

export type AccountProp = {};

function Account(props: AccountProp) {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [encData, setEncData] = useState<string>("");
    const certFormRef = useRef<HTMLFormElement>(null);
    const user = useUser();

    useEffect(() => {
        const loginUser = async () => {
            const refreshItem = localStorage.getItem("refresh");
            if (!refreshItem) return;
            try {
                const refreshToken = JSON.parse(refreshItem);
                const user = await renewAccessToken({
                    refresh: refreshToken,
                }).then(loadUser);

                dispatch(setUser(user));
            } catch (e: any) {
                console.error(e);
                if (e.response && e.response.status === 401) {
                    console.error("Token is invalid or expired");
                    localStorage.removeItem("refresh");
                } else {
                    handleAxiosError(e);
                }
            }
        };

        const loadUser = async (accessToken: string) => {
            const userInfo = await getUser({
                accessKey: formatAccessKey(accessToken),
            });

            return {
                accessToken,
                ...userInfo,
            };
        };

        const postSuccessfulUserCert = async (
            encodeData: string,
            accessKey: string
        ) => {
            await toast
                .promise(
                    axios.post(
                        `${process.env.REACT_APP_END_POINT}/api/v2/users/cert/success/`,
                        {
                            EncodeData: encodeData,
                        },
                        {
                            headers: {
                                Authorization: accessKey,
                            },
                        }
                    ),
                    {
                        pending: "본인인증을 요청 중 입니다.",
                        success: "본인인증을 완료했습니다.",
                        error: "본인인증을 실패했습니다. 잠시후 다시 시도하여 주세요.",
                    }
                )
                .then(() => {
                    loginUser();
                    navigate("/setting/account");
                });
        };

        if (searchParams.get("EncodeData")) {
            const encodeData = searchParams.get("EncodeData") as string;
            const accessKey = formatAccessKey(user.accessToken);
            postSuccessfulUserCert(encodeData, accessKey);
        }
    }, []);

    if (!user) return null;
    const {
        first_name,
        last_name,
        phone,
        phone_varified,
        email,
        google_email,
        kakao_email,
        userprofile_info: { birthdate },
    } = user;
    const name = `${last_name}${first_name}`;

    const getEncData = (accessKey: string) =>
        axios
            .get(
                `${process.env.REACT_APP_END_POINT}/api/v2/users/cert/?return_url=${process.env.REACT_APP_PUBLIC_URL}/setting/account&error_url=${process.env.REACT_APP_PUBLIC_URL}/error/type=inspection&view_type=`,
                {
                    headers: {
                        Authorization: accessKey,
                    },
                }
            )
            .then((res) => {
                if (res.data.enc_data) {
                    return res.data.enc_data;
                } else {
                    console.error("Error: ", res);
                    throw new Error("Wrong response");
                }
            });

    const onClick = async () => {
        const accessKey = formatAccessKey(user.accessToken);
        try {
            const res = await getEncData(accessKey);
            setEncData(res);
            const form = new FormData();
            form.append("m", "checkplusSerivce");
            form.append("EncodeData", res);
            certFormRef.current?.submit();
        } catch (e) {
            toast.error(
                "본인 인증 진행중 에러가 발생 했습니다. 잠시후 다시 시도하여 주세요. "
            );
            handleAxiosError(e);
        }
    };

    return (
        <PageTemplate>
            <SettingContainer>
                <SettingHeading>계정 정보 수정</SettingHeading>
                <AccountProfiles
                    name={name}
                    birth={birthdate}
                    phone={phone}
                    varified={phone_varified}
                    onClick={onClick}
                />
                <AccountSocials
                    email={email}
                    kakaoEmail={kakao_email}
                    googleEmail={google_email}
                />
                <AccountButtonGroup />
                <form
                    ref={certFormRef}
                    name="form_chk"
                    method="post"
                    action="https://nice.checkplus.co.kr/CheckPlusSafeModel/checkplus.cb"
                >
                    <input type="hidden" name="recvMethodType" value="get" />
                    {/* <!-- 요청모드 (필수 데이터) --> */}
                    <input type="hidden" name="m" value="checkplusSerivce" />
                    {/* <!-- 업체정보 암호화 데이터 --> */}
                    <input type="hidden" name="EncodeData" value={encData} />
                    {/* <!-- 팝업 호출 링크 -->	 */}
                </form>
            </SettingContainer>
        </PageTemplate>
    );
}

export default Account;
