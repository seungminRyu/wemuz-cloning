import { useEffect } from "react";
import styled from "styled-components";
import fonts from "../../../lib/styles/fonts";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserAsync } from "../../../modules/core";
import Loader from "../../../components/common/Loader";
import palette from "../../../lib/styles/palette";
import { toast } from "react-toastify";
import PageTemplate from "../../../components/global/PageTemplate";

export type RedirectProp = {};

const getSearchQeuries = (search: string) => {
    let ret = {};

    if (search) {
        const searchQueryArr = search.split("?")[1].split("&");
        searchQueryArr.forEach((item) => {
            const [key, value] = item.split("=");
            ret = {
                ...ret,
                [key]: value,
            };
        });
    }

    return ret;
};

function Redirect(props: RedirectProp) {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const { code } = getSearchQeuries(location.search) as any;
        const snsType = sessionStorage.getItem("login_sns_type");
        sessionStorage.removeItem("login_sns_type");

        if (!code || !snsType) {
            if (!code) console.error("No auth code");
            if (!snsType) console.error("No sns type info");
            toast.warning("로그인 중 문제가 발생했습니다. 다시 시도해주세요.");
            navigate("/");
            return;
        }

        dispatch(getUserAsync.request({ code: code, snsType: snsType }));
        navigate("/");
    }, []);

    return (
        <PageTemplate>
            <RedirectBlock>
                <Container>
                    <StyledLoader />
                    <h1>로그인을 진행 중입니다.</h1>
                </Container>
            </RedirectBlock>
        </PageTemplate>
    );
}

const RedirectBlock = styled.div`
    height: 100%;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 300px auto;

    h1 {
        ${fonts.size.scale22}
        font-weight: ${fonts.weight.bold};
        color: ${palette.gray0};
        margin-top: 40px;
    }
`;

const StyledLoader = styled(Loader)``;

export default Redirect;
